# HiFi OBS Streaming
> 📺 Stream your OBS to High Fidelity through mpegts and websockets

<img height="300" src="https://raw.githubusercontent.com/makitsune/hifi-obs-streaming/master/screenshot.jpg"/>

This is a tutorial on how to stream your OBS output to High Fidelty. I've tried to keep it as simple as I can and I'll be writing a script to relay many people at once so that it can become even more convinient.

Big thank you to [jsmpeg](https://github.com/phoboslab/jsmpeg) for making this possible and including a basic relay script.

## 0. Basic explaination

You'll open up a script that opens a HTTP server and takes FFmpeg output and relays it to a Web Socket server that it'll host at the same time.

## 1. Requirements 

- Install [High Fidelity](https://highfidelity.com)
- Install [OBS](https://obsproject.com)
- Install [Node.js](https://nodejs.org/en) (for [Linux](https://nodejs.org/en/download/package-manager))
- Download [websocket-relay.js](https://raw.githubusercontent.com/phoboslab/jsmpeg/master/websocket-relay.js)
- Knowledge on how to [portforward](https://portforward.com/router.htm)

## 2. Opening the relay server

Change your directory to `websocket-relay.js` and run `npm install ws`

Then run `node websocket-relay.js STREAM_NAME STREAMINNG_POST WEBSOCKET_PORT`. You can put this in a `.bat` or `.sh` file too so it's easier to start up.