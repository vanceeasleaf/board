# Printer Board
A cross terminal APP to print your hand writing directly from your phone, support for iOS and android platform.

> @ Authour Yang Zhou

> @ Mail  zhouyang@datahub.top

> @ Zhejiang Change Software Technology Co. Ltd.

# Summary

## What

- A phone-application code based on [cordova](http://cordova.apache.org/) and [wex5](http://www.wex5.com/wex5/) framework.

- It can print your hand writing result directly to the remote printer.

## Why 

- In many conventional enterprices people still  handwrite their purchase order and don't consider for an infomational solution ( which is unbelievable for me but it's indeed the reality. They said filling the form on a screen is too slow to keep the order) . Usually there could be thousands of orders per day and they have to fax them to their factory after dismiss. That could be a heavy work which will last for two hours. Even more, the fax has authority control that remote requst must be picked up to print ( imanine you have to pick up your phone to let the other side to speak), which means you have to arange a man near the fax to receive the images one by one, so stupid.

- Maybe there's a compromise that you handwrite on a screen and push a button ,then the remote side print the order automatically. And that's what this APP do.

## How

- The board use canvas to display and save the handwriting images and after the push the images are send to a remote server. 

- The remote printer must be connected to a computer which have installed our pc-terminal. The pc-terminal read from the server repeatly using AJAX and print the image. After that it label the image as printed in the database. 

- The handwriting could be edited ,deleted and orgnized by date. 

- The next target is to recognize the handwriting with OCR or deep learning. 






