# High Fidelity OBS Streaming
> 📺 Stream your OBS to High Fidelity

<img height="300" src="https://raw.githubusercontent.com/makitsune/hifi-obs-streaming/master/README/screenshot.jpg"/>

This is a tutorial on how to stream your OBS output to High Fidelity. I've tried to keep it as simple as I can but **I'm working on a system to relay many people at once so that it can become even more convenient**, but for now you'll have to self host everything.

Big thank you to [jsmpeg](https://github.com/phoboslab/jsmpeg) for making this possible and including a basic relay script.

## 0. Requirements 

- Works on Windows and Linux
- Install [High Fidelity](https://highfidelity.com)
- Install [OBS](https://obsproject.com)
- Install [Node.js](https://nodejs.org/en) (for [Linux](https://nodejs.org/en/download/package-manager))
- Knowledge on how to [port forward](https://portforward.com/router.htm)

## 1. Basic explanation

You'll open up a script that opens a HTTP server which takes an FFmpeg output, then relays it to a WebSocket server that it'll host as well. If you host this at home, you'll have to open up a web socket port over TCP but you won't need to open any ports for streaming to the relay server because it's running on localhost.

Then in HiFi, you'll have to spawn in an entity and change the user data to match your IP and web socket port.

## 2. Opening the relay server

- Download [websocket-relay.js](https://raw.githubusercontent.com/phoboslab/jsmpeg/master/websocket-relay.js)
- Change your directory to where `websocket-relay.js` is and run `npm install ws`
- Then run `node websocket-relay.js STREAM_NAME STREAMING_PORT WEBSOCKET_PORT`

You can put this command in a `.bat` or `.sh` file too so it's easier to start up next time.

<img src="https://raw.githubusercontent.com/makitsune/hifi-obs-streaming/master/README/step_02.png"/>

## 3. Changing your OBS settings

Go to Settings => Output => Advanced => Recording 

Copy the settings below but change:

- File path or URL:
	- If you're not hosting at home, change `127.0.0.1` to the streaming server's IP
	- Change `8081` to your streaming port 
	- Change `maki` to your stream name
- Video Bitrate: Play around with what looks best
- Rescale Output: `1280x720` or `1920x1080` works best
- Audio Bitrate:  Play around with what sounds best
- Audio Encoder:
	- Use `mp2` for sound
	- Use `Disable Encoder` for no sound

Then use Start/Stop Recording to stream!

<img src="https://raw.githubusercontent.com/makitsune/hifi-obs-streaming/master/README/step_03.png"/>

## 4. Spawning the entity in High Fidelity

