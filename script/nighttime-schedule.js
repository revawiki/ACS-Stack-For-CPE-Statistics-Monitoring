const now = Date.now();

//Check for night time tags
let nighttime = declare("Tags.NightTime", {value: 1});
if (nighttime.value !== undefined) {
    log('CPE already on night time mode, returning');
    return;
}

//Night time activation
log('Disabling Internet');
declare("Device.Ethernet.Interface.2.Enable", {path: now, value: now}, {value: false});

log('Entering night time mode. Setting tag');
declare("Tags.NightTime", null, {value: true});
declare("Tags.DayTime", null, {value: false});
