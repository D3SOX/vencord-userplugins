# WARNING

> [!WARNING]
> For now this repo is not supported as Vencord broke the way my repo worked
> 
> Therefore the current up-to-date source is the [my branch of Vencord](https://github.com/D3SOX/Vencord) where the plugins reside in [`src/plugins-extra`](https://github.com/D3SOX/Vencord/tree/mybuild/src/plugins-extra).  
> If you download them manually you won't get any updates and have to redownload them every time I change something  
> So the only way to keep updated is to install my branch. [See instructions](https://github.com/D3SOX/Vencord?tab=readme-ov-file#installing--uninstalling)

# WIP


> [!NOTE]
> This will change as [#40](https://github.com/D3SOX/vencord-userplugins/issues/40) gets implemented. See [the issue](https://github.com/D3SOX/vencord-userplugins/issues/40) for the progress.

---
---
---
---
---
---
---
---
---
---
---
---
---
---
---
---
---
---
---
---
---
---
---
---

<div align="center">

![Vencord Logo](https://github.com/D3SOX/vencord-userplugins/assets/24937357/f5c06f0e-9d8c-4cca-b990-953d675ec71d)
# D3SOX's Vencord userplugins

</div>

These are all my Vencord plugins that are not yet in the [official Vencord repository](https://vencord.dev/plugins#d3sox). Some of them have [pending PRs](https://github.com/Vendicated/Vencord/pulls/d3sox).
See the plugin folders for screenshots

🎡 [**BetterActivities**](./betterActivities)  
Shows activity icons in the member list and allows showing all activities

🔇 [**BlockKrisp**](./blockKrisp)  
Prevent Krisp from loading

🤝 [**FollowUser**](./followUser)  
Adds a follow option in the user context menu to always be in the same VC as them

😒 [**IgnoreTerms**](./ignoreTerms)  
Ignore Discord's new terms of service

⏩ [**MediaPlaybackSpeed**](./mediaPlaybackSpeed)  
Adds an icon to change the playback speed of media embeds

🔔 [**NotifyUserChanges**](./notifyUserChanges)  
Adds a notify option in the user context menu to get notified when a user changes voice channels or online status

📹 [**ScreenShareStreamerMode**](./screenShareStreamerMode)  
Automatically enables streamer mode while screen sharing

👤 [**ServerProfilesToolbox**](./serverProfilesToolbox)  
Adds a copy/paste/reset button to the server profiles editor

🤫 [**SilentTyping**](./silentTyping)  
Enhanced version of SilentTyping with the feature to disable it for specific guilds or users

🔈 [**VoiceChatUtilities**](./voiceChatUtilities)  
Allows you to perform multiple actions on an entire channel (move, mute, disconnect, etc.)


# Install

If you don't know how to install userplugins in the first place please see the manual [Vencord installation guide](https://docs.vencord.dev/installing/). If using Vesktop specify the location in Vesktop settings instead of running `pnpm inject`

> [!TIP]
> There's also [this video by Syncxv](https://youtu.be/8wexjSo8fNw) which shows how to install a userplugin on Windows.  
> Just be sure to replace the `git clone` command with the one from below

Clone the repository inside your Vencord `src/userplugins` folder (create the folder if it doesn't exist)
```bash
cd Vencord/src/userplugins
git clone https://github.com/D3SOX/vencord-userplugins D3SOX-userplugins
pnpm build
````

# Update

> [!IMPORTANT]
> By installing the repo an updater is installed which automatically checks for updates. The automatic checking can be disabled.  
> Open the settings of the `D3SOXUpdater` plugin to manually check for updates

To manually update just pull the latest changes inside the repository folder
```bash
cd Vencord/src/userplugins/D3SOX-userplugins
git pull
pnpm build
```

# Credits

- [Syncxv](https://github.com/Syncxv) for the updater
- [Kyuuhachi](https://github.com/Kyuuhachi) for the plugin loader
