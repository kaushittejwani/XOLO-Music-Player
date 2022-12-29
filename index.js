var music = document.getElementById("audio");
var music1 = music;
const play = document.getElementById("play");
const image = document.getElementById("image");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
let title = document.getElementById("title");
let artist = document.getElementById("artist");
const download = document.getElementById("download");
let CurrentTime = document.getElementById("current_time");
let Duration = document.getElementById("duration");
console.log(download.href);
var songs = [
  {
    Song_title: "flute-ringtone",
    artist_name: "BasuriWala",
  },
  {
    Song_title: "Fairytale",
    artist_name: "salena Gomex",
  },
  {
    Song_title: "Unstoppable",
    artist_name: "salena Gomex",
  },
  {
    Song_title: "Don't-Let-Me-Down",
    artist_name: "salena Gomex",
  },

  {
    Song_title: "Sugar And Brownies",
    artist_name: "salena Gomex",
  },
];

play.addEventListener("click", function () {
  console.log("hy");
  //const music=["./flute-ringtone-thank-you-movie-40961.mp3"]
  music1.play();
  document.getElementById("play").style.display = "none";
  document.getElementById("pause").style.display = "block";
  image.classList.add("anime");
});
const pause = document.getElementById("pause");
pause.addEventListener("click", function () {
  const music1 = document.getElementById("audio");
  music1.pause();

  document.getElementById("play").style.display = "block";
  document.getElementById("pause").style.display = "none";
  image.classList.remove("anime");
});
var songIndex = 1;
next.addEventListener("click", function () {
  image.classList.remove("anime");
  document.getElementById("pause").style.display = "none";
  document.getElementById("play").style.display = "block";

  var loadsongs = (songs) => {
    title.textContent = songs.Song_title;
    artist.textContent = songs.artist_name;
    music1.src = "music/" + songs.Song_title + ".mp3";
    image.src = "images/" + songs.Song_title + ".jpg";
    download.href = "music/" + songs.Song_title + ".mp3";
    download.download = "music/" + songs.Song_title + ".mp3";
  };

  loadsongs(songs[songIndex]);
  songIndex = (songIndex + 1) % songs.length;
  document.getElementsByClassName("progress")[0].style.width = "0%";
});
console.log(songIndex);
prev.addEventListener("click", function () {
  const loadsongs = (songs) => {
    title.textContent = songs.Song_title;
    artist.textContent = songs.artist_name;
    music1.src = "music/" + songs.Song_title + ".mp3";
    image.src = "images/" + songs.Song_title + ".jpg";
    download.href = "music/" + songs.Song_title + ".mp3";
    download.download = "music/" + songs.Song_title + ".mp3";
  };

  loadsongs(songs[songIndex]);

  songIndex = (songIndex - 1 + songs.length) % songs.length;
  image.classList.remove("anime");
  document.getElementById("pause").style.display = "none";
  document.getElementById("play").style.display = "block";
  document.getElementsByClassName("progress")[0].style.width = "0%";
});
document.getElementById("hide").style.display = "none";

let display = document.getElementById("display");
display.addEventListener("click", function () {
  document.getElementsByClassName("songs_playlist")[0].style.display = "block";
  display.style.display = "none";
  document.getElementById("hide").style.display = "block";
});
let hide = document.getElementById("hide");
hide.addEventListener("click", () => {
  document.getElementsByClassName("songs_playlist")[0].style.display = "none";
  display.style.display = "block";
  document.getElementById("hide").style.display = "none";
});

const fluteSong = document.getElementById("fluteSong");
fluteSong.addEventListener("click", function () {
  var loadsongs = (songs) => {
    title.textContent = songs.Song_title;
    artist.textContent = songs.artist_name;
    music1.src = "music/" + songs.Song_title + ".mp3";
    image.src = "images/" + songs.Song_title + ".jpg";
    download.href = "music/" + songs.Song_title + ".mp3";
    download.download = "music/" + songs.Song_title + ".mp3";
  };
  console.log(songs[0]);
  loadsongs(songs[0]);
  music1.play(songs[0]);
  image.classList.add("anime");
  document.getElementById("pause").style.display = "block";
  document.getElementById("play").style.display = "none";
  document.getElementsByClassName("progress")[0].style.width = "0%";
  fluteSong.style.color = "Indigo";
  sugarBrownies.style.color = "black";
  DontLetMeDown.style.color = "black";
  unstoppable.style.color = "black";
  FairyTale.style.color = "black";
  fluteSong.style.zIndex = "-1";
});
const FairyTale = document.getElementById("FairyTale");
FairyTale.addEventListener("click", function () {
  var loadsongs = (songs) => {
    title.textContent = songs.Song_title;
    artist.textContent = songs.artist_name;
    music1.src = "music/" + songs.Song_title + ".mp3";
    image.src = "images/" + songs.Song_title + ".jpg";
    download.href = "music/" + songs.Song_title + ".mp3";
    download.download = "music/" + songs.Song_title + ".mp3";
  };
  console.log(songs[1]);

  loadsongs(songs[1]);
  music1.play(songs[1]);
  image.classList.add("anime");
  document.getElementById("pause").style.display = "block";
  document.getElementById("play").style.display = "none";
  document.getElementsByClassName("progress")[0].style.width = "0%";
  FairyTale.style.color = "Indigo";
  fluteSong.style.color = "black";
  unstoppable.style.color = "black";
  sugarBrownies.style.color = "black";
  DontLetMeDown.style.color = "black";
  FairyTale.style.zIndex = "-2";
});
const unstoppable = document.getElementById("unstoppable");
unstoppable.addEventListener("click", function () {
  var loadsongs = (songs) => {
    title.textContent = songs.Song_title;
    artist.textContent = songs.artist_name;
    music1.src = "music/" + songs.Song_title + ".mp3";
    image.src = "images/" + songs.Song_title + ".jpg";
    download.href = "music/" + songs.Song_title + ".mp3";
    download.download = "music/" + songs.Song_title + ".mp3";
  };
  console.log(songs[2]);

  loadsongs(songs[2]);
  music1.play(songs[2]);
  image.classList.add("anime");
  document.getElementById("pause").style.display = "block";
  document.getElementById("play").style.display = "none";
  document.getElementsByClassName("progress")[0].style.width = "0%";
  unstoppable.style.color = "Indigo";
  FairyTale.style.color = "black";
  fluteSong.style.color = "black";
  sugarBrownies.style.color = "black";
  DontLetMeDown.style.color = "black";
  unstoppable.style.zIndex = "-2";
});
const DontLetMeDown = document.getElementById("DontLetMeDown");
DontLetMeDown.addEventListener("click", function () {
  var loadsongs = (songs) => {
    title.textContent = songs.Song_title;
    artist.textContent = songs.artist_name;
    music1.src = "music/" + songs.Song_title + ".mp3";
    image.src = "images/" + songs.Song_title + ".jpg";
    download.href = "music/" + songs.Song_title + ".mp3";
    download.download = "music/" + songs.Song_title + ".mp3";
  };
  console.log(songs[3]);
  loadsongs(songs[3]);
  music1.play(songs[3]);
  image.classList.add("anime");
  document.getElementById("pause").style.display = "block";
  document.getElementById("play").style.display = "none";
  document.getElementsByClassName("progress")[0].style.width = "0%";
  DontLetMeDown.style.color = "Indigo";
  unstoppable.style.color = "black";
  FairyTale.style.color = "black";
  fluteSong.style.color = "black";
  sugarBrownies.style.color = "black";
  DontLetMeDown.style.zIndex = "-2";
});
const sugarBrownies = document.getElementById("sugarBrownies");
sugarBrownies.addEventListener("click", function () {
  var loadsongs = (songs) => {
    title.textContent = songs.Song_title;
    artist.textContent = songs.artist_name;
    music1.src = "music/" + songs.Song_title + ".mp3";
    image.src = "images/" + songs.Song_title + ".jpg";
    download.href = "music/" + songs.Song_title + ".mp3";
    download.download = "music/" + songs.Song_title + ".mp3";
  };
  console.log(songs[4]);
  loadsongs(songs[4]);
  music1.play(songs[4]);

  image.classList.add("anime");
  document.getElementById("pause").style.display = "block";
  document.getElementById("play").style.display = "none";
  document.getElementsByClassName("progress")[0].style.width = "0%";
  sugarBrownies.style.color = "Indigo";
  DontLetMeDown.style.color = "black";
  unstoppable.style.color = "black";
  FairyTale.style.color = "black";
  fluteSong.style.color = "black";
  sugarBrownies.style.zIndex = "-2";
});

music1.addEventListener("timeupdate", (event) => {
  const { currentTime, duration } = event.srcElement;
  console.log(currentTime);
  console.log(duration);
  let progress_bar = (currentTime / duration) * 100;
  console.log("progress" + progress_bar);
  let CurrentMinutes = Math.floor(currentTime / 60);
  let CurrentSec = Math.floor(currentTime % 60);
  let Current_Time = document.getElementById("current_time");
  if (CurrentSec < 10) {
    CurrentSec = `0${CurrentSec}`;
  }
  Current_Time.textContent = `${CurrentMinutes}:${CurrentSec}`;

  let min_duration = `${Math.floor(duration / 60)}`;
  let sec_duration = `${Math.floor(duration % 60)}`;
  console.log(sec_duration);
  if (sec_duration < 10) {
    sec_duration = `0${Math.floor(duration % 60)}`;
  }

  //console.log(min_duration,sec_duration)
  let Duration1 = document.getElementById("duration");
  let total_duration = `${min_duration}:${sec_duration}`;

  if (duration) {
    Duration1.textContent = total_duration;
  }
  document.getElementsByClassName("progress")[0].style.width =
    progress_bar + "%";

  if (currentTime == duration) {
    image.classList.remove("anime");
    document.getElementById("pause").style.display = "none";
    document.getElementById("play").style.display = "block";
  }
});
let progress_div = document.getElementsByClassName("progress_div")[0];
progress_div.addEventListener("click", (event) => {
  const { duration } = music1;
  let move_progress = (event.offsetX / event.srcElement.clientWidth) * duration;
  console.log(duration);
  music1.currentTime = move_progress;
});
let beatmusic = document.getElementById("drugBeat");
let beat = document.getElementById("beat");
var a = true;

let hidebeatlist = (document.getElementById("hideBeatList").style.display =
  "none");
let BeatList = document.getElementById("BeatList");
BeatList.addEventListener("click", () => {
  document.getElementsByClassName("beats")[0].style.display = "block";
  BeatList.style.display = "none";
  document.getElementById("hideBeatList").style.display = "block";
});

let HideBeatList = document.getElementById("hideBeatList");
HideBeatList.addEventListener("click", () => {
  document.getElementsByClassName("beats")[0].style.display = "none";

  BeatList.style.display = "block";
  document.getElementById("hideBeatList").style.display = "none";
});

let songmp3file = document.getElementById("songmp3file");
console.log(songmp3file);

//uploadsongs
let i = 6;
function uploadsongs() {
  let file = document.getElementById("songmp3file").value;
  if (file != "") {
    console.log(file);
    let songName = file.slice(12);

    //get an image path using array;
    let arr = [songName.length];
    for (let i = 0; i < songName.length; i++) {
      arr.push(songName[i]);
    }
    for (let i = 0; i <= 3; i++) {
      let arr1 = arr.pop();
      console.log(arr1);
    }
    console.log(arr);
    let image1 = arr.toString();
    console.log(image);
    let stringWithoutComma = image1.replace(/,/g, "");
    console.log(stringWithoutComma);
    let imr = stringWithoutComma.slice(2);
    console.log(imr);
    let imageName = file.slice(12, 17);

    songs.push({ Song_title: songName, artist_name: imageName });
    console.log(songs);
    var html = document.createElement("h4");
    html.innerHTML += i + ".  " + "" + songName;
    html.setAttribute("class", "songs");
    html.setAttribute("id", i + "song");
    html.setAttribute("title", "click to play");
    document.getElementsByClassName("songs_playlist")[0].appendChild(html);
    document.getElementById("songmp3file").value = "";

    // change the color of update song

    var beatelement = document.getElementById(i + "song");
    beatelement.addEventListener("click", () => {
      beatelement.style.color = "Indigo";
      let songs = document.getElementsByClassName("songs");
      for (let i = 0; i < songs.length - 1; i++) {
        songs[i].style.color = "black";
      }

      songs = document.getElementsByClassName("songs");
      for (let i = 0; i < songs.length; i++) {
        songs[i].addEventListener("click", () => {
          //elem=document.getElementById(b+'beat');
          beatelement.style.color = "black";
          elemColorUpdate();
        });
      }
    });
    beatelement.addEventListener("mouseenter", () => {
      beatelement.style.color = "Indigo";
    });

    let song = document.getElementById(i + "song");
    song.addEventListener("click", () => {
      let file = document.getElementById("songmp3file").value;
      var loadsongs = (songName) => {
        console.log(songName);
        title.textContent = songName;
        music1.src = "music/" + songName;
        image.src = "images/" + imr + ".jpg";
        console.log(image.src);
        download.href = "music/" + songName;
        download.download = "music/" + songName;
      };
      loadsongs(songName);
      music1.play(songName);

      image.classList.add("anime");
      document.getElementById("pause").style.display = "block";
      document.getElementById("play").style.display = "none";
      document.getElementsByClassName("progress")[0].style.width = "0%";
      let i = 6;
      document.getElementById("id" + i).style.color = "Indigo";
      i++;
    });
    i++;
  } else {
  }
}
uploadsongs();

//beat music container
var beatss = [
  {
    Song_title: "Best Dj Remix - Music",
    artist_name: "hip-hop",
  },
  {
    Song_title: "Dj Beats Mix",
    artist_name: "hip-hop",
  },
  {
    Song_title: "Dj Beats",
    artist_name: "hip-hop",
  },
  {
    Song_title: "Drug Music - Best DJ",
    artist_name: "salena Gomex",
  },

  {
    Song_title: "electro-pop-124340",
    artist_name: "hip-hop",
  },
  {
    Song_title: "HellBoy 2 - Beats DJ",
    artist_name: "hip-hop",
  },
  {
    Song_title: "hip-hop-rock",
    artist_name: "hip-hop",
  },
  {
    Song_title: "i-wanna-feel-110039",
    artist_name: "hip-hop",
  },
  {
    Song_title: "Smack That Dj  Remix",
    artist_name: "hip-hop",
  },
];
var gana = document.getElementById("beat");
var beatsong = gana;
let beatImage = document.getElementById("beatImage");
let beatTitle = document.getElementById("beat_title");
let beatArtist = document.getElementById("beat_artist");

beatsong.addEventListener("timeupdate", (event) => {
  const { currentTime, duration } = event.srcElement;
  console.log(currentTime);
  console.log(duration);
  let progress_bar = (currentTime / duration) * 100;
  console.log("progress" + progress_bar);
  let CurrentMinutes = Math.floor(currentTime / 60);
  let CurrentSec = Math.floor(currentTime % 60);
  let Current_Time = document.getElementById("beat_current_time");
  if (CurrentSec < 10) {
    CurrentSec = `0${CurrentSec}`;
  }
  Current_Time.textContent = `${CurrentMinutes}:${CurrentSec}`;

  let min_duration = `${Math.floor(duration / 60)}`;
  let sec_duration = `${Math.floor(duration % 60)}`;
  console.log(sec_duration);
  if (sec_duration < 10) {
    sec_duration = `0${Math.floor(duration % 60)}`;
  }

  //console.log(min_duration,sec_duration)
  let Duration1 = document.getElementById("beat_duration");
  let total_duration = `${min_duration}:${sec_duration}`;

  if (duration) {
    Duration1.textContent = total_duration;
  }
  document.getElementsByClassName("beat_progress")[0].style.width =
    progress_bar + "%";

  if (currentTime == duration) {
    beatImage.classList.remove("anime");
    document.getElementById("beatpause").style.display = "none";
    document.getElementById("beatplay").style.display = "block";
  }
});
let progress_beat_div = document.getElementsByClassName("beat_progress_div")[0];
progress_beat_div.addEventListener("click", (event) => {
  const { duration } = beatsong;
  let move_progress = (event.offsetX / event.srcElement.clientWidth) * duration;
  console.log(duration);
  beatsong.currentTime = move_progress;
});
//playbeat
let beatplay = document.getElementById("beatplay");
beatplay.addEventListener("click", () => {
  document.getElementById("beatpause").style.display = "block";
  beatplay.style.display = "none";
  beatsong.play();
  beatImage.classList.add("anime");
});
let beatpause = document.getElementById("beatpause");
beatpause.addEventListener("click", () => {
  document.getElementById("beatplay").style.display = "block";
  beatpause.style.display = "none";
  beatsong.pause();
  beatImage.classList.remove("anime");
});
let nextbeat = document.getElementById("beatnext");
let n = 1;
nextbeat.addEventListener("click", () => {
  beatImage.classList.remove("anime");
  document.getElementById("beatpause").style.display = "none";
  document.getElementById("beatplay").style.display = "block";
  var loadbeats = (beatss) => {
    console.log(beatss.Song_title);
    beatTitle.textContent = beatss.Song_title;
    beatArtist.textContent = beatss.artist_name;
    beatsong.src = "beatMusic/" + beatss.Song_title + ".mp3";
    beatImage.src = "beatImages/" + beatss.Song_title;
    console.log(beatImage.src);
    download.href = "beatMusic/" + beatss.Song_title;
    download.download = "beatMusic/" + beatss.Song_title;
  };

  loadbeats(beatss[n]);
  n = (n + 1) % beatss.length;
  document.getElementsByClassName("beat_progress")[0].style.width = "0%";
});
let beatprev = document.getElementById("beatprev");
let p = 1;
beatprev.addEventListener("click", () => {
  beatImage.classList.remove("anime");
  document.getElementById("beatpause").style.display = "none";
  document.getElementById("beatplay").style.display = "block";
  var loadbeats = (beatss) => {
    console.log(beatss.Song_title);
    beatTitle.textContent = beatss.Song_title;
    beatArtist.textContent = beatss.artist_name;
    beatsong.src = "beatMusic/" + beatss.Song_title + ".mp3";
    beatImage.src = "beatImages/" + beatss.Song_title;
    download.href = "beatMusic/" + beatss.Song_title;
    download.download = "beatMusic/" + beatss.Song_title;
  };

  loadbeats(beatss[p]);
  p = (p - 1 + beatss.length) % beatss.length;

  document.getElementsByClassName("beat_progress")[0].style.width = "0%";
});
let DrugBeat = document.getElementById("DrugBeat");
let beat1 = document.getElementById("beat1");
let b1 = 2;
DrugBeat.addEventListener("click", () => {
  DrugBeat.style.color = "Indigo";
  BestDjMix.style.color = "black";
  Hip_hop_rock.style.color = "black";
  SmakeThatDjRemix.style.color = "black";
  HellBoy.style.color = "black";
  electro_pop.style.color = "black";
  i_wanna_feel.style.color = "black";
  DjBeats.style.color = "black";
  DjBeatsMix.style.color = "black";
  beatImage.classList.add("anime");
  document.getElementById("beatpause").style.display = "block";
  document.getElementById("beatplay").style.display = "none";

  var loadbeats = (beatss) => {
    console.log(beatss.Song_title);
    beatTitle.textContent = beatss.Song_title;
    beatArtist.textContent = beatss.artist_name;
    beatsong.src = "beatMusic/" + beatss.Song_title+".mp3";
    beatImage.src = "beatImages/" + beatss.Song_title;
    download.href = "beatMusic/" + beatss.Song_title;
    download.download = "beatMusic/" + beatss.Song_title;
  };
  loadbeats(beatss[3]);
  beatsong.play(beatss[3]);
});
let BestDjMix = document.getElementById("BestDjMix");
let beat2 = document.getElementById("beat2");
let b2 = 2;
BestDjMix.addEventListener("click", () => {
  beatImage.classList.add("anime");
  document.getElementById("beatpause").style.display = "block";
  document.getElementById("beatplay").style.display = "none";
  DrugBeat.style.color = "black";
  BestDjMix.style.color = "Indigo";
  Hip_hop_rock.style.color = "black";
  SmakeThatDjRemix.style.color = "black";
  HellBoy.style.color = "black";
  electro_pop.style.color = "black";
  i_wanna_feel.style.color = "black";
  DjBeats.style.color = "black";
  DjBeatsMix.style.color = "black";
  var loadbeats = (beatss) => {
    console.log(beatss.Song_title);
    beatTitle.textContent = beatss.Song_title;
    beatArtist.textContent = beatss.artist_name;
    beatsong.src = "beatMusic/" + beatss.Song_title + ".mp3";
    beatImage.src = "beatImages/" + beatss.Song_title;
    download.href = "beatMusic/" + beatss.Song_title;
    download.download = "beatMusic/" + beatss.Song_title;
  };
  loadbeats(beatss[0]);
  beatsong.play(beatss[0]);
});
//pause

let DjBeats = document.getElementById("DjBeats");
let beat3 = document.getElementById("beat3");
let b3 = 2;
DjBeats.addEventListener("click", () => {
  beatImage.classList.add("anime");
  document.getElementById("beatpause").style.display = "block";
  document.getElementById("beatplay").style.display = "none";
  DrugBeat.style.color = "black";
  BestDjMix.style.color = "black";
  Hip_hop_rock.style.color = "black";
  SmakeThatDjRemix.style.color = "black";
  HellBoy.style.color = "black";
  electro_pop.style.color = "black";
  i_wanna_feel.style.color = "black";
  DjBeats.style.color = "Indigo";
  DjBeatsMix.style.color = "black";
  var loadbeats = (beatss) => {
    console.log(beatss.Song_title);
    beatTitle.textContent = beatss.Song_title;
    beatArtist.textContent = beatss.artist_name;
    beatsong.src = "beatMusic/" + beatss.Song_title + ".mp3";
    beatImage.src = "beatImages/" + beatss.Song_title;
    download.href = "beatMusic/" + beatss.Song_title;
    download.download = "beatMusic/" + beatss.Song_title;
  };
  loadbeats(beatss[2]);
  beatsong.play(beatss[2]);
});
let DjBeatsMix = document.getElementById("DjBeatsMix");
let beat4 = document.getElementById("beat4");
let b4 = 2;
DjBeatsMix.addEventListener("click", () => {
  beatImage.classList.add("anime");
  document.getElementById("beatpause").style.display = "block";
  document.getElementById("beatplay").style.display = "none";
  DrugBeat.style.color = "black";
  BestDjMix.style.color = "black";
  Hip_hop_rock.style.color = "black";
  SmakeThatDjRemix.style.color = "black";
  HellBoy.style.color = "black";
  electro_pop.style.color = "black";
  i_wanna_feel.style.color = "black";
  DjBeats.style.color = "black";
  DjBeatsMix.style.color = "Indigo";
  var loadbeats = (beatss) => {
    console.log(beatss.Song_title);
    beatTitle.textContent = beatss.Song_title;
    beatArtist.textContent = beatss.artist_name;
    beatsong.src = "beatMusic/" + beatss.Song_title + ".mp3";
    beatImage.src = "beatImages/" + beatss.Song_title;
    download.href = "beatMusic/" + beatss.Song_title;
    download.download = "beatMusic/" + beatss.Song_title;
  };
  loadbeats(beatss[1]);
  beatsong.play(beatss[1]);
});
let HellBoy = document.getElementById("HellBoy");
let beat5 = document.getElementById("beat5");
let b5 = 2;
HellBoy.addEventListener("click", () => {
  beatImage.classList.add("anime");
  document.getElementById("beatpause").style.display = "block";
  document.getElementById("beatplay").style.display = "none";
  DrugBeat.style.color = "black";
  BestDjMix.style.color = "black";
  Hip_hop_rock.style.color = "black";
  SmakeThatDjRemix.style.color = "black";
  HellBoy.style.color = "Indigo";
  electro_pop.style.color = "black";
  i_wanna_feel.style.color = "black";
  DjBeats.style.color = "black";
  DjBeatsMix.style.color = "black";
  var loadbeats = (beatss) => {
    console.log(beatss.Song_title);
    beatTitle.textContent = beatss.Song_title;
    beatArtist.textContent = beatss.artist_name;
    beatsong.src = "beatMusic/" + beatss.Song_title + ".mp3";
    beatImage.src = "beatImages/" + beatss.Song_title;
    download.href = "beatMusic/" + beatss.Song_title;
    download.download = "beatMusic/" + beatss.Song_title;
  };
  loadbeats(beatss[5]);
  beatsong.play(beatss[5]);
});
let SmakeThatDjRemix = document.getElementById("SmakeThatDjRemix");
let beat6 = document.getElementById("beat6");
let b6 = 2;
SmakeThatDjRemix.addEventListener("click", () => {
  beatImage.classList.add("anime");
  document.getElementById("beatpause").style.display = "block";
  document.getElementById("beatplay").style.display = "none";
  DrugBeat.style.color = "black";
  BestDjMix.style.color = "black";
  Hip_hop_rock.style.color = "black";
  SmakeThatDjRemix.style.color = "Indigo";
  HellBoy.style.color = "black";
  electro_pop.style.color = "black";
  i_wanna_feel.style.color = "black";
  DjBeats.style.color = "black";
  DjBeatsMix.style.color = "black";
  var loadbeats = (beatss) => {
    console.log(beatss.Song_title);
    beatTitle.textContent = beatss.Song_title;
    beatArtist.textContent = beatss.artist_name;
    beatsong.src = "beatMusic/" + beatss.Song_title + ".mp3";
    beatImage.src = "beatImages/" + beatss.Song_title;
    download.href = "beatMusic/" + beatss.Song_title;
    download.download = "beatMusic/" + beatss.Song_title;
  };
  loadbeats(beatss[8]);
  beatsong.play(beatss[8]);
});
let Hip_hop_rock = document.getElementById("Hip-hop-rock");
let beat7 = document.getElementById("beat7");
let b7 = 2;
Hip_hop_rock.addEventListener("click", () => {
  beatImage.classList.add("anime");
  document.getElementById("beatpause").style.display = "block";
  document.getElementById("beatplay").style.display = "none";
  DrugBeat.style.color = "black";
  BestDjMix.style.color = "black";
  Hip_hop_rock.style.color = "Indigo";
  SmakeThatDjRemix.style.color = "black";
  HellBoy.style.color = "black";
  electro_pop.style.color = "black";
  i_wanna_feel.style.color = "black";
  DjBeats.style.color = "black";
  DjBeatsMix.style.color = "black";
  var loadbeats = (beatss) => {
    console.log(beatss.Song_title);
    beatTitle.textContent = beatss.Song_title;
    beatArtist.textContent = beatss.artist_name;
    beatsong.src = "beatMusic/" + beatss.Song_title+".mp3";
    beatImage.src = "beatImages/" + beatss.Song_title;
    download.href = "beatMusic/" + beatss.Song_title;
    download.download = "beatMusic/" + beatss.Song_title;
  };
  loadbeats(beatss[6]);
  beatsong.play(beatss[6]);
});
let electro_pop = document.getElementById("electro-pop");
let beat8 = document.getElementById("beat8");
let b8 = 2;
electro_pop.addEventListener("click", () => {
  beatImage.classList.add("anime");
  document.getElementById("beatpause").style.display = "block";
  document.getElementById("beatplay").style.display = "none";
  DrugBeat.style.color = "black";
  BestDjMix.style.color = "black";
  Hip_hop_rock.style.color = "black";
  SmakeThatDjRemix.style.color = "black";
  HellBoy.style.color = "black";
  electro_pop.style.color = "Indigo";
  i_wanna_feel.style.color = "black";
  DjBeats.style.color = "black";
  DjBeatsMix.style.color = "black";
  var loadbeats = (beatss) => {
    console.log(beatss.Song_title);
    beatTitle.textContent = beatss.Song_title;
    beatArtist.textContent = beatss.artist_name;
    beatsong.src = "beatMusic/" + beatss.Song_title + ".mp3";
    beatImage.src = "beatImages/" + beatss.Song_title;
    download.href = "beatMusic/" + beatss.Song_title;
    download.download = "beatMusic/" + beatss.Song_title;
  };
  loadbeats(beatss[4]);
  beatsong.play(beatss[4]);
});
let i_wanna_feel = document.getElementById("i-wanna-feel");
let beat9 = document.getElementById("beat9");
let b9 = 2;
i_wanna_feel.addEventListener("click", () => {
  beatImage.classList.add("anime");
  document.getElementById("beatpause").style.display = "block";
  document.getElementById("beatplay").style.display = "none";
  DrugBeat.style.color = "black";
  BestDjMix.style.color = "black";
  Hip_hop_rock.style.color = "black";
  SmakeThatDjRemix.style.color = "black";
  HellBoy.style.color = "black";
  electro_pop.style.color = "black";
  i_wanna_feel.style.color = "Indigo";
  DjBeats.style.color = "black";
  DjBeatsMix.style.color = "black";
  var loadbeats = (beatss) => {
    console.log(beatss.Song_title);
    beatTitle.textContent = beatss.Song_title;
    beatArtist.textContent = beatss.artist_name;
    beatsong.src = "beatMusic/" + beatss.Song_title + ".mp3";
    beatImage.src = "beatImages/" + beatss.Song_title;
    download.href = "beatMusic/" + beatss.Song_title;
    download.download = "beatMusic/" + beatss.Song_title;
  };
  loadbeats(beatss[7]);
  beatsong.play(beatss[7]);
});

//uploadbeat
var b = 10;
function uploadbeat() {
  let beatsong = document.getElementById("beat");

  let file = document.getElementById("beatmp3file").value;
  if (file != "") {
    console.log(file);
    let songName = file.slice(12);

    //get an image path using array;
    let arr = [songName.length];
    for (let i = 0; i < songName.length; i++) {
      arr.push(songName[i]);
    }
    for (let i = 0; i <= 3; i++) {
      let arr1 = arr.pop();
      console.log(arr1);
    }
    console.log(arr);
    let image = arr.toString();
    console.log(image);
    let stringWithoutComma = image.replace(/,/g, "");
    console.log(stringWithoutComma);
    let imr = stringWithoutComma.slice(2);
    console.log(imr);
    let imageName = file.slice(12, 37);
    console.log(imageName);
    beatss.push({ Song_title: songName, artist_name: imageName });
    console.log(songs);
    var html = document.createElement("h4");
    html.innerHTML += b + ".  " + "" + songName;
    html.setAttribute("class", "allbeats");
    html.setAttribute("id", b + "beat");
    html.setAttribute("title", "click to play");
    document.getElementsByClassName("beats")[0].appendChild(html);

    var elem = document.getElementById(b + "beat");
    elem.addEventListener("click", () => {
      elem.style.color = "Indigo";
      let beats = document.getElementsByClassName("allbeats");
      for (let i = 0; i < beats.length - 1; i++) {
        beats[i].style.color = "black";
      }

      beats = document.getElementsByClassName("allbeats");
      for (let i = 0; i < beats.length; i++) {
        beats[i].addEventListener("click", () => {
          // elem=document.getElementById(b+'beat');
          elem.style.color = "black";
        });
      }
    });
    elem.addEventListener("mouseenter", () => {
      elem.style.color = "Indigo";
    });

    let beat = document.getElementById(b + "beat");
    beat.addEventListener("click", () => {
      let file = document.getElementById("beatmp3file").value;
      var loadbeats = (beatss) => {
        console.log(beatss);
        beatTitle.textContent = songName;
        beatsong.src = "beatMusic/" + songName;
        beatImage.src = "beatImages/" + imr;
        download.href = "beatMusic/" + songName;
        download.download = "beatMusic/" + songName;
      };
      loadbeats(beatss);
      beatsong.play(beatss);

      beatImage.classList.add("anime");
      document.getElementById("beatpause").style.display = "block";
      document.getElementById("beatplay").style.display = "none";
      document.getElementsByClassName("beat_progress")[0].style.width = "0%";
    });
    b++;
  } else {
  }

  document.getElementById("beatmp3file").value = "";
}
// search song using button
function searchSong() {
  let filter = document
    .getElementById("searchSong")
    .value.toString()
    .toUpperCase();
  console.log(filter);
  let songs1 = document.getElementsByClassName("songs");
  for (let i = 0; i < songs1.length; i++) {
    let songs = document
      .getElementsByClassName("songs")
      [i].textContent.slice(3);

    if (songs.toUpperCase().indexOf(filter) > -1) {
      let songs = document
        .getElementsByClassName("songs")
        [i].textContent.slice(3);

      songs1[i].style.display = "block";
    } else {
      songs1[i].style.display = "none";
    }
  }
}

//searchbeat

function searchBeat() {
  let filter = document
    .getElementById("searchBeat")
    .value.toString()
    .toUpperCase();
  console.log(filter);
  let beats = document.getElementsByClassName("allbeats");
  for (let i = 0; i < beats.length; i++) {
    let beat1 = document
      .getElementsByClassName("allbeats")
      [i].textContent.slice(3);
    console.log(beat1);

    if (beat1.toUpperCase().indexOf(filter) > -1) {
      beats[i].style.display = "";
    } else {
      beats[i].style.display = "none";
    }
  }
}

//volume

let audioid = music1.src.slice(22);
var audio = new Audio(audioid);
music1 = audio;
let volume = document.getElementById("SongVolumeSlider");
volume.addEventListener("click", () => {
  music1.volume = volume.value / 100;
});
volume.addEventListener("mousemove", () => {
  music1.volume = volume.value / 100;
});
music1 = music;

//beat audio
let beataudio = document.getElementById("beat").src.slice(22);
var beataudioId = new Audio(beataudio);
beatsong = beataudioId;
let beatVolume = document.getElementById("beatVolumeSlider");
beatVolume.addEventListener("click", () => {
  beatsong.volume = beatVolume.value / 100;
});
beatVolume.addEventListener("mousemove", () => {
  beatsong.volume = beatVolume.value / 100;
});
beatsong = gana;
