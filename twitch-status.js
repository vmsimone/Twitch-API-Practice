$(document).ready(function() {
  //button functions
  function clickOnline() {
    $('.user').show();
    $('.offline').hide();
    customHover("#all, #off", "#CCCCCC", "#9900EE");
    customHover("#on", "#CCCCCC", "#CCCCCC");
    $('#all, #off').css('background', '#9900EE');
    $('#on').css('background', '#CCCCCC');
  }

  function clickAll() {
    $('.user').show();
    customHover("#on, #off", "#CCCCCC", "#9900EE");
    customHover("#all", "#CCCCCC", "#CCCCCC");
    $('#on, #off').css('background', '#9900EE');
    $('#all').css('background', '#CCCCCC');
  }

  function clickOffline() {
    $('.user').hide();
    $('.offline').show();
    customHover("#all, #on", "#CCCCCC", "#9900EE");
    customHover("#off", "#CCCCCC", "#CCCCCC");
    $('#all, #on').css('background', '#9900EE');
    $('#off').css('background', '#CCCCCC');
  }

  //resizes purple div
  function resize() {
    var userCount = $(".user-list > div:visible").length;
    var newHeight = 5 * userCount + 8;
    $(".container").css("height", newHeight + "em");
  }

  var JSONbot = [
    {
      stream: {
        mature: false,
        status:
          "Greg working on Electron-Vue boilerplate w/ Akira #programming #vuejs #electron",
        broadcaster_language: "en",
        display_name: "FreeCodeCamp",
        game: "Creative",
        language: "en",
        _id: 79776140,
        name: "freecodecamp",
        created_at: "2015-01-14T03:36:47Z",
        updated_at: "2016-09-17T05:00:52Z",
        delay: null,
        logo:
          "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png",
        banner: null,
        video_banner:
          "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-channel_offline_image-b8e133c78cd51cb0-1920x1080.png",
        background: null,
        profile_banner:
          "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_banner-6f5e3445ff474aec-480.png",
        profile_banner_background_color: null,
        partner: false,
        url: "https://www.twitch.tv/freecodecamp",
        views: 161989,
        followers: 10048,
        _links: {
          self: "https://api.twitch.tv/kraken/channels/freecodecamp",
          follows: "https://api.twitch.tv/kraken/channels/freecodecamp/follows",
          commercial:
            "https://api.twitch.tv/kraken/channels/freecodecamp/commercial",
          stream_key:
            "https://api.twitch.tv/kraken/channels/freecodecamp/stream_key",
          chat: "https://api.twitch.tv/kraken/chat/freecodecamp",
          subscriptions:
            "https://api.twitch.tv/kraken/channels/freecodecamp/subscriptions",
          editors: "https://api.twitch.tv/kraken/channels/freecodecamp/editors",
          teams: "https://api.twitch.tv/kraken/channels/freecodecamp/teams",
          videos: "https://api.twitch.tv/kraken/channels/freecodecamp/videos"
        }
      },
      _links: {
        self: "https://api.twitch.tv/kraken/streams/freecodecamp",
        channel: "https://api.twitch.tv/kraken/channels/freecodecamp"
      }
    },
    {
      stream: null,
      display_name: "OgamingSC2",
      logo: "https://static-cdn.jtvnw.net/jtv_user_pictures/ogamingsc2-profile_image-9021dccf9399929e-300x300.jpeg",
      _links: {
        self: "https://api.twitch.tv/kraken/streams/ogamingsc2",
        channel: "https://api.twitch.tv/kraken/channels/ogamingsc2"
      }
    },
    {
      stream: {
        mature: false,
        status:
          "RERUN: StarCraft 2 - Kane vs. HuK (ZvP) - WCS Season 3 Challenger AM - Match 4",
        broadcaster_language: "en",
        display_name: "ESL_SC2",
        game: "StarCraft II",
        language: "en",
        _id: 30220059,
        name: "esl_sc2",
        created_at: "2012-05-02T09:59:20Z",
        updated_at: "2016-09-17T06:02:57Z",
        delay: null,
        logo:
          "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_image-d6db9488cec97125-300x300.jpeg",
        banner: null,
        video_banner:
          "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-channel_offline_image-5a8657f8393c9d85-1920x1080.jpeg",
        background: null,
        profile_banner:
          "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_banner-f8295b33d1846e75-480.jpeg",
        profile_banner_background_color: "#050506",
        partner: true,
        url: "https://www.twitch.tv/esl_sc2",
        views: 60843789,
        followers: 135275,
        _links: {
          self: "https://api.twitch.tv/kraken/channels/esl_sc2",
          follows: "https://api.twitch.tv/kraken/channels/esl_sc2/follows",
          commercial: "https://api.twitch.tv/kraken/channels/esl_sc2/commercial",
          stream_key: "https://api.twitch.tv/kraken/channels/esl_sc2/stream_key",
          chat: "https://api.twitch.tv/kraken/chat/esl_sc2",
          subscriptions:
            "https://api.twitch.tv/kraken/channels/esl_sc2/subscriptions",
          editors: "https://api.twitch.tv/kraken/channels/esl_sc2/editors",
          teams: "https://api.twitch.tv/kraken/channels/esl_sc2/teams",
          videos: "https://api.twitch.tv/kraken/channels/esl_sc2/videos"
        }
      },
      _links: {
        self: "https://api.twitch.tv/kraken/streams/esl_sc2",
        channel: "https://api.twitch.tv/kraken/channels/esl_sc2"
      }
    },
    {
      stream: null,
      display_name: "noobs2ninjas",
      logo: "https://static-cdn.jtvnw.net/jtv_user_pictures/noobs2ninjas-profile_image-34707f847a73d934-300x300.png",
      _links: {
        self: "https://api.twitch.tv/kraken/streams/esl_sc2",
        channel: "https://api.twitch.tv/kraken/channels/esl_sc2"
      }
    },
    {
      error: "Not Found",
      status: 404,
      message: "Channel 'not-a-valid-account' does not exist"
    }
  ];

  //creates new divs for each stream
  function display(pic, name, status) {
    var newDiv = "<div class='block user'>" + pic + name + status + "</div>";
    if (status === "<p><em>Offline</em></p>") {
     newDiv = "<div class='block user offline'>" + pic + name + status + "</div>";
    }
    $(".user-list").append(newDiv);
  }

  function start() {
    clickAll();
    for (i = 0; i < JSONbot.length; i++) {
      var hasIcon = "";
      var hasName = "";
      var thisIcon = "";
      var thisName = "";
      var thisStatus = "";
      if (JSONbot[i].hasOwnProperty("stream") && JSONbot[i].stream !== null) {
        hasIcon = JSONbot[i].stream.hasOwnProperty("logo");
        hasName = JSONbot[i].stream.hasOwnProperty("display_name");
        var thisLink = JSONbot[i].stream.url;
        if (hasIcon && hasName) {
          thisIcon = "<image class='icon' src='" + JSONbot[i].stream.logo + "' />";
          thisName = "<a href='" + thisLink + "' target='_blank'>" + JSONbot[i].stream.display_name + "</a>";
          thisStatus = "<p><em>" + JSONbot[i].stream.status + "</em></p>";
          display(thisIcon, thisName, thisStatus);
        }
      } else if (JSONbot[i].stream === null) {
        hasIcon = JSONbot[i].hasOwnProperty("logo");
        hasName = JSONbot[i].hasOwnProperty("display_name");
        if (hasIcon && hasName) {
          thisIcon = "<image class='icon' src='" + JSONbot[i].logo + "' />";
          thisName = "<a>" + JSONbot[i].display_name + "</a>";
          thisStatus = "<p><em>Offline</em></p>";
          display(thisIcon, thisName, thisStatus);
        }
      }
      resize();
    }
  }

  start();
  customHover('.user', '#FFFFFF', '#CCCCCC');
  customHover('.offline', '#555555', '#333333');

  function customHover(elementID, mouseOn, mouseOff) {
    $(elementID).hover(
      function() {
        $(this).css("background", mouseOn);
      },
      function() {
        $(this).css("background", mouseOff);
      }
    );
  }

  $('li').click("on", function(){
    var thisButton = $(this).text();
    $(this).css("background", '#9900EE');
    if (thisButton === "Online") {
      clickOnline();
    } else if (thisButton === "Offline") {
      clickOffline();
    } else {
      clickAll();
    }
    resize();
  });
});
