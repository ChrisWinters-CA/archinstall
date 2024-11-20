#!/bin/bash

# Download and sign the Chaotic AUR key
pacman-key --recv-key 3056513887B78AEB --keyserver keyserver.ubuntu.com
pacman-key --lsign-key 3056513887B78AEB

# Download the Chaotic AUR keyring and mirrorlist
pacman -U 'https://cdn-mirror.chaotic.cx/chaotic-aur/chaotic-keyring.pkg.tar.zst'
pacman -U 'https://cdn-mirror.chaotic.cx/chaotic-aur/chaotic-mirrorlist.pkg.tar.zst'

# Append the Chaotic AUR repository to the end of pacman.conf
printf '\n' >> /etc/pacman.conf
printf '# User Defined Repositories\n' >> /etc/pacman.conf
printf '\n' >> /etc/pacman.conf
printf '[chaotic-aur]\n' >> /etc/pacman.conf
printf 'Include = /etc/pacman.d/chaotic-mirrorlist' >> /etc/pacman.conf
