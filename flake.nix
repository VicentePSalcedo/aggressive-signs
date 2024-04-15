{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-23.11";
  };

  outputs = { self , nixpkgs ,... }: let
    system = "x86_64-linux";
  in {
    devShells."${system}".default = let
      pkgs = import nixpkgs {
        inherit system;
      };
    in pkgs.mkShell {
      # create an environment with nodejs_18, pnpm, and yarn
      packages = with pkgs; [
        nodejs_21
        nodePackages.pnpm
        nodePackages."@angular/cli"
        firebase-tools
      ];

      shellHook = ''
        echo "install angular cli and building app"
        ng build app
        echo "enabling firebase experimental features"
        firebase experiments:enable webframeworks
        echo "don't forget to run 'firebase init hosting' on new machines"
      '';
    };
  };
}
