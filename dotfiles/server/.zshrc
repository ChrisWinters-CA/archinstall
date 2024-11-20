# Enable Powerlevel10k instant prompt. Should stay close to the top of ~/.zshrc.
# Initialization code that may require console input (password prompts, [y/n]
# confirmations, etc.) must go above this block; everything else may go below.
if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
  source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi

# Lines configured by zsh-newuser-install
HISTFILE=~/.histfile
HISTSIZE=1000
SAVEHIST=1000
bindkey -e
# End of lines configured by zsh-newuser-install
# The following lines were added by compinstall
zstyle :compinstall filename '/home/cwinters/.zshrc'

autoload -Uz compinit
compinit
# End of lines added by compinstall

## ZSH Themes and Plugins

# Powerlevel10k Theme
source /usr/share/zsh-theme-powerlevel10k/powerlevel10k.zsh-theme

# To customize prompt, run `p10k configure` or edit ~/.p10k.zsh.
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh

# ZSH Plugins
source /usr/share/zsh/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
source /usr/share/zsh/plugins/zsh-autosuggestions/zsh-autosuggestions.zsh

## Alias

# List Colors
alias ls="ls --color=auto"

# Fastfetch
alias sysinfo="fastfetch"

# Minecraft Java
alias mjstart="sudo systemctl start minecraft-java-server"
alias mjstop="sudo systemctl stop minecraft-java-server"
alias mjrestart="sudo systemctl restart minecraft-java-server"
alias mjwipe="sudo rm -R /opt/minecraft-java-server/IceCRAFT"
alias mjconfig="sudo nano /opt/minecraft-java-server/server.properties"
alias mjstatus="sudo systemctl status minecraft-java-server"
alias mjvars="sudo nano /opt/minecraft-java-server/variables.txt"
alias mjattach="doas -u minecraft-java tmux attach"
alias mjnew="mjstop && mjwipe && mjstart"

# Minecraft Bedrock
alias mbstart="sudo systemctl start minecraft-bedrock-server"
alias mbstop="sudo systemctl stop minecraft-bedrock-server"
alias mbrestart="sudo systemctl restart minecraft-bedrock-server"
alias mbwipe="sudo rm -R /opt/minecraft-bedrock-server/worlds/IceCRAFT"
alias mbconfig="sudo nano /opt/minecraft-bedrock-server/server.properties"
alias mbstatus="sudo systemctl status minecraft-bedrock-server"
alias mbnew="mbstop && mbwipe && mbstart"

# Reflector
alias mirup="sudo reflector -c CA,US -l 10 -p https --sort rate --save /etc/pacman.d/mirrorlist"

# Pacman
alias pacup="sudo pacman -Syyu"
alias pacin="sudo pacman -S"
alias pacse="sudo pacman -Ss"
alias pacre="sudo pacman -R"
alias pacor="sudo pacman -Qdtq | pacman -Rns -"

# Full System Upgrade
alias arch-upgrade="mirup && pacup"
