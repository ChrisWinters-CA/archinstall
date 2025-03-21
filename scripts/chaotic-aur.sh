#!/bin/sh

# Download and sign the Chaotic AUR key
pacman-key --recv-key 3056513887B78AEB --keyserver keyserver.ubuntu.com
pacman-key --lsign-key 3056513887B78AEB

# Download the Chaotic AUR keyring and mirrorlist
pacman -U 'https://cdn-mirror.chaotic.cx/chaotic-aur/chaotic-keyring.pkg.tar.zst'
pacman -U 'https://cdn-mirror.chaotic.cx/chaotic-aur/chaotic-mirrorlist.pkg.tar.zst'

# Append the Chaotic AUR repository to the end of /etc/pacman.conf
{
    printf '\n'
    printf '# User Defined Repositories\n\n'
    printf '[chaotic-aur]\n'
    printf 'Include = /etc/pacman.d/chaotic-mirrorlist'
} >> /etc/pacman.conf

# Force a full refresh of the pacman database to include the Chaotic AUR
pacman -Syy
