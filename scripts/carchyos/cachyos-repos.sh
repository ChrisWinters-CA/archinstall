#!/bin/sh

# Download and sign the CachyOS key
pacman-key --recv-keys F3B607488DB35A47 --keyserver keyserver.ubuntu.com
pacman-key --lsign-key F3B607488DB35A47

# Download the CachyOS keyring and mirrorlist
pacman -U 'https://mirror.cachyos.org/repo/x86_64/cachyos/cachyos-keyring-20240331-1-any.pkg.tar.zst'
pacman -U 'https://mirror.cachyos.org/repo/x86_64/cachyos/cachyos-mirrorlist-22-1-any.pkg.tar.zst'
pacman -U 'https://mirror.cachyos.org/repo/x86_64/cachyos/cachyos-v3-mirrorlist-22-1-any.pkg.tar.zst'
pacman -U 'https://mirror.cachyos.org/repo/x86_64/cachyos/cachyos-v4-mirrorlist-22-1-any.pkg.tar.zst'
pacman -U 'https://mirror.cachyos.org/repo/x86_64/cachyos/pacman-7.1.0.r7.gb9f7d4a-3-x86_64.pkg.tar.zst'
