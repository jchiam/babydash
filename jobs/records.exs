use Kitto.Job.DSL

job :squash,
    every: :hour,
    command: "curl #{System.get_env("FIREBASE_URL")}/squash.json"

job :table_tennis,
    every: :hour,
    command: "curl #{System.get_env("FIREBASE_URL")}/table-tennis.json"

job :pokemon_battle,
    every: :hour,
    command: "curl #{System.get_env("FIREBASE_URL")}/pokemon-battle.json"

job :basketball_arcade,
    every: :hour,
    command: "curl #{System.get_env("FIREBASE_URL")}/basketball-arcade.json"
