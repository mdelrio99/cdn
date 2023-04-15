
	var GameSndManager = new Object();
	GameSndManager.SoundIDs = new Array();
	
	GameSndManager.play = function (id, options) {
		if (GameSndManager.SoundIDs[id] && GameSndManager.SoundIDs[id].playing) return;

		if (!GameSndManager.SoundIDs[id]) GameSndManager.SoundIDs[id] = new Object();

		var SndObj = GameSndManager.SoundIDs[id];

		SndObj.playing = true;
		SndObj.volume = options.volume;
		
		soundManager.play(id, options);
	}
	
	GameSndManager.stop = function (id) {
		if (GameSndManager.SoundIDs[id] && !GameSndManager.SoundIDs[id].playing) return;

		if (!GameSndManager.SoundIDs[id]) GameSndManager.SoundIDs[id] = new Object();
		GameSndManager.SoundIDs[id].playing = false;
		soundManager.stop(id);
	}
	
	GameSndManager.setVolume = function (id, value) {
		if (GameSndManager.SoundIDs[id] && GameSndManager.SoundIDs[id].volume==value) return;
			
		if (!GameSndManager.SoundIDs[id]) GameSndManager.SoundIDs[id] = new Object();
		GameSndManager.SoundIDs[id].volume = value;
		soundManager.setVolume(id, value);
	}

	GameSndManager.rampVolume = function (id, targetvalue, incr) {
		if (GameSndManager.SoundIDs[id] && GameSndManager.SoundIDs[id].volume==targetvalue) return;
			
		var SndObj = GameSndManager.SoundIDs[id];
		
		if (!SndObj) return;
		
		if (targetvalue<SndObj.volume) {
			SndObj.volume -= Math.abs(incr);
			if (SndObj.volume < targetvalue)
				SndObj.volume = targetvalue;
		} else {
			SndObj.volume += incr;
			if (SndObj.volume > targetvalue)
				SndObj.volume = targetvalue;
		}
		
		soundManager.setVolume(id, SndObj.volume);
	}
