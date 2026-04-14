"""
SandBox.py-> Where I test Pydub and other libs
Dependencies:
    1.Pydub
    2.ffmpeg library set to the environment variables
        used to play different file formats mp3 etc
        restart the cmd or the terminal used to run the application after editing the environment variables
    3.pyaudio to playback audio
    
    ##warning
    pip install audioop-lts
    is required since python deprecated to remove bloatware and unmaintained modules
"""
from pydub import AudioSegment
from pydub.effects import speedup
from pydub.playback import play


def apply_reverb(sound, delay_ms=50, attenuations=[3, 6, 9]):
    combined = sound
    for atten in attenuations:
        # Shift the sound by delay_ms and reduce volume
        echo = (sound - atten)[delay_ms:]
        combined = combined.overlay(echo, position=delay_ms)
    return combined

def change_pitch(sound, speed=1.0):
    # Manually override the frame_rate
    new_sample_rate = int(sound.frame_rate *(2 ** speed))
    
    # Spawn new audio with altered frame rate
    new_sound = sound._spawn(sound.raw_data, overrides={
        "frame_rate": new_sample_rate
    })
    
    # Convert back to standard frame rate so it plays at the new speed/pitch
    return new_sound.set_frame_rate(sound.frame_rate)


if __name__=="__main__":
    #Setting the conveter and ffmpeg directory when the system environment variables are not set
    # AudioSegment.converter = "H:/software/Portable_Software/Windows/ffmpeg-master-latest-win64-gpl-shared/ffmpeg-master-latest-win64-gpl-shared/bin/ffmpeg.exe"
    # AudioSegment.ffmpeg = "H:/software/Portable_Software/Windows/ffmpeg-master-latest-win64-gpl-shared/ffmpeg-master-latest-win64-gpl-shared/bin/ffmpeg.exe"
    # AudioSegment.ffprobe ="H:/software/Portable_Software/Windows/ffmpeg-master-latest-win64-gpl-shared/ffmpeg-master-latest-win64-gpl-shared/bin/ffprobe.exe"


    parentFolder="./original_sounds/"
    files=[
        {"name":"dragon-studio-car-engine-roaring-376881.mp3","format":"mp3"},
        {"name":"dragon-studio-nuclear-explosion-386181.mp3","format":"mp3"},
        {"name":"dragon-studio-pop-402324.mp3","format":"mp3"},
    ]
    audio=AudioSegment.from_file("./data/original_sounds/engine_01.wav",format="wav")
    #audioFast=apply_reverb(audio)
    #audioFast=speedup(audioFast,playback_speed=20)
    audioFast=audio
    engineSound=AudioSegment.empty()
    clippingDb=0.00006
    revs=1
    defaultOctaves=-0.25
    cylinders=8
    maxRpm=7000
    while revs<300:
        audioFast=change_pitch(audio,defaultOctaves+revs/500)
        audioFast=speedup(audioFast,playback_speed=1+(revs/(maxRpm*cylinders)))
        engineSound+=apply_reverb(audioFast[0:500])*cylinders
        revs+=1
    #engineSound=speedup(engineSound,playback_speed=20)
    play(engineSound)