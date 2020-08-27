// Additional
const minutely = Date.now(60000)
declare("Device.DeviceInfo.X_MIKROTIK_SystemIdentity", {path: minutely, value: minutely});
declare("Device.DeviceInfo.SoftwareVersion", {path: minutely, value: minutely});
declare("Device.DeviceInfo.HardwareVersion", {path: minutely, value: minutely});
declare("Device.DeviceInfo.UpTime", {path: minutely, value: minutely});
declare("Device.DeviceInfo.MemoryStatus.Free", {path: minutely, value: minutely});
declare("Device.DeviceInfo.MemoryStatus.Total", {path: minutely, value: minutely});
declare("Device.DeviceInfo.ProcessStatus.CPUUsage", {path: minutely, value: minutely});
declare("Device.Ethernet.Interface.*.Stats.BytesSent", {path: minutely, value: minutely});
declare("Device.Ethernet.Interface.*.Stats.BytesReceived", {path: minutely, value: minutely});

log("start logic....");
let timestamp = Date.now();
let serialNumber = declare("DeviceID.SerialNumber", {value: 1}).value[0];

let params = [
  {"measurement": "CPEByteStats", "path": "Device.Ethernet.Interface.*.Stats.BytesSent"},
  {"measurement": "CPEByteStats", "path": "Device.Ethernet.Interface.*.Stats.BytesReceived"},
  {"measurement": "CPEDescription", "path": "Device.DeviceInfo.X_MIKROTIK_SystemIdentity"},
  {"measurement": "CPEDescription", "path": "DeviceID.Manufacturer"},
  {"measurement": "CPEDescription", "path": "Device.DeviceInfo.HardwareVersion"},
  {"measurement": "CPEDescription", "path": "Device.DeviceInfo.SoftwareVersion"},
  {"measurement": "CPESystemInfo", "path": "Device.DeviceInfo.UpTime"},
  {"measurement": "CPESystemInfo", "path": "Device.DeviceInfo.ProcessStatus.CPUUsage"},
  {"measurement": "CPESystemInfo", "path": "Device.DeviceInfo.MemoryStatus.Total"}
];

let points = []
for (let param of params) {
  points = appendPointFromParam(points, param["measurement"], param["path"])
}

let freeMemory = declare("Device.DeviceInfo.MemoryStatus.Free", {value: 1}).value[0];
let totalMemory = declare("Device.DeviceInfo.MemoryStatus.Total", {value: 1}).value[0];
let usageMemory = totalMemory - freeMemory;
if (typeof usageMemory !== 'undefined') {
  let point = {};
  point["measurement"] = "CPESystemInfo";
  point["serialNumber"] = serialNumber;
  point["Device.DeviceInfo.MemoryUsage"] = usageMemory;
  point["timestamp"] = timestamp;
  points.push(point);
}

let url = "http://telegraf:9111/CPEStats";
let result = ext('ext-sample', 'PostWebhook', url, JSON.stringify(points));
log("finish");

function appendPointFromParam(points, measurement, path) {
  let resp = declare(path, {value: 1});
  if (resp.size) {
    for (let p of resp) {
      let point = {};
      point["measurement"] = measurement;
      point["serialNumber"] = serialNumber;
      point[p.path] = p.value[0];
      point["timestamp"] = timestamp;
      points.push(point);
    }
  }
  return points
}