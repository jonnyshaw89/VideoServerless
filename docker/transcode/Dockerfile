FROM ntodd/ruby-xenial:2.4.0
LABEL maintainer="Nate Todd"

ENV GEM_VERSION 0.17.3

RUN set -ex \
  && apt-get update -qq && apt-get install -y --no-install-recommends software-properties-common \
  && add-apt-repository ppa:stebbins/handbrake-releases \
  && apt-get update -qq \
  && apt-get install -y --no-install-recommends \
    ffmpeg \
    mkvtoolnix \
    mp4v2-utils \
    mpv \
    handbrake-cli \
    awscli \
  && apt-get remove -y software-properties-common && apt-get autoremove -y \
  && rm -rf /var/lib/apt/lists/* \
  && gem install video_transcoding -v "$GEM_VERSION" \
  && mkdir /data

WORKDIR /data

ADD docker-entrypoint.sh /

CMD [ "sh", "/docker-entrypoint.sh" ]