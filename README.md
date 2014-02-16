berry_clip_node
===============

led.js

an example of controlling a Berry Clip Raspberry Pi Addon board from node.js using the onoff GPIO module.

Dependancies

Node.js     (install instructions for Raspberry Pi at: https://github.com/DonaldDerek/rPi-cheat-sheet)

gpio-admin  (install from https://github.com/quick2wire/quick2wire-gpio-admin

            git clone git://github.com/quick2wire/quick2wire-gpio-admin.git
            cd quick2wire-gpio-admin
            make
            sudo make install
            sudo adduser $USER gpio

            logout and back in login for changes to be loaded.
            )

onoff       ( https://github.com/fivdi/onoff 
            
            sudo npm onoff 
            
            requires node.js version 0.8.0 or higher)


to run: ./run.sh

run.sh exports the gpio pins need to run non root as well as starting the node script.

Based on the example code provided with onoff.
