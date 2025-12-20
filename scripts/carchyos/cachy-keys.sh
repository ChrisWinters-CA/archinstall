#!/bin/sh

# Download and sign the CachyOS key
pacman-key --recv-keys F3B607488DB35A47 --keyserver keyserver.ubuntu.com
pacman-key --lsign-key F3B607488DB35A47

# Download the CachyOS keyring and mirrorlist
