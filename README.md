# D3SOX's Vencord userplugins

These are all my Vencord plugins that are not yet in the [official Vencord repository](https://vencord.dev/plugins#d3sox). Some of them have [pending PRs](https://github.com/Vendicated/Vencord/pulls/d3sox).
See the plugin folders for screenshots

[**BlockKrisp**](./blockKrisp.discordDesktop) [*Download*](https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/D3SOX/vencord-userplugins/blob/master/blockKrisp.discordDesktop)  
Prevent Krisp from loading

[**FollowUser**](./followUser) [*Download*](https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/D3SOX/vencord-userplugins/blob/master/followUser)  
Adds a follow option in the user context menu to always be in the same VC as them

[**IgnoreTerms**](./ignoreTerms) [*Download*](https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/D3SOX/vencord-userplugins/blob/master/ignoreTerms)  
Ignore Discord's new terms of service

[**MemberListActivities**](./memberListActivities) [*Download*](https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/D3SOX/vencord-userplugins/blob/master/memberListActivities)  
Shows activity icons in the member list

[**NotifyUserChanges**](./notifyUserChanges) [*Download*](https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/D3SOX/vencord-userplugins/blob/master/notifyUserChanges)  
Adds a notify option in the user context menu to get notified when a user changes voice channels or online status

[**ServerProfilesToolbox**](./serverProfilesToolbox) [*Download*](https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/D3SOX/vencord-userplugins/blob/master/serverProfilesToolbox)  
Adds a copy/paste/reset button to the server profiles editor

[**SilentTyping**](./silentTyping) [*Download*](https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/D3SOX/vencord-userplugins/blob/master/silentTyping)  
Enhanced version of SilentTyping with the feature to disable it for specific guilds or users

[**VoiceChatUtilities**](./voiceChatUtilities) [*Download*](https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/D3SOX/vencord-userplugins/blob/master/voiceChatUtilities)  
Allows you to perform multiple actions on an entire channel (move, mute, disconnect, etc.)


# Install

Using the download links above gets you the latest version of the plugins but you need to manually re-download them every time there's an update.

You can also clone the repository and then update the plugins with a single command

Clone the repository inside your Vencord `src/userplugins` folder
```bash
cd Vencord/src/userplugins
git clone https://github.com/D3SOX/vencord-userplugins D3SOX-userplugins
pnpm build
````

# Update

Just pull the latest changes inside the repository folder
```bash
cd Vencord/src/userplugins/D3SOX-userplugins
git pull
pnpm build
```
