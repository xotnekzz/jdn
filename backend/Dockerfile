FROM ubuntu:20.04

#apt로 패키지설치시 프롬프트를 방지하기 위한 Args
ARG DEBIAN_FRONTEND=noninteractive
ENV TZ=Asia/Seoul

#apt repo 최신화 
RUN apt update

#add-apt-repository 커맨드 설치용
RUN apt-get install -y software-properties-common

#필요한 패키지 설치
RUN apt-get install -y vim git wget sqlite3 unzip bc locales && \
    apt-get install -y rsyslog supervisor && \
    apt-get install -y python3-dev build-essential libcairo2-dev libjpeg-dev libgif-dev

#pip 설치
RUN apt-get install -y python3-pip
RUN pip3 install --upgrade pip setuptools wheel 

#한글 locale 설정
RUN locale-gen ko_KR.UTF-8
ENV LC_ALL ko_KR.UTF-8

# CODE
RUN git clone https://github.com/xotnekzz/jdn.git /var/www/jdn
WORKDIR /var/www/jdn

RUN git remote update

RUN git pull origin main

RUN /usr/bin/python3 -m pip install --upgrade pip
RUN pip install -r /var/www/jdn/backend/config/requirements.txt

RUN cd /var/www/jdn

COPY start.sh /start.sh
RUN chmod 755 /start.sh

ENTRYPOINT ["/start.sh"]