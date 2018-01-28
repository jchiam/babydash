use Kitto.Job.DSL

job :pokemon_battle,
    every: :hour,
    command: "curl #{System.get_env("FIREBASE_URL")}/pokemon-battle.json"
