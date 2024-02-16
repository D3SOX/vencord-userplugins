# D3SOX's Vencord userplugins
See the individual folders for the plugin descriptions

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
