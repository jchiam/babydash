use Kitto.Job.DSL

job :squash,
    every: :hour,
    command: "curl #{System.get_env("FIREBASE_URL")}/squash.json"
