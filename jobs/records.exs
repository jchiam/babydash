use Kitto.Job.DSL

defmodule Firebase do
    def generate_query(key) do
        "curl #{System.get_env("FIREBASE_URL")}/#{key}.json?auth=#{System.get_env("FIREBASE_TOKEN")}"
    end
end

job :squash,
    every: :hour,
    command: Firebase.generate_query("squash")

job :table_tennis,
    every: :hour,
    command: Firebase.generate_query("table-tennis")

job :pokemon_battle,
    every: :hour,
    command: Firebase.generate_query("pokemon-battle")

job :basketball_arcade,
    every: :hour,
    command: Firebase.generate_query("basketball-arcade")
