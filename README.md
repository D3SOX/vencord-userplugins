# D3SOX's Vencord userplugins

[**BlockKrisp**](./blockKrisp.discordDesktop)  
Prevent Krisp from loading

[**FollowUser**](./followUser)  
Adds a follow option in the user context menu to always be in the same VC as them

[**IgnoreTerms**](./ignoreTerms)  
Ignore Discord's new terms of service

[**MemberListActivities**](./memberListActivities)  
Shows activity icons in the member list

[**NotifyUserChanges**](./notifyUserChanges)  
Adds a notify option in the user context menu to get notified when a user changes voice channels or online status

[**ServerProfilesToolbox**](./serverProfilesToolbox)  
Adds a copy/paste/reset button to the server profiles editor

[**SilentTyping**](./silentTyping)  
Enhanced version of SilentTyping with the feature to disable it for specific guilds or users

[**VoiceChatUtilities**](./voiceChatUtilities)  
Allows you to perform multiple actions on an entire channel (move, mute, disconnect, etc.)


# Install

Clone the repository somewhere
```bash
git clone https://github.com/D3SOX/vencord-userplugins D3SOX-userplugins
```

## Linux/macOS

Symlink the plugin folders inside your Vencord `src/userplugins` folder
```bash
cd Vencord/src/userplugins
for dir in /path/to/D3SOX-userplugins/*/; do ln -s "$dir" .; done
pnpm build
```

## Windows

Copy all the plugin folders inside your Vencord `src/userplugins` folder, type `cmd` in the address bar and run
```
pnpm build
```

# Update

## Linux/macOS

Just pull the latest changes inside the repository folder
```bash
cd D3SOX-userplugins
git pull
```
Then run `pnpm build` inside your Vencord folder. If there are new plugins re-run the installation steps

## Windows

Re-run the installation steps
