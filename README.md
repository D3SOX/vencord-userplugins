# D3SOX's Vencord userplugins

These are all my Vencord plugins that are not yet in the [official Vencord repository](https://vencord.dev/plugins#d3sox). Some of them have [pending PRs](https://github.com/Vendicated/Vencord/pulls/d3sox).
See the plugin folders for screenshots

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

If you don't know how to install userplugins in the first place please see the manual [Vencord installation guide](https://github.com/Vendicated/Vencord/blob/main/docs/1_INSTALLING.md). If using Vesktop specify the location in Vesktop settings instead of running `pnpm inject`

Clone the repository inside your Vencord `src/userplugins` folder
```bash
cd Vencord/src/userplugins
git clone https://github.com/D3SOX/vencord-userplugins D3SOX-userplugins
pnpm build
````

# Update

> [!IMPORTANT]  
> By installing the repo an update notifier is installed which automatically checks for updates. The automatic checking can be disabled.

Just pull the latest changes inside the repository folder
```bash
cd Vencord/src/userplugins/D3SOX-userplugins
git pull
pnpm build
```
