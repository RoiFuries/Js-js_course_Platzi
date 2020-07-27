const video = document.querySelector("video")
        const button = document.querySelector("button") // que pasa si en el html tengo mas de un video o un button

        function MediaPlayer(config){
            this.media = config.el;
        };

        MediaPlayer.prototype.play = function (){
            this.media.play();
        };
        MediaPlayer.prototype.pause = function (){
            this.media.pause();
        };

        MediaPlayer.prototype.actionButton = function() {
            if (this.media.paused) {
             this.play();
            } else {
                 this.pause();
            }
      };


        const player = new MediaPlayer({el: video});
        button.onclick = () => player.actionButton();
