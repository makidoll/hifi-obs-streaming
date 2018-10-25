(function() {
	//var entityID = Entities.findEntitiesByName("[Screen]", MyAvatar.position, 10000000, true)[0];
	var overlayID = undefined;
	var resizeInterval = undefined;
	var dimensions = undefined;

	this.preload = function(entityID) {
		var transform = Entities.getEntityProperties(entityID, [
			"position", "rotation", "dimensions", "userData"
		]);

		dimensions = transform.dimensions;
		var userData = JSON.parse(transform.userData);

		overlayID = Overlays.addOverlay("web3d", {
			url: "https://makitsune.github.io/hifi-obs-streaming/screen.html?ws="+userData.ws,
			maxFPS: 90,
			alpha: 1,
			dpi: 5,
			grabbable: false,
			position: transform.position,
			rotation: transform.rotation,
			dimensions: transform.dimensions,
			parentID: entityID,
			showKeyboardFocusHighlight: false,
		});

		resizeInterval = Script.setInterval(function() {
			var transform = Entities.getEntityProperties(entityID, ["dimensions"]);
			if (!Vec3.withinEpsilon(transform.dimensions, dimensions, 0.001)) {
				Overlays.editOverlay(overlayID, {
					dimensions: transform.dimensions
				});
			}
		}, 1000);
	}

	this.unload = function() {
		Overlays.deleteOverlay(overlayID);
		Script.clearInterval(resizeInterval);
	}
})