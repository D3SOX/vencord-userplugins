<div align="center">

![Vencord Logo](https://github.com/D3SOX/vencord-userplugins/assets/24937357/f5c06f0e-9d8c-4cca-b990-953d675ec71d)
# D3SOX's Vencord userplugins

</div>

These are all my Vencord plugins that are not yet in the [official Vencord repository](https://vencord.dev/plugins#d3sox). Some of them have [pending PRs](https://github.com/Vendicated/Vencord/pulls/d3sox).
See the plugin repositories for screenshots

🎡 [**BetterActivities**](https://github.com/D3SOX/vc-betterActivities) (`https://github.com/D3SOX/vc-betterActivities`)  
Shows activity icons in the member list and allows showing all activities

🔇 [**BlockKrisp**](https://github.com/D3SOX/vc-blockKrisp) (`https://github.com/D3SOX/vc-blockKrisp`)  
Prevent Krisp from loading

🧑‍💻 [**CustomUserCommands**](https://github.com/D3SOX/vc-customUserCommands) (`https://github.com/D3SOX/vc-customUserCommands`)  
Configure custom commands to run on users (via context menu)

🤝 [**FollowUser**](https://github.com/D3SOX/vc-followUser) (`https://github.com/D3SOX/vc-followUser`)  
Adds a follow option in the user context menu to always be in the same VC as them

😒 [**IgnoreTerms**](https://github.com/D3SOX/vc-ignoreTerms) (`https://github.com/D3SOX/vc-ignoreTerms`)  
Ignore Discord's new terms of service

⏩ [**MediaPlaybackSpeed**](https://github.com/D3SOX/vc-mediaPlaybackSpeed) (`https://github.com/D3SOX/vc-mediaPlaybackSpeed`)  
Adds an icon to change the playback speed of media embeds

🔔 [**NotifyUserChanges**](https://github.com/D3SOX/vc-notifyUserChanges) (`https://github.com/D3SOX/vc-notifyUserChanges`)  
Adds a notify option in the user context menu to get notified when a user changes voice channels or online status

👤 [**ServerProfilesToolbox**](https://github.com/D3SOX/vc-serverProfilesToolbox) (`https://github.com/D3SOX/vc-serverProfilesToolbox`)  
Adds a copy/paste/reset button to the server profiles editor

🤫 [**SilentTyping**](https://github.com/D3SOX/vc-silentTypingEnhanced) (`https://github.com/D3SOX/vc-silentTypingEnhanced`)  
Enhanced version of SilentTyping with the feature to disable it for specific guilds or users

🔈 [**VoiceChatUtilities**](https://github.com/D3SOX/vc-voiceChatUtilities) (`https://github.com/D3SOX/vc-voiceChatUtilities`)  
Allows you to perform multiple actions on an entire channel (move, mute, disconnect, etc.)


# Install

If you don't know how to install userplugins in the first place please see the manual [Vencord installation guide](https://docs.vencord.dev/installing/). If using Vesktop specify the location in Vesktop settings instead of running `pnpm inject`

> [!TIP]
> There's also [this video by Syncxv](https://youtu.be/8wexjSo8fNw) which shows how to install a userplugin on Windows.
> Just be sure to replace the `git clone` command with the URL from the plugin you like

Clone the repository inside your Vencord `src/userplugins` folder (create the `userplugins` folder if it doesn't exist)
```bash
cd Vencord/src/userplugins
git clone https://github.com/D3SOX/vc-pluginName
pnpm build
````

# Update

To update just pull the latest changes inside the repository folder and sync the changes
```bash
cd Vencord/src/userplugins/vc-pluginName
git pull
pnpm build
```
