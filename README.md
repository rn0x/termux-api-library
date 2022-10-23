# termux-api-library

<br>

[Termux-API](https://github.com/termux/termux-api) library for NodeJS

# install

- Make sure you've first installed the termux and termux-api on your Android device from the f-droid or github releases.

- - termux - **[f-droid](https://f-droid.org/en/packages/com.termux)** | **[github releases](https://github.com/termux/termux-app/releases)**

- - termux-api - **[f-droid](https://f-droid.org/en/packages/com.termux.api)** | **[github releases](https://github.com/termux/termux-api/releases)**

- To use Termux:API you also need to install the termux-api package.

```

pkg install termux-api

```

- Finally get this node library

```

npm i --save termux-api-library

```

# Example usage

library import

```js
const api = require('termux-api-library');

or 

import api from 'termux-api-library';
```


- [termux-battery-status](https://wiki.termux.com/wiki/Termux-battery-status)

Get the status of the device battery.

```js

await api.termux_battery_status((e) => {

console.log(e);

});

```

- [termux-brightness](https://wiki.termux.com/wiki/Termux-brightness)

Set the screen brightness between 0 and 255.

```js

await api.termux_brightness(255);

```

- [termux-call-log](https://wiki.termux.com/wiki/Termux-call-log)

List call log history.

```js

await api.termux_call_log(10, (e) => {

console.log(e);

})

```

- [termux-camera-info](https://wiki.termux.com/wiki/Termux-camera-info)

Get information about device camera(s).

```js

await api.termux_camera_info((e) => {

console.log(e);

})

```

- [termux-camera-photo](https://wiki.termux.com/wiki/Termux-camera-photo)

Take a photo and save it to a file in JPEG format.

```js

await api.termux_camera_photo(0, './test.jpeg');

```

- [termux-clipboard-get](https://wiki.termux.com/wiki/Termux-clipboard-get)

Get the system clipboard text.

```js

await api.termux_clipboard_get((e) => {

console.log(e);

})

```

- [termux-clipboard-set](https://wiki.termux.com/wiki/Termux-clipboard-set)

Set the system clipboard text.

```js

await api.termux_clipboard_set("hello world")

```

- [termux-contact-list](https://wiki.termux.com/wiki/Termux-contact-list)

List all contacts.

```js

await api.termux_contact_list((e) => {

console.log(e);

})

```

- [termux-dialog](https://wiki.termux.com/wiki/Termux-dialog)

Show a text entry dialog.

```js

const hint = 'Put your password here'

const title = 'input password'

await api.termux_dialog(hint, title, false, true, true, (e) => {

console.log(e);

})

```

- termux-download

Download a files

```js

const url = 'https://example.com/image.jpeg'

const filename = 'photo_2022'

const savePath = '/data/data/com.termux/files/home'

await api.termux_download(url, filename, savePath);

```

- [termux-fingerprint](https://wiki.termux.com/wiki/Termux-fingerprint)

Use fingerprint sensor on device to check for authentication.

```js

await api.termux_fingerprint((e) => {

console.log(e);

})

```

- [termux-location](https://wiki.termux.com/wiki/Termux-location)

Get the device location.

```js

await api.termux_location("gps", "once", (e) => {

console.log(e);

})

or

const data = await api.termux_location('gps', 'once')

console.log(data);

```

- [termux-media-player](https://wiki.termux.com/wiki/Termux-media-player)

Play media files.

```js

const info = await api.termux_media_player.info();

console.log(info);

const play = await api.termux_media_player.play();

console.log(play);

const playFile = await api.termux_media_player.playFile(path);

console.log(playFile);

const pause = await api.termux_media_player.pause();

console.log(pause);

const stop = await api.termux_media_player.stop();

console.log(stop);

```

- [termux-microphone-record](https://wiki.termux.com/wiki/Termux-microphone-record)

Recording using microphone on your device.

```js

const info = await api.termux_microphone_record.info();

console.log(info);

const path = '/data/data/com.termux/files/home/filename.mp3'

const limit = 0

const start = await api.termux_microphone_record.start(path, limit);

console.log(start);

const stop = await api.termux_microphone_record.stop();

console.log(stop);

```

- [termux-notification](https://wiki.termux.com/wiki/Termux-notification)
Display a system notification.

```js
await api.termux_notification(title, text, id);
```

- [termux-notification-remove](https://wiki.termux.com/wiki/Termux-notification-remove)
Remove a notification previously shown with termux-notification --id.

```js
await api.termux_notification_remove(id);
```

- [termux-sensor](https://wiki.termux.com/wiki/Termux-sensor)
Get information about types of sensors as well as live data.

```js
await api.termux_sensor((e) => {
    console.log(e);
});

or

const sensor = await api.termux_sensor();
console.log(sensor);
```

- [termux-share](https://wiki.termux.com/wiki/Termux-share)
Share a file specified as argument received on stdin.

```js
const filepath = "../image.jpeg"
await api.termux_share('send', filepath);
```

- [termux-sms-list](https://wiki.termux.com/wiki/Termux-sms-list)
List SMS messages.

```js
const type = "inbox"
const limit = 10
const sender = undefined || "all" // the number for locate message : To display all senders, type the "all" or don't assign a value to the variable

await api.termux_sms_list(type, limit, sender, (e) => {
    console.log(e);
});

or

const list = await api.termux_sms_list(type, limit, sender);
console.log(list);
```

- [termux-sms-send](https://wiki.termux.com/wiki/Termux-sms-send)
Send a SMS message to the specified recipient number(s).

```js
const number = 05592xxxxx
const slot = "0"
const text = "hello world"
await api.termux_sms_send(number, slot, text);
```

- [termux-telephony-call](https://wiki.termux.com/wiki/Termux-telephony-call)
Call a telephony number. 

```js
// connect
const number = 05592xxxxx
await api.termux_telephony_call.connect(number);

// Close call .

await api.termux_telephony_call.close();
```

- [termux-telephony-cellinfo](https://wiki.termux.com/wiki/Termux-telephony-cellinfo)
Get information about all observed cell information from all radios on the device including the primary and neighboring cells.

```js
const info = await api.termux_telephony_cellinfo();
console.log(info);
```

- [termux-telephony-deviceinfo](https://wiki.termux.com/wiki/Termux-telephony-deviceinfo)
Get information about the telephony device.

```js
const deviceinfo = await api.termux_telephony_deviceinfo();
console.log(deviceinfo);
```

- [termux-toast](https://wiki.termux.com/wiki/Termux-toast)
Show text in a Toast (a transient popup). 

```js
const position = "middle"
const background = "gray"
const text_color = "white"
const text = "hello world"
await api.termux_toast(position, background, text_color, text);
```

- [termux-torch](https://wiki.termux.com/wiki/Termux-torch)
Toggle LED Torch on device.

```js
const values = "on" // on - enable torch. | off - disable torch.
await api.termux_torch(values);
```

- [termux-wifi-connectioninfo](https://wiki.termux.com/wiki/Termux-wifi-connectioninfo)
Print information about current Wi-Fi connection. This information include: SSID (AP name), BSSID (AP mac address), device IP and other. 

```js
await api.termux_wifi_connectioninfo((e) => {
    console.log(e);
});

or  

const wifi = await api.termux_wifi_connectioninfo();
console.log(wifi);
```

# License

[ MIT license ](https://github.com/rn0x/termux-api-library/blob/main/LICENSE)