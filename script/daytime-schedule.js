const now = Date.now();

//Check for day time tags
let daytime = declare("Tags.DayTime", {value: 1});
if (daytime.value !== undefined) {
    log('CPE already on day time mode, returning');
    return;
}

//Day time activation
log('Enabling Internet');
declare("Device.Ethernet.Interface.2.Enable", {path: now, value: now}, {value: true});

log('Entering day time mode. Setting tag');
declare("Tags.DayTime", null, {value: true});
declare("Tags.NightTime", null, {value: false});
