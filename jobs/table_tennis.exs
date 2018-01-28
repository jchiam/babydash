use Kitto.Job.DSL

job :table_tennis,
    every: :hour,
    command: "curl #{System.get_env("FIREBASE_URL")}/table-tennis.json"
