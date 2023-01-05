const hardcoded_game_in_progress_early =
{
    "id": "397e9db0-eb0d-44ec-a579-848b32b116f2",
    "status": "inprogress",
    "scheduled": "2023-01-01T21:05:00+00:00",
    "entry_mode": "LDE",
    "clock": "11:40",
    "quarter": 1,
    "sr_id": "sr:match:33623649",
    "game_type": "regular",
    "weather": {
        "condition": "Partly cloudy",
        "humidity": 44,
        "temp": 59,
        "wind": {
            "speed": 13,
            "direction": "SSW"
        }
    },
    "coin_toss": [{
        "home": {
            "outcome": "lost",
            "decision": "receive",
            "direction": "north"
        },
        "away": {
            "outcome": "won",
            "decision": "defer",
            "direction": "north"
        },
        "quarter": 1
    }],
    "summary": {
        "season": {
            "id": "75749c10-56c1-4ae0-9d1e-2689708debdf",
            "year": 2022,
            "type": "REG",
            "name": "REG"
        },
        "week": {
            "id": "ed5822b6-a023-458a-9eab-ab8a8b95b85c",
            "sequence": 17,
            "title": "17"
        },
        "venue": {
            "id": "53d42601-5dfb-40a7-bd94-da2c1d3a75e4",
            "name": "Allegiant Stadium",
            "city": "Las Vegas",
            "state": "NV",
            "country": "USA",
            "zip": "89118",
            "address": "3333 Al Davis Way",
            "capacity": 65000,
            "surface": "turf",
            "roof_type": "dome",
            "sr_id": "sr:venue:51543",
            "location": {
                "lat": "36.090852",
                "lng": "-115.183339"
            }
        },
        "home": {
            "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
            "name": "Raiders",
            "market": "Las Vegas",
            "alias": "LV",
            "sr_id": "sr:competitor:4390",
            "used_timeouts": 0,
            "remaining_timeouts": 3,
            "points": 7,
            "used_challenges": 0,
            "remaining_challenges": 2
        },
        "away": {
            "id": "f0e724b0-4cbf-495a-be47-013907608da9",
            "name": "49ers",
            "market": "San Francisco",
            "alias": "SF",
            "sr_id": "sr:competitor:4389",
            "used_timeouts": 0,
            "remaining_timeouts": 3,
            "points": 0,
            "used_challenges": 0,
            "remaining_challenges": 2
        }
    },
    "situation": {
        "clock": "11:40",
        "down": 0,
        "yfd": 0,
        "possession": {
            "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
            "name": "Raiders",
            "market": "Las Vegas",
            "alias": "LV",
            "sr_id": "sr:competitor:4390"
        },
        "location": {
            "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
            "name": "Raiders",
            "market": "Las Vegas",
            "alias": "LV",
            "sr_id": "sr:competitor:4390",
            "yardline": 35
        }
    },
    "last_event": {
        "type": "event",
        "id": "bc1b0910-8a18-11ed-9c65-6f281153d3a0",
        "sequence": 1672607440902.0,
        "clock": "11:40",
        "event_type": "tv_timeout",
        "description": "TV Timeout",
        "created_at": "2023-01-01T21:10:40+00:00",
        "updated_at": "2023-01-01T21:10:41+00:00",
        "wall_clock": "2023-01-01T21:10:39+00:00"
    },
    "scoring": [{
        "period_type": "quarter",
        "id": "47804644-a799-46ed-b958-0f8c49647fb4",
        "number": 1,
        "sequence": 1,
        "home_points": 7,
        "away_points": 0
    }],
    "scoring_drives": [{
        "id": "b453c3de-3ba9-4584-99c7-343710cfd831",
        "sequence": 1,
        "start_reason": "Kickoff",
        "end_reason": "Touchdown",
        "play_count": 6,
        "duration": "3:20",
        "first_downs": 3,
        "gain": 70,
        "penalty_yards": 5,
        "scoring_drive": true,
        "quarter": {
            "id": "47804644-a799-46ed-b958-0f8c49647fb4",
            "number": 1,
            "sequence": 1
        },
        "team": {
            "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
            "name": "Raiders",
            "market": "Las Vegas",
            "alias": "LV",
            "sr_id": "sr:competitor:4390"
        },
        "plays": [{
            "type": "play",
            "id": "cc816570-8a12-11ed-9c65-6f281153d3a0",
            "sequence": 1672607137510.0,
            "clock": "15:00",
            "home_points": 0,
            "away_points": 0,
            "play_type": "kickoff",
            "wall_clock": "2023-01-01T21:05:29+00:00",
            "description": "R.Gould kicks 65 yards from SF 35 to the LV End Zone. Touchback.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T21:05:37+00:00",
            "updated_at": "2023-01-01T21:05:38+00:00",
            "start_situation": {
                "clock": "15:00",
                "down": 0,
                "yfd": 0,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                },
                "location": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389",
                    "yardline": 35
                }
            },
            "end_situation": {
                "clock": "15:00",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 0
                }
            },
            "statistics": [{
                "stat_type": "kick",
                "attempt": 1,
                "yards": 65,
                "net_yards": 65,
                "touchback": 1,
                "onside_attempt": 0,
                "onside_success": 0,
                "squib_kick": 0,
                "player": {
                    "id": "abd73d50-ce60-47f1-b37f-2f9a05b0d7b9",
                    "name": "Robbie Gould",
                    "jersey": "09",
                    "position": "K",
                    "sr_id": "sr:player:830975"
                },
                "team": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }, {
                "stat_type": "return",
                "touchback": 1,
                "category": "kick_return",
                "team": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390"
                }
            }],
            "details": [{
                "category": "kick_off",
                "description": "R.Gould kicks 65 yards from SF 35 to the LV End Zone.",
                "sequence": 0,
                "yards": 65,
                "result": "touchback",
                "start_location": {
                    "alias": "SF",
                    "yardline": 35
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 0
                },
                "players": [{
                    "id": "abd73d50-ce60-47f1-b37f-2f9a05b0d7b9",
                    "name": "Robbie Gould",
                    "jersey": "09",
                    "position": "K",
                    "sr_id": "sr:player:830975",
                    "role": "kick"
                }]
            }, {
                "category": "touchback",
                "description": "Touchback.",
                "sequence": 1,
                "result": "touchback",
                "start_location": {
                    "alias": "LV",
                    "yardline": 0
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 0
                },
                "players": [{
                    "id": "abd73d50-ce60-47f1-b37f-2f9a05b0d7b9",
                    "name": "Robbie Gould",
                    "jersey": "09",
                    "position": "K",
                    "sr_id": "sr:player:830975",
                    "role": "kick"
                }]
            }],
            "quarter": {
                "id": "47804644-a799-46ed-b958-0f8c49647fb4",
                "number": 1,
                "sequence": 1
            }
        }, {
            "type": "play",
            "id": "0b367580-8a18-11ed-9c65-6f281153d3a0",
            "sequence": 1672607179806.0,
            "clock": "15:00",
            "home_points": 0,
            "away_points": 0,
            "play_type": "penalty",
            "wall_clock": "2023-01-01T21:05:56+00:00",
            "description": "PENALTY on SF-T.Martin, Defensive Offside, 5 yards, accepted.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T21:06:19+00:00",
            "updated_at": "2023-01-01T21:07:11+00:00",
            "start_situation": {
                "clock": "15:00",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 25
                }
            },
            "end_situation": {
                "clock": "15:00",
                "down": 1,
                "yfd": 5,
                "possession": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 30
                }
            },
            "statistics": [{
                "stat_type": "penalty",
                "penalty": 1,
                "yards": 5,
                "player": {
                    "id": "8d74f600-ca80-11ec-97ae-e1573849d1a6",
                    "name": "Tay Martin",
                    "jersey": "86",
                    "position": "WR",
                    "sr_id": "sr:player:1262820"
                },
                "team": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }],
            "details": [{
                "category": "penalty",
                "description": "PENALTY on SF-T.Martin, Defensive Offside, 5 yards, accepted.",
                "sequence": 0,
                "start_location": {
                    "alias": "LV",
                    "yardline": 25
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 30
                },
                "penalty": {
                    "description": "Defensive Offside",
                    "result": "accepted",
                    "yards": 5,
                    "team": {
                        "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                        "name": "49ers",
                        "market": "San Francisco",
                        "alias": "SF",
                        "sr_id": "sr:competitor:4389"
                    }
                },
                "players": [{
                    "id": "8d74f600-ca80-11ec-97ae-e1573849d1a6",
                    "name": "Tay Martin",
                    "jersey": "86",
                    "position": "WR",
                    "sr_id": "sr:player:1262820",
                    "role": "penalty"
                }]
            }],
            "quarter": {
                "id": "47804644-a799-46ed-b958-0f8c49647fb4",
                "number": 1,
                "sequence": 1
            }
        }, {
            "type": "play",
            "id": "2420c910-8a18-11ed-9c65-6f281153d3a0",
            "sequence": 1672607201963.0,
            "clock": "15:00",
            "home_points": 0,
            "away_points": 0,
            "play_type": "pass",
            "wall_clock": "2023-01-01T21:06:30+00:00",
            "description": "J.Stidham pass short right complete to LV 30. Catch made by F.Moreau at LV 30. Gain of 20 yards. Pushed out of bounds by T.Gipson at LV 50.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T21:06:41+00:00",
            "updated_at": "2023-01-01T21:08:09+00:00",
            "start_situation": {
                "clock": "15:00",
                "down": 1,
                "yfd": 5,
                "possession": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 30
                }
            },
            "end_situation": {
                "clock": "14:31",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 50
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 1,
                "yards": 20,
                "att_yards": 0,
                "firstdown": 1,
                "inside_20": 0,
                "goaltogo": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "on_target_throw": 0,
                "batted_pass": 0,
                "player": {
                    "id": "582fe465-135a-4901-beef-60aebce99067",
                    "name": "Jarrett Stidham",
                    "jersey": "03",
                    "position": "QB",
                    "sr_id": "sr:player:1232264"
                },
                "team": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390"
                }
            }, {
                "stat_type": "receive",
                "firstdown": 1,
                "target": 1,
                "reception": 1,
                "yards": 20,
                "yards_after_catch": 20,
                "inside_20": 0,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "9c3a67fd-5c6e-4689-9e08-9ff6d4db6c9a",
                    "name": "Foster Moreau",
                    "jersey": "87",
                    "position": "TE",
                    "sr_id": "sr:player:1769320"
                },
                "team": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390"
                }
            }, {
                "stat_type": "defense",
                "tackle": 1,
                "category": "defense",
                "def_target": 0,
                "def_comp": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "batted_pass": 0,
                "player": {
                    "id": "d5efd828-7339-43a7-ad7e-6f936dbbabb2",
                    "name": "Tashaun Gipson Sr.",
                    "jersey": "31",
                    "position": "SAF",
                    "sr_id": "sr:player:831467"
                },
                "team": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }, {
                "stat_type": "first_down",
                "category": "pass",
                "team": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390"
                }
            }],
            "details": [{
                "category": "pass_completion",
                "description": "J.Stidham pass short right complete to LV 30.",
                "sequence": 0,
                "direction": "short right",
                "yards": 20,
                "start_location": {
                    "alias": "LV",
                    "yardline": 30
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 30
                },
                "players": [{
                    "id": "582fe465-135a-4901-beef-60aebce99067",
                    "name": "Jarrett Stidham",
                    "jersey": "03",
                    "position": "QB",
                    "sr_id": "sr:player:1232264",
                    "role": "pass"
                }]
            }, {
                "category": "pass_reception",
                "description": "Catch made by F.Moreau at LV 30. Gain of 20 yards.",
                "sequence": 1,
                "yards": 20,
                "result": "pushed out of bounds",
                "start_location": {
                    "alias": "LV",
                    "yardline": 30
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 50
                },
                "players": [{
                    "id": "9c3a67fd-5c6e-4689-9e08-9ff6d4db6c9a",
                    "name": "Foster Moreau",
                    "jersey": "87",
                    "position": "TE",
                    "sr_id": "sr:player:1769320",
                    "role": "catch"
                }]
            }, {
                "category": "pushed_out_of_bounds",
                "description": "Pushed out of bounds by T.Gipson at LV 50.",
                "sequence": 2,
                "start_location": {
                    "alias": "LV",
                    "yardline": 50
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 50
                },
                "players": [{
                    "id": "d5efd828-7339-43a7-ad7e-6f936dbbabb2",
                    "name": "Tashaun Gipson Sr.",
                    "jersey": "31",
                    "position": "SAF",
                    "sr_id": "sr:player:831467",
                    "role": "tackle"
                }]
            }, {
                "category": "first_down",
                "sequence": 3,
                "result": "pass",
                "start_location": {
                    "alias": "LV",
                    "yardline": 50
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 50
                },
                "players": []
            }],
            "quarter": {
                "id": "47804644-a799-46ed-b958-0f8c49647fb4",
                "number": 1,
                "sequence": 1
            }
        }, {
            "type": "play",
            "id": "31c3b0f0-8a18-11ed-9c65-6f281153d3a0",
            "sequence": 1672607233635.0,
            "clock": "14:31",
            "home_points": 0,
            "away_points": 0,
            "play_type": "rush",
            "wall_clock": "2023-01-01T21:07:06+00:00",
            "description": "J.Jacobs rushed left tackle to SF 46 for 4 yards. Tackled by D.Greenlaw; A.Al-Shaair at SF 46.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T21:07:13+00:00",
            "updated_at": "2023-01-01T21:08:47+00:00",
            "start_situation": {
                "clock": "14:31",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 50
                }
            },
            "end_situation": {
                "clock": "13:50",
                "down": 2,
                "yfd": 6,
                "possession": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390"
                },
                "location": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389",
                    "yardline": 46
                }
            },
            "statistics": [{
                "stat_type": "rush",
                "attempt": 1,
                "yards": 4,
                "firstdown": 0,
                "inside_20": 0,
                "goaltogo": 0,
                "broken_tackles": 0,
                "kneel_down": 0,
                "scramble": 0,
                "player": {
                    "id": "61694ab9-b099-408e-b48d-6a643dd069ec",
                    "name": "Josh Jacobs",
                    "jersey": "28",
                    "position": "RB",
                    "sr_id": "sr:player:1216962"
                },
                "team": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390"
                }
            }, {
                "stat_type": "defense",
                "ast_tackle": 1,
                "category": "defense",
                "def_target": 0,
                "def_comp": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "batted_pass": 0,
                "player": {
                    "id": "e6eb9d50-9231-44ff-89eb-7f7b996e042f",
                    "name": "Dre Greenlaw",
                    "jersey": "57",
                    "position": "LB",
                    "sr_id": "sr:player:1833944"
                },
                "team": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }, {
                "stat_type": "defense",
                "ast_tackle": 1,
                "category": "defense",
                "def_target": 0,
                "def_comp": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "batted_pass": 0,
                "player": {
                    "id": "e9348fc5-273d-4ac3-9760-462f37c025dc",
                    "name": "Azeez Al-Shaair",
                    "jersey": "51",
                    "position": "LB",
                    "sr_id": "sr:player:1204432"
                },
                "team": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }],
            "details": [{
                "category": "rush",
                "description": "J.Jacobs rushed left tackle to SF 46 for 4 yards.",
                "sequence": 0,
                "direction": "left tackle",
                "yards": 4,
                "result": "tackled",
                "start_location": {
                    "alias": "LV",
                    "yardline": 50
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 46
                },
                "players": [{
                    "id": "61694ab9-b099-408e-b48d-6a643dd069ec",
                    "name": "Josh Jacobs",
                    "jersey": "28",
                    "position": "RB",
                    "sr_id": "sr:player:1216962",
                    "role": "rush"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by D.Greenlaw; A.Al-Shaair at SF 46.",
                "sequence": 1,
                "start_location": {
                    "alias": "SF",
                    "yardline": 46
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 46
                },
                "players": [{
                    "id": "e6eb9d50-9231-44ff-89eb-7f7b996e042f",
                    "name": "Dre Greenlaw",
                    "jersey": "57",
                    "position": "LB",
                    "sr_id": "sr:player:1833944",
                    "role": "ast_tackle"
                }, {
                    "id": "e9348fc5-273d-4ac3-9760-462f37c025dc",
                    "name": "Azeez Al-Shaair",
                    "jersey": "51",
                    "position": "LB",
                    "sr_id": "sr:player:1204432",
                    "role": "ast_tackle"
                }]
            }],
            "quarter": {
                "id": "47804644-a799-46ed-b958-0f8c49647fb4",
                "number": 1,
                "sequence": 1
            }
        }, {
            "type": "play",
            "id": "5163b310-8a18-11ed-9c65-6f281153d3a0",
            "sequence": 1672607283228.0,
            "clock": "13:50",
            "home_points": 0,
            "away_points": 0,
            "play_type": "pass",
            "wall_clock": "2023-01-01T21:07:45+00:00",
            "description": "J.Stidham pass short left complete to SF 47. Catch made by J.Jacobs at SF 47. Gain of 14 yards. Tackled by A.Armstead at SF 32.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T21:08:03+00:00",
            "updated_at": "2023-01-01T21:09:19+00:00",
            "start_situation": {
                "clock": "13:50",
                "down": 2,
                "yfd": 6,
                "possession": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390"
                },
                "location": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389",
                    "yardline": 46
                }
            },
            "end_situation": {
                "clock": "13:11",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390"
                },
                "location": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389",
                    "yardline": 32
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 1,
                "yards": 14,
                "att_yards": -1,
                "firstdown": 1,
                "inside_20": 0,
                "goaltogo": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "on_target_throw": 0,
                "batted_pass": 0,
                "player": {
                    "id": "582fe465-135a-4901-beef-60aebce99067",
                    "name": "Jarrett Stidham",
                    "jersey": "03",
                    "position": "QB",
                    "sr_id": "sr:player:1232264"
                },
                "team": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390"
                }
            }, {
                "stat_type": "receive",
                "firstdown": 1,
                "target": 1,
                "reception": 1,
                "yards": 14,
                "yards_after_catch": 15,
                "inside_20": 0,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "61694ab9-b099-408e-b48d-6a643dd069ec",
                    "name": "Josh Jacobs",
                    "jersey": "28",
                    "position": "RB",
                    "sr_id": "sr:player:1216962"
                },
                "team": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390"
                }
            }, {
                "stat_type": "defense",
                "tackle": 1,
                "category": "defense",
                "def_target": 0,
                "def_comp": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "batted_pass": 0,
                "player": {
                    "id": "acb7169f-3ffa-4386-9866-e06af6ed7fef",
                    "name": "Arik Armstead",
                    "jersey": "91",
                    "position": "DL",
                    "sr_id": "sr:player:834509"
                },
                "team": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }, {
                "stat_type": "first_down",
                "category": "pass",
                "team": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390"
                }
            }],
            "details": [{
                "category": "pass_completion",
                "description": "J.Stidham pass short left complete to SF 47.",
                "sequence": 0,
                "direction": "short left",
                "yards": 14,
                "start_location": {
                    "alias": "SF",
                    "yardline": 46
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 47
                },
                "players": [{
                    "id": "582fe465-135a-4901-beef-60aebce99067",
                    "name": "Jarrett Stidham",
                    "jersey": "03",
                    "position": "QB",
                    "sr_id": "sr:player:1232264",
                    "role": "pass"
                }]
            }, {
                "category": "pass_reception",
                "description": "Catch made by J.Jacobs at SF 47. Gain of 14 yards.",
                "sequence": 1,
                "yards": 14,
                "result": "tackled",
                "start_location": {
                    "alias": "SF",
                    "yardline": 47
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 32
                },
                "players": [{
                    "id": "61694ab9-b099-408e-b48d-6a643dd069ec",
                    "name": "Josh Jacobs",
                    "jersey": "28",
                    "position": "RB",
                    "sr_id": "sr:player:1216962",
                    "role": "catch"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by A.Armstead at SF 32.",
                "sequence": 2,
                "start_location": {
                    "alias": "SF",
                    "yardline": 32
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 32
                },
                "players": [{
                    "id": "acb7169f-3ffa-4386-9866-e06af6ed7fef",
                    "name": "Arik Armstead",
                    "jersey": "91",
                    "position": "DL",
                    "sr_id": "sr:player:834509",
                    "role": "tackle"
                }]
            }, {
                "category": "first_down",
                "sequence": 3,
                "result": "pass",
                "start_location": {
                    "alias": "SF",
                    "yardline": 32
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 32
                },
                "players": []
            }],
            "quarter": {
                "id": "47804644-a799-46ed-b958-0f8c49647fb4",
                "number": 1,
                "sequence": 1
            }
        }, {
            "type": "play",
            "id": "621cb490-8a18-11ed-9c65-6f281153d3a0",
            "sequence": 1672607311411.0,
            "clock": "13:11",
            "home_points": 0,
            "away_points": 0,
            "play_type": "rush",
            "wall_clock": "2023-01-01T21:08:23+00:00",
            "description": "B.Bolden rushed up the middle to SF 29 for 3 yards. Tackled by A.Armstead, A.Al-Shaair at SF 29.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T21:08:31+00:00",
            "updated_at": "2023-01-01T21:12:19+00:00",
            "start_situation": {
                "clock": "13:11",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390"
                },
                "location": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389",
                    "yardline": 32
                }
            },
            "end_situation": {
                "clock": "13:11",
                "down": 2,
                "yfd": 7,
                "possession": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390"
                },
                "location": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389",
                    "yardline": 29
                }
            },
            "statistics": [{
                "stat_type": "rush",
                "attempt": 1,
                "yards": 3,
                "firstdown": 0,
                "inside_20": 0,
                "goaltogo": 0,
                "broken_tackles": 0,
                "kneel_down": 0,
                "scramble": 0,
                "player": {
                    "id": "dba5e3ec-2c77-4f65-ad6e-cee246f816ef",
                    "name": "Brandon Bolden",
                    "jersey": "34",
                    "position": "RB",
                    "sr_id": "sr:player:829147"
                },
                "team": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390"
                }
            }, {
                "stat_type": "defense",
                "ast_tackle": 1,
                "category": "defense",
                "def_target": 0,
                "def_comp": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "batted_pass": 0,
                "player": {
                    "id": "e9348fc5-273d-4ac3-9760-462f37c025dc",
                    "name": "Azeez Al-Shaair",
                    "jersey": "51",
                    "position": "LB",
                    "sr_id": "sr:player:1204432"
                },
                "team": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }, {
                "stat_type": "defense",
                "tackle": 1,
                "category": "defense",
                "def_target": 0,
                "def_comp": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "batted_pass": 0,
                "player": {
                    "id": "acb7169f-3ffa-4386-9866-e06af6ed7fef",
                    "name": "Arik Armstead",
                    "jersey": "91",
                    "position": "DL",
                    "sr_id": "sr:player:834509"
                },
                "team": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }],
            "details": [{
                "category": "rush",
                "description": "B.Bolden rushed up the middle to SF 29 for 3 yards.",
                "sequence": 0,
                "direction": "up the middle",
                "yards": 3,
                "result": "tackled",
                "start_location": {
                    "alias": "SF",
                    "yardline": 32
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 29
                },
                "players": [{
                    "id": "dba5e3ec-2c77-4f65-ad6e-cee246f816ef",
                    "name": "Brandon Bolden",
                    "jersey": "34",
                    "position": "RB",
                    "sr_id": "sr:player:829147",
                    "role": "rush"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by A.Armstead, A.Al-Shaair at SF 29.",
                "sequence": 1,
                "start_location": {
                    "alias": "SF",
                    "yardline": 29
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 29
                },
                "players": [{
                    "id": "e9348fc5-273d-4ac3-9760-462f37c025dc",
                    "name": "Azeez Al-Shaair",
                    "jersey": "51",
                    "position": "LB",
                    "sr_id": "sr:player:1204432",
                    "role": "ast_tackle"
                }, {
                    "id": "acb7169f-3ffa-4386-9866-e06af6ed7fef",
                    "name": "Arik Armstead",
                    "jersey": "91",
                    "position": "DL",
                    "sr_id": "sr:player:834509",
                    "role": "tackle"
                }]
            }],
            "quarter": {
                "id": "47804644-a799-46ed-b958-0f8c49647fb4",
                "number": 1,
                "sequence": 1
            }
        }, {
            "type": "play",
            "id": "72f795f0-8a18-11ed-9c65-6f281153d3a0",
            "sequence": 1672607358863.0,
            "clock": "12:27",
            "home_points": 0,
            "away_points": 0,
            "play_type": "rush",
            "wall_clock": "2023-01-01T21:09:10+00:00",
            "description": "J.Stidham scrambles left guard to SF 24 for 5 yards. Tackled by F.Warner at SF 24.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T21:09:18+00:00",
            "updated_at": "2023-01-01T21:10:52+00:00",
            "start_situation": {
                "clock": "12:27",
                "down": 2,
                "yfd": 7,
                "possession": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390"
                },
                "location": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389",
                    "yardline": 29
                }
            },
            "end_situation": {
                "clock": "11:46",
                "down": 3,
                "yfd": 2,
                "possession": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390"
                },
                "location": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389",
                    "yardline": 24
                }
            },
            "statistics": [{
                "stat_type": "rush",
                "attempt": 1,
                "yards": 5,
                "firstdown": 0,
                "inside_20": 0,
                "goaltogo": 0,
                "broken_tackles": 0,
                "kneel_down": 0,
                "scramble": 1,
                "player": {
                    "id": "582fe465-135a-4901-beef-60aebce99067",
                    "name": "Jarrett Stidham",
                    "jersey": "03",
                    "position": "QB",
                    "sr_id": "sr:player:1232264"
                },
                "team": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390"
                }
            }, {
                "stat_type": "defense",
                "tackle": 1,
                "category": "defense",
                "def_target": 0,
                "def_comp": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "batted_pass": 0,
                "player": {
                    "id": "75a74283-5ab6-49d4-bf2f-e6fcaf91ec36",
                    "name": "Fred Warner",
                    "jersey": "54",
                    "position": "LB",
                    "sr_id": "sr:player:1198502"
                },
                "team": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }],
            "details": [{
                "category": "scramble",
                "description": "J.Stidham scrambles left guard to SF 24 for 5 yards.",
                "sequence": 0,
                "direction": "left guard",
                "yards": 5,
                "start_location": {
                    "alias": "SF",
                    "yardline": 29
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 24
                },
                "players": [{
                    "id": "582fe465-135a-4901-beef-60aebce99067",
                    "name": "Jarrett Stidham",
                    "jersey": "03",
                    "position": "QB",
                    "sr_id": "sr:player:1232264",
                    "role": "pass"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by F.Warner at SF 24.",
                "sequence": 1,
                "start_location": {
                    "alias": "SF",
                    "yardline": 24
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 24
                },
                "players": [{
                    "id": "75a74283-5ab6-49d4-bf2f-e6fcaf91ec36",
                    "name": "Fred Warner",
                    "jersey": "54",
                    "position": "LB",
                    "sr_id": "sr:player:1198502",
                    "role": "tackle"
                }]
            }],
            "quarter": {
                "id": "47804644-a799-46ed-b958-0f8c49647fb4",
                "number": 1,
                "sequence": 1
            }
        }, {
            "type": "play",
            "id": "94958af0-8a18-11ed-9c65-6f281153d3a0",
            "sequence": 1672607427653.0,
            "clock": "11:46",
            "home_points": 6,
            "away_points": 0,
            "play_type": "pass",
            "scoring_play": true,
            "wall_clock": "2023-01-01T21:09:50+00:00",
            "description": "J.Stidham pass deep right complete to SF 3. Catch made by D.Waller at SF 3. Gain of 24 yards. D.Waller for 24 yards, TOUCHDOWN.",
            "scoring_description": "J.Stidham pass deep right complete to SF 3. Catch made by D.Waller at SF 3. Gain of 24 yards. D.Waller for 24 yards, TOUCHDOWN.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T21:10:27+00:00",
            "updated_at": "2023-01-01T21:11:30+00:00",
            "start_situation": {
                "clock": "11:46",
                "down": 3,
                "yfd": 2,
                "possession": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390"
                },
                "location": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389",
                    "yardline": 24
                }
            },
            "end_situation": {
                "clock": "11:40",
                "down": 0,
                "yfd": 0,
                "possession": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390"
                },
                "location": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389",
                    "yardline": 15
                }
            },
            "score": {
                "sequence": 2,
                "clock": "11:40",
                "points": 7,
                "home_points": 6,
                "away_points": 0,
                "points-after-play": {
                    "id": "b8aa9a70-8a18-11ed-9c65-6f281153d3a0",
                    "sequence": 1672607434461.0,
                    "type": "extra_point"
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 1,
                "yards": 24,
                "att_yards": 21,
                "firstdown": 1,
                "touchdown": 1,
                "inside_20": 0,
                "goaltogo": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "on_target_throw": 0,
                "batted_pass": 0,
                "player": {
                    "id": "582fe465-135a-4901-beef-60aebce99067",
                    "name": "Jarrett Stidham",
                    "jersey": "03",
                    "position": "QB",
                    "sr_id": "sr:player:1232264"
                },
                "team": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390"
                }
            }, {
                "stat_type": "receive",
                "firstdown": 1,
                "touchdown": 1,
                "target": 1,
                "reception": 1,
                "yards": 24,
                "yards_after_catch": 3,
                "inside_20": 0,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "14c97c9f-26e8-4944-9299-f90de6aeada3",
                    "name": "Darren Waller",
                    "jersey": "83",
                    "position": "TE",
                    "sr_id": "sr:player:835255"
                },
                "team": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390"
                }
            }, {
                "stat_type": "down_conversion",
                "down": 3,
                "attempt": 1,
                "complete": 1,
                "team": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390"
                }
            }, {
                "stat_type": "first_down",
                "category": "pass",
                "player": {
                    "id": "14c97c9f-26e8-4944-9299-f90de6aeada3",
                    "name": "Darren Waller",
                    "jersey": "83",
                    "position": "TE",
                    "sr_id": "sr:player:835255"
                },
                "team": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390"
                }
            }],
            "details": [{
                "category": "pass_completion",
                "description": "J.Stidham pass deep right complete to SF 3.",
                "sequence": 0,
                "direction": "deep right",
                "yards": 24,
                "start_location": {
                    "alias": "SF",
                    "yardline": 24
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 3
                },
                "players": [{
                    "id": "582fe465-135a-4901-beef-60aebce99067",
                    "name": "Jarrett Stidham",
                    "jersey": "03",
                    "position": "QB",
                    "sr_id": "sr:player:1232264",
                    "role": "pass"
                }]
            }, {
                "category": "pass_reception",
                "description": "Catch made by D.Waller at SF 3. Gain of 24 yards.",
                "sequence": 1,
                "yards": 24,
                "result": "touchdown",
                "start_location": {
                    "alias": "SF",
                    "yardline": 3
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 0
                },
                "players": [{
                    "id": "14c97c9f-26e8-4944-9299-f90de6aeada3",
                    "name": "Darren Waller",
                    "jersey": "83",
                    "position": "TE",
                    "sr_id": "sr:player:835255",
                    "role": "catch"
                }]
            }, {
                "category": "touchdown",
                "description": "D.Waller for 24 yards, TOUCHDOWN.",
                "sequence": 2,
                "yards": 24,
                "result": "touchdown",
                "start_location": {
                    "alias": "SF",
                    "yardline": 0
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 0
                },
                "players": [{
                    "id": "14c97c9f-26e8-4944-9299-f90de6aeada3",
                    "name": "Darren Waller",
                    "jersey": "83",
                    "position": "TE",
                    "sr_id": "sr:player:835255",
                    "role": "catch"
                }]
            }, {
                "category": "third_down_conversion",
                "sequence": 3,
                "result": "good",
                "start_location": {
                    "alias": "SF",
                    "yardline": 24
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 24
                },
                "players": []
            }],
            "quarter": {
                "id": "47804644-a799-46ed-b958-0f8c49647fb4",
                "number": 1,
                "sequence": 1
            }
        }, {
            "type": "play",
            "id": "b8aa9a70-8a18-11ed-9c65-6f281153d3a0",
            "sequence": 1672607434461.0,
            "clock": "11:40",
            "home_points": 7,
            "away_points": 0,
            "play_type": "extra_point",
            "scoring_play": true,
            "wall_clock": "2023-01-01T21:10:32+00:00",
            "description": "D.Carlson extra point is good.",
            "scoring_description": "J.Stidham pass deep right complete to SF 3. Catch made by D.Waller at SF 3. Gain of 24 yards. D.Waller for 24 yards, TOUCHDOWN.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T21:10:34+00:00",
            "updated_at": "2023-01-01T21:10:35+00:00",
            "start_situation": {
                "clock": "11:40",
                "down": 0,
                "yfd": 0,
                "possession": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390"
                },
                "location": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389",
                    "yardline": 15
                }
            },
            "end_situation": {
                "clock": "11:40",
                "down": 0,
                "yfd": 0,
                "possession": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 35
                }
            },
            "statistics": [{
                "stat_type": "extra_point",
                "attempt": 1,
                "made": 1,
                "player": {
                    "id": "7bb70550-c28a-4e47-9a13-cc0c0fef8b38",
                    "name": "Daniel Carlson",
                    "jersey": "02",
                    "position": "K",
                    "sr_id": "sr:player:1226876"
                },
                "team": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390"
                }
            }],
            "details": [{
                "category": "extra_point_attempt",
                "description": "D.Carlson extra point is good.",
                "sequence": 0,
                "result": "good",
                "start_location": {
                    "alias": "SF",
                    "yardline": 15
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 15
                },
                "players": [{
                    "id": "7bb70550-c28a-4e47-9a13-cc0c0fef8b38",
                    "name": "Daniel Carlson",
                    "jersey": "02",
                    "position": "K",
                    "sr_id": "sr:player:1226876",
                    "role": "kick"
                }]
            }],
            "quarter": {
                "id": "47804644-a799-46ed-b958-0f8c49647fb4",
                "number": 1,
                "sequence": 1
            }
        }]
    }],
    "scoring_plays": [{
        "type": "play",
        "id": "94958af0-8a18-11ed-9c65-6f281153d3a0",
        "sequence": 1672607427653.0,
        "clock": "11:46",
        "home_points": 6,
        "away_points": 0,
        "play_type": "pass",
        "scoring_play": true,
        "wall_clock": "2023-01-01T21:09:50+00:00",
        "description": "J.Stidham pass deep right complete to SF 3. Catch made by D.Waller at SF 3. Gain of 24 yards. D.Waller for 24 yards, TOUCHDOWN.",
        "scoring_description": "J.Stidham pass deep right complete to SF 3. Catch made by D.Waller at SF 3. Gain of 24 yards. D.Waller for 24 yards, TOUCHDOWN.",
        "fake_punt": false,
        "fake_field_goal": false,
        "screen_pass": false,
        "play_action": false,
        "run_pass_option": false,
        "created_at": "2023-01-01T21:10:27+00:00",
        "updated_at": "2023-01-01T21:11:30+00:00",
        "start_situation": {
            "clock": "11:46",
            "down": 3,
            "yfd": 2,
            "possession": {
                "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                "name": "Raiders",
                "market": "Las Vegas",
                "alias": "LV",
                "sr_id": "sr:competitor:4390"
            },
            "location": {
                "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                "name": "49ers",
                "market": "San Francisco",
                "alias": "SF",
                "sr_id": "sr:competitor:4389",
                "yardline": 24
            }
        },
        "end_situation": {
            "clock": "11:40",
            "down": 0,
            "yfd": 0,
            "possession": {
                "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                "name": "Raiders",
                "market": "Las Vegas",
                "alias": "LV",
                "sr_id": "sr:competitor:4390"
            },
            "location": {
                "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                "name": "49ers",
                "market": "San Francisco",
                "alias": "SF",
                "sr_id": "sr:competitor:4389",
                "yardline": 15
            }
        },
        "score": {
            "sequence": 2,
            "clock": "11:40",
            "points": 7,
            "home_points": 6,
            "away_points": 0,
            "points-after-play": {
                "id": "b8aa9a70-8a18-11ed-9c65-6f281153d3a0",
                "sequence": 1672607434461.0,
                "type": "extra_point"
            }
        },
        "statistics": [{
            "stat_type": "pass",
            "attempt": 1,
            "complete": 1,
            "yards": 24,
            "att_yards": 21,
            "firstdown": 1,
            "touchdown": 1,
            "inside_20": 0,
            "goaltogo": 0,
            "blitz": 0,
            "hurry": 0,
            "knockdown": 0,
            "on_target_throw": 0,
            "batted_pass": 0,
            "player": {
                "id": "582fe465-135a-4901-beef-60aebce99067",
                "name": "Jarrett Stidham",
                "jersey": "03",
                "position": "QB",
                "sr_id": "sr:player:1232264"
            },
            "team": {
                "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                "name": "Raiders",
                "market": "Las Vegas",
                "alias": "LV",
                "sr_id": "sr:competitor:4390"
            }
        }, {
            "stat_type": "receive",
            "firstdown": 1,
            "touchdown": 1,
            "target": 1,
            "reception": 1,
            "yards": 24,
            "yards_after_catch": 3,
            "inside_20": 0,
            "goaltogo": 0,
            "catchable": 0,
            "player": {
                "id": "14c97c9f-26e8-4944-9299-f90de6aeada3",
                "name": "Darren Waller",
                "jersey": "83",
                "position": "TE",
                "sr_id": "sr:player:835255"
            },
            "team": {
                "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                "name": "Raiders",
                "market": "Las Vegas",
                "alias": "LV",
                "sr_id": "sr:competitor:4390"
            }
        }, {
            "stat_type": "down_conversion",
            "down": 3,
            "attempt": 1,
            "complete": 1,
            "team": {
                "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                "name": "Raiders",
                "market": "Las Vegas",
                "alias": "LV",
                "sr_id": "sr:competitor:4390"
            }
        }, {
            "stat_type": "first_down",
            "category": "pass",
            "player": {
                "id": "14c97c9f-26e8-4944-9299-f90de6aeada3",
                "name": "Darren Waller",
                "jersey": "83",
                "position": "TE",
                "sr_id": "sr:player:835255"
            },
            "team": {
                "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                "name": "Raiders",
                "market": "Las Vegas",
                "alias": "LV",
                "sr_id": "sr:competitor:4390"
            }
        }],
        "details": [{
            "category": "pass_completion",
            "description": "J.Stidham pass deep right complete to SF 3.",
            "sequence": 0,
            "direction": "deep right",
            "yards": 24,
            "start_location": {
                "alias": "SF",
                "yardline": 24
            },
            "end_location": {
                "alias": "SF",
                "yardline": 3
            },
            "players": [{
                "id": "582fe465-135a-4901-beef-60aebce99067",
                "name": "Jarrett Stidham",
                "jersey": "03",
                "position": "QB",
                "sr_id": "sr:player:1232264",
                "role": "pass"
            }]
        }, {
            "category": "pass_reception",
            "description": "Catch made by D.Waller at SF 3. Gain of 24 yards.",
            "sequence": 1,
            "yards": 24,
            "result": "touchdown",
            "start_location": {
                "alias": "SF",
                "yardline": 3
            },
            "end_location": {
                "alias": "SF",
                "yardline": 0
            },
            "players": [{
                "id": "14c97c9f-26e8-4944-9299-f90de6aeada3",
                "name": "Darren Waller",
                "jersey": "83",
                "position": "TE",
                "sr_id": "sr:player:835255",
                "role": "catch"
            }]
        }, {
            "category": "touchdown",
            "description": "D.Waller for 24 yards, TOUCHDOWN.",
            "sequence": 2,
            "yards": 24,
            "result": "touchdown",
            "start_location": {
                "alias": "SF",
                "yardline": 0
            },
            "end_location": {
                "alias": "SF",
                "yardline": 0
            },
            "players": [{
                "id": "14c97c9f-26e8-4944-9299-f90de6aeada3",
                "name": "Darren Waller",
                "jersey": "83",
                "position": "TE",
                "sr_id": "sr:player:835255",
                "role": "catch"
            }]
        }, {
            "category": "third_down_conversion",
            "sequence": 3,
            "result": "good",
            "start_location": {
                "alias": "SF",
                "yardline": 24
            },
            "end_location": {
                "alias": "SF",
                "yardline": 24
            },
            "players": []
        }],
        "quarter": {
            "id": "47804644-a799-46ed-b958-0f8c49647fb4",
            "number": 1,
            "sequence": 1
        }
    }, {
        "type": "play",
        "id": "b8aa9a70-8a18-11ed-9c65-6f281153d3a0",
        "sequence": 1672607434461.0,
        "clock": "11:40",
        "home_points": 7,
        "away_points": 0,
        "play_type": "extra_point",
        "scoring_play": true,
        "wall_clock": "2023-01-01T21:10:32+00:00",
        "description": "D.Carlson extra point is good.",
        "scoring_description": "J.Stidham pass deep right complete to SF 3. Catch made by D.Waller at SF 3. Gain of 24 yards. D.Waller for 24 yards, TOUCHDOWN.",
        "fake_punt": false,
        "fake_field_goal": false,
        "screen_pass": false,
        "play_action": false,
        "run_pass_option": false,
        "created_at": "2023-01-01T21:10:34+00:00",
        "updated_at": "2023-01-01T21:10:35+00:00",
        "start_situation": {
            "clock": "11:40",
            "down": 0,
            "yfd": 0,
            "possession": {
                "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                "name": "Raiders",
                "market": "Las Vegas",
                "alias": "LV",
                "sr_id": "sr:competitor:4390"
            },
            "location": {
                "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                "name": "49ers",
                "market": "San Francisco",
                "alias": "SF",
                "sr_id": "sr:competitor:4389",
                "yardline": 15
            }
        },
        "end_situation": {
            "clock": "11:40",
            "down": 0,
            "yfd": 0,
            "possession": {
                "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                "name": "Raiders",
                "market": "Las Vegas",
                "alias": "LV",
                "sr_id": "sr:competitor:4390"
            },
            "location": {
                "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                "name": "Raiders",
                "market": "Las Vegas",
                "alias": "LV",
                "sr_id": "sr:competitor:4390",
                "yardline": 35
            }
        },
        "statistics": [{
            "stat_type": "extra_point",
            "attempt": 1,
            "made": 1,
            "player": {
                "id": "7bb70550-c28a-4e47-9a13-cc0c0fef8b38",
                "name": "Daniel Carlson",
                "jersey": "02",
                "position": "K",
                "sr_id": "sr:player:1226876"
            },
            "team": {
                "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                "name": "Raiders",
                "market": "Las Vegas",
                "alias": "LV",
                "sr_id": "sr:competitor:4390"
            }
        }],
        "details": [{
            "category": "extra_point_attempt",
            "description": "D.Carlson extra point is good.",
            "sequence": 0,
            "result": "good",
            "start_location": {
                "alias": "SF",
                "yardline": 15
            },
            "end_location": {
                "alias": "SF",
                "yardline": 15
            },
            "players": [{
                "id": "7bb70550-c28a-4e47-9a13-cc0c0fef8b38",
                "name": "Daniel Carlson",
                "jersey": "02",
                "position": "K",
                "sr_id": "sr:player:1226876",
                "role": "kick"
            }]
        }],
        "quarter": {
            "id": "47804644-a799-46ed-b958-0f8c49647fb4",
            "number": 1,
            "sequence": 1
        }
    }],
    "_comment": "Generation started @ 2023-01-01 21:13:05 UTC ended @ 2023-01-01 21:13:05 UTC"
}
//game that just started, with one score on the board
//running this would test case 2 of our chart updating

export default hardcoded_game_in_progress_early