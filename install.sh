#!/usr/bin/bash

pkg update -y
pkg upgrade -y
pkg install python -y
pkg install wget -y
pkg install ffmpeg libwebp -y
pkg install nodejs -y
pkg install npm -y
pkg install tesseract -y
pkg install imagemagick -y
npm i node-tesseract-ocr
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"
npm install
npm audit fix
npm start
