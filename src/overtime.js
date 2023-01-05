const overtime = 
{
    "id": "397e9db0-eb0d-44ec-a579-848b32b116f2",
    "status": "complete",
    "scheduled": "2023-01-01T21:05:00+00:00",
    "attendance": 62367,
    "entry_mode": "LDE",
    "clock": "00:00",
    "quarter": 5,
    "sr_id": "sr:match:33623649",
    "game_type": "regular",
    "duration": "3:24",
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
    }, {
        "home": {
            "outcome": "lost",
            "decision": "kick",
            "direction": "north"
        },
        "away": {
            "outcome": "won",
            "decision": "receive",
            "direction": "north"
        },
        "quarter": 3
    }, {
        "home": {
            "outcome": "won",
            "decision": "receive",
            "direction": "north"
        },
        "away": {
            "outcome": "lost",
            "decision": "kick",
            "direction": "north"
        },
        "quarter": 5
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
            "remaining_timeouts": 2,
            "points": 34,
            "used_challenges": 0,
            "remaining_challenges": 2,
            "record": {
                "wins": 6,
                "losses": 10,
                "ties": 0
            }
        },
        "away": {
            "id": "f0e724b0-4cbf-495a-be47-013907608da9",
            "name": "49ers",
            "market": "San Francisco",
            "alias": "SF",
            "sr_id": "sr:competitor:4389",
            "used_timeouts": 0,
            "remaining_timeouts": 2,
            "points": 37,
            "used_challenges": 0,
            "remaining_challenges": 2,
            "record": {
                "wins": 12,
                "losses": 4,
                "ties": 0
            }
        }
    },
    "situation": {
        "clock": "6:53",
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
    "last_event": {
        "type": "event",
        "id": "79e55ac0-8a34-11ed-9c65-6f281153d3a0",
        "sequence": 1672619360150.0,
        "clock": "00:00",
        "event_type": "game_over",
        "description": "End Game",
        "created_at": "2023-01-02T00:29:20+00:00",
        "updated_at": "2023-01-02T00:31:23+00:00",
        "wall_clock": "2023-01-02T00:29:17+00:00"
    },
    "scoring": [{
        "period_type": "quarter",
        "id": "47804644-a799-46ed-b958-0f8c49647fb4",
        "number": 1,
        "sequence": 1,
        "home_points": 10,
        "away_points": 7
    }, {
        "period_type": "quarter",
        "id": "6c9fadba-e23e-4987-94d2-9b71423d3d4d",
        "number": 2,
        "sequence": 2,
        "home_points": 7,
        "away_points": 7
    }, {
        "period_type": "quarter",
        "id": "6d257af9-0e2a-4233-8f0e-bb961745455d",
        "number": 3,
        "sequence": 3,
        "home_points": 7,
        "away_points": 7
    }, {
        "period_type": "quarter",
        "id": "c45b69d8-4bb6-468f-a7b9-b6dfc688ba74",
        "number": 4,
        "sequence": 4,
        "home_points": 10,
        "away_points": 13
    }, {
        "period_type": "overtime",
        "id": "b993f8b2-ebce-4a0d-ae01-531481c49a67",
        "number": 1,
        "sequence": 5,
        "home_points": 0,
        "away_points": 3
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
            "updated_at": "2023-01-02T00:42:22+00:00",
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
                    "yardline": 25
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
            "updated_at": "2023-01-02T00:42:25+00:00",
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
            "description": "B.Bolden rushed up the middle to SF 29 for 3 yards. Tackled by T.Hufanga; D.Lenoir at SF 29.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T21:08:31+00:00",
            "updated_at": "2023-01-01T21:22:07+00:00",
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
                    "id": "d24bbe70-baba-4337-822e-c166a156f92e",
                    "name": "Deommodore Lenoir",
                    "jersey": "38",
                    "position": "DB",
                    "sr_id": "sr:player:2198824"
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
                    "id": "a1a2f797-77ac-4f13-8456-50a10a7fd61a",
                    "name": "Talanoa Hufanga",
                    "jersey": "29",
                    "position": "SAF",
                    "sr_id": "sr:player:1437360"
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
                "description": "Tackled by T.Hufanga; D.Lenoir at SF 29.",
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
                    "id": "a1a2f797-77ac-4f13-8456-50a10a7fd61a",
                    "name": "Talanoa Hufanga",
                    "jersey": "29",
                    "position": "SAF",
                    "sr_id": "sr:player:1437360",
                    "role": "ast_tackle"
                }, {
                    "id": "d24bbe70-baba-4337-822e-c166a156f92e",
                    "name": "Deommodore Lenoir",
                    "jersey": "38",
                    "position": "DB",
                    "sr_id": "sr:player:2198824",
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
    }, {
        "id": "145401bd-7732-4890-867d-d5ba0f2f9fbf",
        "sequence": 2,
        "start_reason": "Kickoff",
        "end_reason": "Touchdown",
        "play_count": 8,
        "duration": "4:34",
        "first_downs": 4,
        "gain": 67,
        "penalty_yards": 0,
        "inside_20": true,
        "scoring_drive": true,
        "quarter": {
            "id": "47804644-a799-46ed-b958-0f8c49647fb4",
            "number": 1,
            "sequence": 1
        },
        "team": {
            "id": "f0e724b0-4cbf-495a-be47-013907608da9",
            "name": "49ers",
            "market": "San Francisco",
            "alias": "SF",
            "sr_id": "sr:competitor:4389"
        },
        "plays": [{
            "type": "play",
            "id": "1c0c5860-8a19-11ed-9c65-6f281153d3a0",
            "sequence": 1672607645320.0,
            "clock": "11:40",
            "home_points": 7,
            "away_points": 0,
            "play_type": "kickoff",
            "wall_clock": "2023-01-01T21:13:52+00:00",
            "description": "D.Carlson kicks 58 yards from LV 35 to the SF 7. R.McCloud returns the kickoff. Tackled by I.Pola-Mao at SF 33.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T21:14:05+00:00",
            "updated_at": "2023-01-01T21:14:58+00:00",
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
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 35
                }
            },
            "end_situation": {
                "clock": "11:34",
                "down": 1,
                "yfd": 10,
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
                    "yardline": 33
                }
            },
            "statistics": [{
                "stat_type": "kick",
                "attempt": 1,
                "yards": 58,
                "net_yards": 32,
                "onside_attempt": 0,
                "onside_success": 0,
                "squib_kick": 0,
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
            }, {
                "stat_type": "return",
                "return": 1,
                "yards": 26,
                "category": "kick_return",
                "player": {
                    "id": "f7ff7599-a175-4a0c-b887-3ae9e596fc64",
                    "name": "Ray-Ray McCloud III",
                    "jersey": "03",
                    "position": "WR",
                    "sr_id": "sr:player:1218938"
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
                "category": "special_team",
                "def_target": 0,
                "def_comp": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "batted_pass": 0,
                "player": {
                    "id": "03dc3660-d3a9-11ec-96a0-c3471a31202c",
                    "name": "Isaiah Pola-Mao",
                    "jersey": "20",
                    "position": "SAF",
                    "sr_id": "sr:player:1262718"
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
                "category": "kick_off",
                "description": "D.Carlson kicks 58 yards from LV 35 to the SF 7.",
                "sequence": 0,
                "yards": 58,
                "result": "returned",
                "start_location": {
                    "alias": "LV",
                    "yardline": 35
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 7
                },
                "players": [{
                    "id": "7bb70550-c28a-4e47-9a13-cc0c0fef8b38",
                    "name": "Daniel Carlson",
                    "jersey": "02",
                    "position": "K",
                    "sr_id": "sr:player:1226876",
                    "role": "kick"
                }]
            }, {
                "category": "kick_off_return",
                "description": "R.McCloud returns the kickoff.",
                "sequence": 1,
                "yards": 26,
                "result": "tackled",
                "start_location": {
                    "alias": "SF",
                    "yardline": 7
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 33
                },
                "players": [{
                    "id": "7bb70550-c28a-4e47-9a13-cc0c0fef8b38",
                    "name": "Daniel Carlson",
                    "jersey": "02",
                    "position": "K",
                    "sr_id": "sr:player:1226876",
                    "role": "kick"
                }, {
                    "id": "f7ff7599-a175-4a0c-b887-3ae9e596fc64",
                    "name": "Ray-Ray McCloud III",
                    "jersey": "03",
                    "position": "WR",
                    "sr_id": "sr:player:1218938",
                    "role": "return"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by I.Pola-Mao at SF 33.",
                "sequence": 2,
                "start_location": {
                    "alias": "SF",
                    "yardline": 33
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 33
                },
                "players": [{
                    "id": "03dc3660-d3a9-11ec-96a0-c3471a31202c",
                    "name": "Isaiah Pola-Mao",
                    "jersey": "20",
                    "position": "SAF",
                    "sr_id": "sr:player:1262718",
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
            "id": "4aa1da10-8a19-11ed-9c65-6f281153d3a0",
            "sequence": 1672607691644.0,
            "clock": "11:34",
            "home_points": 7,
            "away_points": 0,
            "play_type": "rush",
            "wall_clock": "2023-01-01T21:14:44+00:00",
            "description": "C.McCaffrey rushed right tackle to SF 44 for 11 yards. Tackled by N.Hobbs at SF 44.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T21:14:51+00:00",
            "updated_at": "2023-01-01T21:15:48+00:00",
            "start_situation": {
                "clock": "11:34",
                "down": 1,
                "yfd": 10,
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
                    "yardline": 33
                }
            },
            "end_situation": {
                "clock": "10:57",
                "down": 1,
                "yfd": 10,
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
                    "yardline": 44
                }
            },
            "statistics": [{
                "stat_type": "rush",
                "attempt": 1,
                "yards": 11,
                "firstdown": 1,
                "inside_20": 0,
                "goaltogo": 0,
                "broken_tackles": 0,
                "kneel_down": 0,
                "scramble": 0,
                "player": {
                    "id": "f96db0af-5e25-42d1-a07a-49b4e065b364",
                    "name": "Christian McCaffrey",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1129507"
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
                    "id": "b34aa9fb-3f93-481b-8f68-7330c39e6e20",
                    "name": "Nate Hobbs",
                    "jersey": "39",
                    "position": "CB",
                    "sr_id": "sr:player:2197902"
                },
                "team": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390"
                }
            }, {
                "stat_type": "first_down",
                "category": "rush",
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
                "description": "C.McCaffrey rushed right tackle to SF 44 for 11 yards.",
                "sequence": 0,
                "direction": "right tackle",
                "yards": 11,
                "result": "tackled",
                "start_location": {
                    "alias": "SF",
                    "yardline": 33
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 44
                },
                "players": [{
                    "id": "f96db0af-5e25-42d1-a07a-49b4e065b364",
                    "name": "Christian McCaffrey",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1129507",
                    "role": "rush"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by N.Hobbs at SF 44.",
                "sequence": 1,
                "start_location": {
                    "alias": "SF",
                    "yardline": 44
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 44
                },
                "players": [{
                    "id": "b34aa9fb-3f93-481b-8f68-7330c39e6e20",
                    "name": "Nate Hobbs",
                    "jersey": "39",
                    "position": "CB",
                    "sr_id": "sr:player:2197902",
                    "role": "tackle"
                }]
            }, {
                "category": "first_down",
                "sequence": 2,
                "result": "rush",
                "start_location": {
                    "alias": "SF",
                    "yardline": 44
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 44
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
            "id": "626d9e40-8a19-11ed-9c65-6f281153d3a0",
            "sequence": 1672607728660.0,
            "clock": "10:57",
            "home_points": 7,
            "away_points": 0,
            "play_type": "rush",
            "wall_clock": "2023-01-01T21:15:21+00:00",
            "description": "C.McCaffrey rushed left tackle to SF 49 for 5 yards. Tackled by H.Langi at SF 49.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T21:15:28+00:00",
            "updated_at": "2023-01-01T21:16:31+00:00",
            "start_situation": {
                "clock": "10:57",
                "down": 1,
                "yfd": 10,
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
                    "yardline": 44
                }
            },
            "end_situation": {
                "clock": "10:18",
                "down": 2,
                "yfd": 5,
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
                    "yardline": 49
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
                "scramble": 0,
                "player": {
                    "id": "f96db0af-5e25-42d1-a07a-49b4e065b364",
                    "name": "Christian McCaffrey",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1129507"
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
                    "id": "d3e192b5-4523-4d65-94e0-a1fb164b6542",
                    "name": "Harvey Langi",
                    "jersey": "56",
                    "position": "LB",
                    "sr_id": "sr:player:1130349"
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
                "category": "rush",
                "description": "C.McCaffrey rushed left tackle to SF 49 for 5 yards.",
                "sequence": 0,
                "direction": "left tackle",
                "yards": 5,
                "result": "tackled",
                "start_location": {
                    "alias": "SF",
                    "yardline": 44
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 49
                },
                "players": [{
                    "id": "f96db0af-5e25-42d1-a07a-49b4e065b364",
                    "name": "Christian McCaffrey",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1129507",
                    "role": "rush"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by H.Langi at SF 49.",
                "sequence": 1,
                "start_location": {
                    "alias": "SF",
                    "yardline": 49
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 49
                },
                "players": [{
                    "id": "d3e192b5-4523-4d65-94e0-a1fb164b6542",
                    "name": "Harvey Langi",
                    "jersey": "56",
                    "position": "LB",
                    "sr_id": "sr:player:1130349",
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
            "id": "6bce4890-8a19-11ed-9c65-6f281153d3a0",
            "sequence": 1672607774324.0,
            "clock": "10:18",
            "home_points": 7,
            "away_points": 0,
            "play_type": "pass",
            "wall_clock": "2023-01-01T21:16:03+00:00",
            "description": "B.Purdy pass short right complete to LV 45. Catch made by G.Kittle at LV 45. Gain of 6 yards. Tackled by H.Langi at LV 45.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T21:16:14+00:00",
            "updated_at": "2023-01-01T21:17:22+00:00",
            "start_situation": {
                "clock": "10:18",
                "down": 2,
                "yfd": 5,
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
                    "yardline": 49
                }
            },
            "end_situation": {
                "clock": "9:31",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 45
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 1,
                "yards": 6,
                "att_yards": 6,
                "firstdown": 1,
                "inside_20": 0,
                "goaltogo": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "on_target_throw": 0,
                "batted_pass": 0,
                "player": {
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461"
                },
                "team": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }, {
                "stat_type": "receive",
                "firstdown": 1,
                "target": 1,
                "reception": 1,
                "yards": 6,
                "yards_after_catch": 0,
                "inside_20": 0,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "2ada91b0-036e-454f-83c3-6d939ff584a9",
                    "name": "George Kittle",
                    "jersey": "85",
                    "position": "TE",
                    "sr_id": "sr:player:1130029"
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
                    "id": "d3e192b5-4523-4d65-94e0-a1fb164b6542",
                    "name": "Harvey Langi",
                    "jersey": "56",
                    "position": "LB",
                    "sr_id": "sr:player:1130349"
                },
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
                "team": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }],
            "details": [{
                "category": "pass_completion",
                "description": "B.Purdy pass short right complete to LV 45.",
                "sequence": 0,
                "direction": "short right",
                "yards": 6,
                "start_location": {
                    "alias": "SF",
                    "yardline": 49
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 45
                },
                "players": [{
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461",
                    "role": "pass"
                }]
            }, {
                "category": "pass_reception",
                "description": "Catch made by G.Kittle at LV 45. Gain of 6 yards.",
                "sequence": 1,
                "yards": 6,
                "result": "tackled",
                "start_location": {
                    "alias": "LV",
                    "yardline": 45
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 45
                },
                "players": [{
                    "id": "2ada91b0-036e-454f-83c3-6d939ff584a9",
                    "name": "George Kittle",
                    "jersey": "85",
                    "position": "TE",
                    "sr_id": "sr:player:1130029",
                    "role": "catch"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by H.Langi at LV 45.",
                "sequence": 2,
                "start_location": {
                    "alias": "LV",
                    "yardline": 45
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 45
                },
                "players": [{
                    "id": "d3e192b5-4523-4d65-94e0-a1fb164b6542",
                    "name": "Harvey Langi",
                    "jersey": "56",
                    "position": "LB",
                    "sr_id": "sr:player:1130349",
                    "role": "tackle"
                }]
            }, {
                "category": "first_down",
                "sequence": 3,
                "result": "pass",
                "start_location": {
                    "alias": "LV",
                    "yardline": 45
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 45
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
            "id": "875c6bf0-8a19-11ed-9c65-6f281153d3a0",
            "sequence": 1672607812888.0,
            "clock": "9:31",
            "home_points": 7,
            "away_points": 0,
            "play_type": "pass",
            "wall_clock": "2023-01-01T21:16:47+00:00",
            "description": "B.Purdy steps back to pass. B.Purdy pass incomplete short middle intended for B.Aiyuk.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T21:16:52+00:00",
            "updated_at": "2023-01-01T21:18:05+00:00",
            "start_situation": {
                "clock": "9:31",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 45
                }
            },
            "end_situation": {
                "clock": "9:27",
                "down": 2,
                "yfd": 10,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 45
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 0,
                "att_yards": 14,
                "firstdown": 0,
                "inside_20": 0,
                "goaltogo": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "on_target_throw": 0,
                "batted_pass": 0,
                "player": {
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461"
                },
                "team": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }, {
                "stat_type": "receive",
                "firstdown": 0,
                "target": 1,
                "inside_20": 0,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "c90471cc-fa60-4416-9388-5aebb5d877eb",
                    "name": "Brandon Aiyuk",
                    "jersey": "11",
                    "position": "WR",
                    "sr_id": "sr:player:2040579"
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
                "category": "pass",
                "description": "B.Purdy steps back to pass.",
                "sequence": 0,
                "start_location": {
                    "alias": "LV",
                    "yardline": 45
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 45
                },
                "players": [{
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461",
                    "role": "pass"
                }]
            }, {
                "category": "pass_incompletion",
                "description": "B.Purdy pass incomplete short middle intended for B.Aiyuk.",
                "sequence": 1,
                "direction": "short middle",
                "start_location": {
                    "alias": "LV",
                    "yardline": 45
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 31
                },
                "players": [{
                    "id": "c90471cc-fa60-4416-9388-5aebb5d877eb",
                    "name": "Brandon Aiyuk",
                    "jersey": "11",
                    "position": "WR",
                    "sr_id": "sr:player:2040579",
                    "role": "receive"
                }, {
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461",
                    "role": "pass"
                }]
            }],
            "quarter": {
                "id": "47804644-a799-46ed-b958-0f8c49647fb4",
                "number": 1,
                "sequence": 1
            }
        }, {
            "type": "play",
            "id": "9db936d0-8a19-11ed-9c65-6f281153d3a0",
            "sequence": 1672607869199.0,
            "clock": "9:27",
            "home_points": 7,
            "away_points": 0,
            "play_type": "pass",
            "wall_clock": "2023-01-01T21:17:30+00:00",
            "description": "B.Purdy pass short middle complete to LV 43. Catch made by C.McCaffrey at LV 43. Gain of 7 yards. Tackled by N.Hobbs at LV 38.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T21:17:49+00:00",
            "updated_at": "2023-01-01T21:19:25+00:00",
            "start_situation": {
                "clock": "9:27",
                "down": 2,
                "yfd": 10,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 45
                }
            },
            "end_situation": {
                "clock": "8:40",
                "down": 3,
                "yfd": 3,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 38
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 1,
                "yards": 7,
                "att_yards": 2,
                "firstdown": 0,
                "inside_20": 0,
                "goaltogo": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "on_target_throw": 0,
                "batted_pass": 0,
                "player": {
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461"
                },
                "team": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }, {
                "stat_type": "receive",
                "firstdown": 0,
                "target": 1,
                "reception": 1,
                "yards": 7,
                "yards_after_catch": 5,
                "inside_20": 0,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "f96db0af-5e25-42d1-a07a-49b4e065b364",
                    "name": "Christian McCaffrey",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1129507"
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
                    "id": "b34aa9fb-3f93-481b-8f68-7330c39e6e20",
                    "name": "Nate Hobbs",
                    "jersey": "39",
                    "position": "CB",
                    "sr_id": "sr:player:2197902"
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
                "description": "B.Purdy pass short middle complete to LV 43.",
                "sequence": 0,
                "direction": "short middle",
                "yards": 7,
                "start_location": {
                    "alias": "LV",
                    "yardline": 45
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 43
                },
                "players": [{
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461",
                    "role": "pass"
                }]
            }, {
                "category": "pass_reception",
                "description": "Catch made by C.McCaffrey at LV 43. Gain of 7 yards.",
                "sequence": 1,
                "yards": 7,
                "result": "tackled",
                "start_location": {
                    "alias": "LV",
                    "yardline": 43
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 38
                },
                "players": [{
                    "id": "f96db0af-5e25-42d1-a07a-49b4e065b364",
                    "name": "Christian McCaffrey",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1129507",
                    "role": "catch"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by N.Hobbs at LV 38.",
                "sequence": 2,
                "start_location": {
                    "alias": "LV",
                    "yardline": 38
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 38
                },
                "players": [{
                    "id": "b34aa9fb-3f93-481b-8f68-7330c39e6e20",
                    "name": "Nate Hobbs",
                    "jersey": "39",
                    "position": "CB",
                    "sr_id": "sr:player:2197902",
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
            "id": "bf8cbac0-8a19-11ed-9c65-6f281153d3a0",
            "sequence": 1672607906394.0,
            "clock": "8:40",
            "home_points": 7,
            "away_points": 0,
            "play_type": "rush",
            "wall_clock": "2023-01-01T21:18:16+00:00",
            "description": "C.McCaffrey rushed right guard to LV 1 for 37 yards. Tackled by I.Pola-Mao at LV 1.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T21:18:26+00:00",
            "updated_at": "2023-01-01T21:19:51+00:00",
            "start_situation": {
                "clock": "8:40",
                "down": 3,
                "yfd": 3,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 38
                }
            },
            "end_situation": {
                "clock": "7:52",
                "down": 1,
                "yfd": 1,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 1
                }
            },
            "statistics": [{
                "stat_type": "rush",
                "attempt": 1,
                "yards": 37,
                "firstdown": 1,
                "inside_20": 0,
                "goaltogo": 0,
                "broken_tackles": 0,
                "kneel_down": 0,
                "scramble": 0,
                "player": {
                    "id": "f96db0af-5e25-42d1-a07a-49b4e065b364",
                    "name": "Christian McCaffrey",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1129507"
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
                    "id": "03dc3660-d3a9-11ec-96a0-c3471a31202c",
                    "name": "Isaiah Pola-Mao",
                    "jersey": "20",
                    "position": "SAF",
                    "sr_id": "sr:player:1262718"
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
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }, {
                "stat_type": "first_down",
                "category": "rush",
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
                "description": "C.McCaffrey rushed right guard to LV 1 for 37 yards.",
                "sequence": 0,
                "direction": "right guard",
                "yards": 37,
                "result": "tackled",
                "start_location": {
                    "alias": "LV",
                    "yardline": 38
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 1
                },
                "players": [{
                    "id": "f96db0af-5e25-42d1-a07a-49b4e065b364",
                    "name": "Christian McCaffrey",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1129507",
                    "role": "rush"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by I.Pola-Mao at LV 1.",
                "sequence": 1,
                "start_location": {
                    "alias": "LV",
                    "yardline": 1
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 1
                },
                "players": [{
                    "id": "03dc3660-d3a9-11ec-96a0-c3471a31202c",
                    "name": "Isaiah Pola-Mao",
                    "jersey": "20",
                    "position": "SAF",
                    "sr_id": "sr:player:1262718",
                    "role": "tackle"
                }]
            }, {
                "category": "first_down",
                "sequence": 2,
                "result": "rush",
                "start_location": {
                    "alias": "LV",
                    "yardline": 1
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 1
                },
                "players": []
            }, {
                "category": "third_down_conversion",
                "sequence": 3,
                "result": "good",
                "start_location": {
                    "alias": "LV",
                    "yardline": 1
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 1
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
            "id": "e8ac60e0-8a19-11ed-9c65-6f281153d3a0",
            "sequence": 1672607954417.0,
            "clock": "7:52",
            "home_points": 7,
            "away_points": 0,
            "play_type": "rush",
            "goaltogo": true,
            "wall_clock": "2023-01-01T21:19:07+00:00",
            "description": "J.Mason rushed left guard to LV 2 for -1 yards. Tackled by M.Crosby at LV 2.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T21:19:14+00:00",
            "updated_at": "2023-01-01T21:23:40+00:00",
            "start_situation": {
                "clock": "7:52",
                "down": 1,
                "yfd": 1,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 1
                }
            },
            "end_situation": {
                "clock": "7:09",
                "down": 2,
                "yfd": 1,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 1
                }
            },
            "statistics": [{
                "stat_type": "rush",
                "attempt": 1,
                "yards": -1,
                "firstdown": 0,
                "inside_20": 1,
                "goaltogo": 1,
                "tlost": 1,
                "tlost_yards": -1,
                "broken_tackles": 0,
                "kneel_down": 0,
                "scramble": 0,
                "player": {
                    "id": "af9f7390-ca80-11ec-97ae-e1573849d1a6",
                    "name": "Jordan Mason",
                    "jersey": "24",
                    "position": "RB",
                    "sr_id": "sr:player:1481066"
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
                "tlost": 1,
                "tlost_yards": 1,
                "category": "defense",
                "def_target": 0,
                "def_comp": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "batted_pass": 0,
                "player": {
                    "id": "3ae55cda-ad32-46c5-bde7-470755f37f3a",
                    "name": "Maxx Crosby",
                    "jersey": "98",
                    "position": "DE",
                    "sr_id": "sr:player:1189114"
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
                "category": "rush",
                "description": "J.Mason rushed left guard to LV 2 for -1 yards.",
                "sequence": 0,
                "direction": "left guard",
                "yards": -1,
                "result": "tackled",
                "start_location": {
                    "alias": "LV",
                    "yardline": 1
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 2
                },
                "players": [{
                    "id": "af9f7390-ca80-11ec-97ae-e1573849d1a6",
                    "name": "Jordan Mason",
                    "jersey": "24",
                    "position": "RB",
                    "sr_id": "sr:player:1481066",
                    "role": "rush"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by M.Crosby at LV 2.",
                "sequence": 1,
                "start_location": {
                    "alias": "LV",
                    "yardline": 2
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 2
                },
                "players": [{
                    "id": "3ae55cda-ad32-46c5-bde7-470755f37f3a",
                    "name": "Maxx Crosby",
                    "jersey": "98",
                    "position": "DE",
                    "sr_id": "sr:player:1189114",
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
            "id": "f21aede0-8a19-11ed-9c65-6f281153d3a0",
            "sequence": 1672608020314.0,
            "clock": "7:09",
            "home_points": 7,
            "away_points": 6,
            "play_type": "pass",
            "scoring_play": true,
            "goaltogo": true,
            "wall_clock": "2023-01-01T21:19:52+00:00",
            "description": "B.Purdy pass complete to LV End Zone. Catch made by B.Aiyuk at LV End Zone. Gain of 2 yards. B.Aiyuk for 2 yards, TOUCHDOWN.",
            "scoring_description": "B.Purdy pass complete to LV End Zone. Catch made by B.Aiyuk at LV End Zone. Gain of 2 yards. B.Aiyuk for 2 yards, TOUCHDOWN.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T21:20:20+00:00",
            "updated_at": "2023-01-01T21:23:40+00:00",
            "start_situation": {
                "clock": "7:09",
                "down": 2,
                "yfd": 2,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 2
                }
            },
            "end_situation": {
                "clock": "7:09",
                "down": 2,
                "yfd": 2,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 2
                }
            },
            "score": {
                "sequence": 4,
                "clock": "7:09",
                "points": 7,
                "home_points": 7,
                "away_points": 6,
                "points-after-play": {
                    "id": "197871a0-8a1a-11ed-9c65-6f281153d3a0",
                    "sequence": 1672608025269.0,
                    "type": "extra_point"
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 1,
                "yards": 2,
                "att_yards": 2,
                "firstdown": 1,
                "touchdown": 1,
                "inside_20": 1,
                "goaltogo": 1,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "on_target_throw": 0,
                "batted_pass": 0,
                "player": {
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461"
                },
                "team": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }, {
                "stat_type": "receive",
                "firstdown": 1,
                "touchdown": 1,
                "target": 1,
                "reception": 1,
                "yards": 2,
                "yards_after_catch": 0,
                "inside_20": 1,
                "goaltogo": 1,
                "catchable": 0,
                "player": {
                    "id": "c90471cc-fa60-4416-9388-5aebb5d877eb",
                    "name": "Brandon Aiyuk",
                    "jersey": "11",
                    "position": "WR",
                    "sr_id": "sr:player:2040579"
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
                "player": {
                    "id": "c90471cc-fa60-4416-9388-5aebb5d877eb",
                    "name": "Brandon Aiyuk",
                    "jersey": "11",
                    "position": "WR",
                    "sr_id": "sr:player:2040579"
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
                "category": "pass_completion",
                "description": "B.Purdy pass complete to LV End Zone.",
                "sequence": 0,
                "yards": 2,
                "start_location": {
                    "alias": "LV",
                    "yardline": 2
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 0
                },
                "players": [{
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461",
                    "role": "pass"
                }]
            }, {
                "category": "pass_reception",
                "description": "Catch made by B.Aiyuk at LV End Zone. Gain of 2 yards.",
                "sequence": 1,
                "yards": 2,
                "result": "touchdown",
                "start_location": {
                    "alias": "LV",
                    "yardline": 0
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 0
                },
                "players": [{
                    "id": "c90471cc-fa60-4416-9388-5aebb5d877eb",
                    "name": "Brandon Aiyuk",
                    "jersey": "11",
                    "position": "WR",
                    "sr_id": "sr:player:2040579",
                    "role": "catch"
                }]
            }, {
                "category": "touchdown",
                "description": "B.Aiyuk for 2 yards, TOUCHDOWN.",
                "sequence": 2,
                "yards": 2,
                "result": "touchdown",
                "start_location": {
                    "alias": "LV",
                    "yardline": 0
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 0
                },
                "players": [{
                    "id": "c90471cc-fa60-4416-9388-5aebb5d877eb",
                    "name": "Brandon Aiyuk",
                    "jersey": "11",
                    "position": "WR",
                    "sr_id": "sr:player:2040579",
                    "role": "catch"
                }]
            }],
            "quarter": {
                "id": "47804644-a799-46ed-b958-0f8c49647fb4",
                "number": 1,
                "sequence": 1
            }
        }, {
            "type": "play",
            "id": "197871a0-8a1a-11ed-9c65-6f281153d3a0",
            "sequence": 1672608025269.0,
            "clock": "7:06",
            "home_points": 7,
            "away_points": 7,
            "play_type": "extra_point",
            "scoring_play": true,
            "wall_clock": "2023-01-01T21:20:24+00:00",
            "description": "R.Gould extra point is good.",
            "scoring_description": "B.Purdy pass complete to LV End Zone. Catch made by B.Aiyuk at LV End Zone. Gain of 2 yards. B.Aiyuk for 2 yards, TOUCHDOWN.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T21:20:25+00:00",
            "updated_at": "2023-01-01T21:23:40+00:00",
            "start_situation": {
                "clock": "7:06",
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
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 15
                }
            },
            "end_situation": {
                "clock": "7:06",
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
            "statistics": [{
                "stat_type": "extra_point",
                "attempt": 1,
                "made": 1,
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
            }],
            "details": [{
                "category": "extra_point_attempt",
                "description": "R.Gould extra point is good.",
                "sequence": 0,
                "result": "good",
                "start_location": {
                    "alias": "LV",
                    "yardline": 15
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 15
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
        }]
    }, {
        "id": "23cb09a7-7168-41ac-8cb3-0c098e4b73d3",
        "sequence": 3,
        "start_reason": "Kickoff",
        "end_reason": "Field Goal",
        "play_count": 10,
        "duration": "5:21",
        "first_downs": 5,
        "gain": 64,
        "penalty_yards": 10,
        "inside_20": true,
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
            "id": "5887c8f0-8a1a-11ed-9c65-6f281153d3a0",
            "sequence": 1672608218802.0,
            "clock": "7:06",
            "home_points": 7,
            "away_points": 7,
            "play_type": "kickoff",
            "wall_clock": "2023-01-01T21:23:31+00:00",
            "description": "R.Gould kicks 65 yards from SF 35 to the LV End Zone. Touchback.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T21:23:38+00:00",
            "updated_at": "2023-01-01T21:23:39+00:00",
            "start_situation": {
                "clock": "7:06",
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
                "clock": "7:06",
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
            "id": "8fb6fb70-8a1a-11ed-9c65-6f281153d3a0",
            "sequence": 1672608264236.0,
            "clock": "7:06",
            "home_points": 7,
            "away_points": 7,
            "play_type": "rush",
            "wall_clock": "2023-01-01T21:24:12+00:00",
            "description": "J.Jacobs rushed left guard to LV 34 for 9 yards. Tackled by A.Al-Shaair at LV 34.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T21:24:24+00:00",
            "updated_at": "2023-01-01T21:25:27+00:00",
            "start_situation": {
                "clock": "7:06",
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
                "clock": "6:31",
                "down": 2,
                "yfd": 1,
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
                    "yardline": 34
                }
            },
            "statistics": [{
                "stat_type": "rush",
                "attempt": 1,
                "yards": 9,
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
                "tackle": 1,
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
                "description": "J.Jacobs rushed left guard to LV 34 for 9 yards.",
                "sequence": 0,
                "direction": "left guard",
                "yards": 9,
                "result": "tackled",
                "start_location": {
                    "alias": "LV",
                    "yardline": 25
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 34
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
                "description": "Tackled by A.Al-Shaair at LV 34.",
                "sequence": 1,
                "start_location": {
                    "alias": "LV",
                    "yardline": 34
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 34
                },
                "players": [{
                    "id": "e9348fc5-273d-4ac3-9760-462f37c025dc",
                    "name": "Azeez Al-Shaair",
                    "jersey": "51",
                    "position": "LB",
                    "sr_id": "sr:player:1204432",
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
            "id": "aafcf240-8a1a-11ed-9c65-6f281153d3a0",
            "sequence": 1672608294523.0,
            "clock": "6:31",
            "home_points": 7,
            "away_points": 7,
            "play_type": "rush",
            "wall_clock": "2023-01-01T21:24:49+00:00",
            "description": "J.Stidham rushed up the middle to LV 36 for 2 yards. Tackled by A.Al-Shaair at LV 36.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T21:24:54+00:00",
            "updated_at": "2023-01-01T21:25:58+00:00",
            "start_situation": {
                "clock": "6:31",
                "down": 2,
                "yfd": 1,
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
                    "yardline": 34
                }
            },
            "end_situation": {
                "clock": "5:57",
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
                    "yardline": 36
                }
            },
            "statistics": [{
                "stat_type": "rush",
                "attempt": 1,
                "yards": 2,
                "firstdown": 1,
                "inside_20": 0,
                "goaltogo": 0,
                "broken_tackles": 0,
                "kneel_down": 0,
                "scramble": 0,
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
                "stat_type": "first_down",
                "category": "rush",
                "team": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390"
                }
            }],
            "details": [{
                "category": "rush",
                "description": "J.Stidham rushed up the middle to LV 36 for 2 yards.",
                "sequence": 0,
                "direction": "up the middle",
                "yards": 2,
                "result": "tackled",
                "start_location": {
                    "alias": "LV",
                    "yardline": 34
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 36
                },
                "players": [{
                    "id": "582fe465-135a-4901-beef-60aebce99067",
                    "name": "Jarrett Stidham",
                    "jersey": "03",
                    "position": "QB",
                    "sr_id": "sr:player:1232264",
                    "role": "rush"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by A.Al-Shaair at LV 36.",
                "sequence": 1,
                "start_location": {
                    "alias": "LV",
                    "yardline": 36
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 36
                },
                "players": [{
                    "id": "e9348fc5-273d-4ac3-9760-462f37c025dc",
                    "name": "Azeez Al-Shaair",
                    "jersey": "51",
                    "position": "LB",
                    "sr_id": "sr:player:1204432",
                    "role": "tackle"
                }]
            }, {
                "category": "first_down",
                "sequence": 2,
                "result": "rush",
                "start_location": {
                    "alias": "LV",
                    "yardline": 36
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 36
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
            "id": "bcd76950-8a1a-11ed-9c65-6f281153d3a0",
            "sequence": 1672608334429.0,
            "clock": "5:57",
            "home_points": 7,
            "away_points": 7,
            "play_type": "pass",
            "wall_clock": "2023-01-01T21:25:23+00:00",
            "description": "J.Stidham pass deep left complete to SF 45. Catch made by D.Adams at SF 45. Gain of 27 yards. Pushed out of bounds by D.Lenoir at SF 37.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T21:25:34+00:00",
            "updated_at": "2023-01-01T21:26:59+00:00",
            "start_situation": {
                "clock": "5:57",
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
                    "yardline": 36
                }
            },
            "end_situation": {
                "clock": "5:22",
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
                    "yardline": 37
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 1,
                "yards": 27,
                "att_yards": 19,
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
                "yards": 27,
                "yards_after_catch": 8,
                "inside_20": 0,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "e7d6ae25-bf15-4660-8b37-c37716551de3",
                    "name": "Davante Adams",
                    "jersey": "17",
                    "position": "WR",
                    "sr_id": "sr:player:831457"
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
                    "id": "d24bbe70-baba-4337-822e-c166a156f92e",
                    "name": "Deommodore Lenoir",
                    "jersey": "38",
                    "position": "DB",
                    "sr_id": "sr:player:2198824"
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
                "description": "J.Stidham pass deep left complete to SF 45.",
                "sequence": 0,
                "direction": "deep left",
                "yards": 27,
                "start_location": {
                    "alias": "LV",
                    "yardline": 36
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 45
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
                "description": "Catch made by D.Adams at SF 45. Gain of 27 yards.",
                "sequence": 1,
                "yards": 27,
                "result": "pushed out of bounds",
                "start_location": {
                    "alias": "SF",
                    "yardline": 45
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 37
                },
                "players": [{
                    "id": "e7d6ae25-bf15-4660-8b37-c37716551de3",
                    "name": "Davante Adams",
                    "jersey": "17",
                    "position": "WR",
                    "sr_id": "sr:player:831457",
                    "role": "catch"
                }]
            }, {
                "category": "pushed_out_of_bounds",
                "description": "Pushed out of bounds by D.Lenoir at SF 37.",
                "sequence": 2,
                "start_location": {
                    "alias": "SF",
                    "yardline": 37
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 37
                },
                "players": [{
                    "id": "d24bbe70-baba-4337-822e-c166a156f92e",
                    "name": "Deommodore Lenoir",
                    "jersey": "38",
                    "position": "DB",
                    "sr_id": "sr:player:2198824",
                    "role": "tackle"
                }]
            }, {
                "category": "first_down",
                "sequence": 3,
                "result": "pass",
                "start_location": {
                    "alias": "SF",
                    "yardline": 37
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 37
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
            "id": "dc500d50-8a1a-11ed-9c65-6f281153d3a0",
            "sequence": 1672608372782.0,
            "clock": "5:22",
            "home_points": 7,
            "away_points": 7,
            "play_type": "rush",
            "wall_clock": "2023-01-01T21:26:01+00:00",
            "description": "B.Bolden rushed right tackle to SF 27 for 10 yards. Tackled by D.Lenoir; T.Gipson at SF 27.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T21:26:12+00:00",
            "updated_at": "2023-01-01T21:33:09+00:00",
            "start_situation": {
                "clock": "5:22",
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
                    "yardline": 37
                }
            },
            "end_situation": {
                "clock": "5:22",
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
                    "yardline": 27
                }
            },
            "statistics": [{
                "stat_type": "rush",
                "attempt": 1,
                "yards": 10,
                "firstdown": 1,
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
                    "id": "d24bbe70-baba-4337-822e-c166a156f92e",
                    "name": "Deommodore Lenoir",
                    "jersey": "38",
                    "position": "DB",
                    "sr_id": "sr:player:2198824"
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
                "category": "rush",
                "team": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390"
                }
            }],
            "details": [{
                "category": "rush",
                "description": "B.Bolden rushed right tackle to SF 27 for 10 yards.",
                "sequence": 0,
                "direction": "right tackle",
                "yards": 10,
                "result": "tackled",
                "start_location": {
                    "alias": "SF",
                    "yardline": 37
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 27
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
                "description": "Tackled by D.Lenoir; T.Gipson at SF 27.",
                "sequence": 1,
                "start_location": {
                    "alias": "SF",
                    "yardline": 27
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 27
                },
                "players": [{
                    "id": "d24bbe70-baba-4337-822e-c166a156f92e",
                    "name": "Deommodore Lenoir",
                    "jersey": "38",
                    "position": "DB",
                    "sr_id": "sr:player:2198824",
                    "role": "ast_tackle"
                }, {
                    "id": "d5efd828-7339-43a7-ad7e-6f936dbbabb2",
                    "name": "Tashaun Gipson Sr.",
                    "jersey": "31",
                    "position": "SAF",
                    "sr_id": "sr:player:831467",
                    "role": "ast_tackle"
                }]
            }, {
                "category": "first_down",
                "sequence": 2,
                "result": "rush",
                "start_location": {
                    "alias": "SF",
                    "yardline": 27
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 27
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
            "id": "0492e800-8a1b-11ed-9c65-6f281153d3a0",
            "sequence": 1672608481053.0,
            "clock": "4:44",
            "home_points": 7,
            "away_points": 7,
            "play_type": "rush",
            "wall_clock": "2023-01-01T21:27:49+00:00",
            "description": "B.Bolden rushed right end to SF 18 for 9 yards. Tackled by T.Hufanga at SF 18.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T21:28:01+00:00",
            "updated_at": "2023-01-01T21:29:20+00:00",
            "start_situation": {
                "clock": "4:44",
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
                    "yardline": 27
                }
            },
            "end_situation": {
                "clock": "4:04",
                "down": 2,
                "yfd": 1,
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
                    "yardline": 18
                }
            },
            "statistics": [{
                "stat_type": "rush",
                "attempt": 1,
                "yards": 9,
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
                "tackle": 1,
                "category": "defense",
                "def_target": 0,
                "def_comp": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "batted_pass": 0,
                "player": {
                    "id": "a1a2f797-77ac-4f13-8456-50a10a7fd61a",
                    "name": "Talanoa Hufanga",
                    "jersey": "29",
                    "position": "SAF",
                    "sr_id": "sr:player:1437360"
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
                "description": "B.Bolden rushed right end to SF 18 for 9 yards.",
                "sequence": 0,
                "direction": "right end",
                "yards": 9,
                "result": "tackled",
                "start_location": {
                    "alias": "SF",
                    "yardline": 27
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 18
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
                "description": "Tackled by T.Hufanga at SF 18.",
                "sequence": 1,
                "start_location": {
                    "alias": "SF",
                    "yardline": 18
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 18
                },
                "players": [{
                    "id": "a1a2f797-77ac-4f13-8456-50a10a7fd61a",
                    "name": "Talanoa Hufanga",
                    "jersey": "29",
                    "position": "SAF",
                    "sr_id": "sr:player:1437360",
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
            "id": "2eeb5c40-8a1b-11ed-9c65-6f281153d3a0",
            "sequence": 1672608519610.0,
            "clock": "4:04",
            "home_points": 7,
            "away_points": 7,
            "play_type": "rush",
            "wall_clock": "2023-01-01T21:28:33+00:00",
            "description": "B.Bolden rushed right guard to SF 15 for 3 yards. Tackled by F.Warner; D.Greenlaw at SF 15.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T21:28:39+00:00",
            "updated_at": "2023-01-01T22:07:58+00:00",
            "start_situation": {
                "clock": "4:04",
                "down": 2,
                "yfd": 1,
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
                    "yardline": 18
                }
            },
            "end_situation": {
                "clock": "3:17",
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
                    "yardline": 15
                }
            },
            "statistics": [{
                "stat_type": "rush",
                "attempt": 1,
                "yards": 3,
                "firstdown": 1,
                "inside_20": 1,
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
                "stat_type": "first_down",
                "category": "rush",
                "team": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390"
                }
            }],
            "details": [{
                "category": "rush",
                "description": "B.Bolden rushed right guard to SF 15 for 3 yards.",
                "sequence": 0,
                "direction": "right guard",
                "yards": 3,
                "result": "tackled",
                "start_location": {
                    "alias": "SF",
                    "yardline": 18
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 15
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
                "description": "Tackled by F.Warner; D.Greenlaw at SF 15.",
                "sequence": 1,
                "start_location": {
                    "alias": "SF",
                    "yardline": 15
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 15
                },
                "players": [{
                    "id": "75a74283-5ab6-49d4-bf2f-e6fcaf91ec36",
                    "name": "Fred Warner",
                    "jersey": "54",
                    "position": "LB",
                    "sr_id": "sr:player:1198502",
                    "role": "ast_tackle"
                }, {
                    "id": "e6eb9d50-9231-44ff-89eb-7f7b996e042f",
                    "name": "Dre Greenlaw",
                    "jersey": "57",
                    "position": "LB",
                    "sr_id": "sr:player:1833944",
                    "role": "ast_tackle"
                }]
            }, {
                "category": "first_down",
                "sequence": 2,
                "result": "rush",
                "start_location": {
                    "alias": "SF",
                    "yardline": 15
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 15
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
            "id": "4356de70-8a1b-11ed-9c65-6f281153d3a0",
            "sequence": 1672608586942.0,
            "clock": "3:17",
            "home_points": 7,
            "away_points": 7,
            "play_type": "pass",
            "wall_clock": "2023-01-01T21:29:18+00:00",
            "description": "J.Stidham steps back to pass. J.Stidham pass incomplete short left intended for D.Adams. PENALTY on SF-C.Ward, Defensive Pass Interference, 10 yards, accepted. No Play.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T21:29:46+00:00",
            "updated_at": "2023-01-01T22:07:58+00:00",
            "start_situation": {
                "clock": "3:17",
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
                    "yardline": 15
                }
            },
            "end_situation": {
                "clock": "3:12",
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
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389",
                    "yardline": 5
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "nullified": true,
                "attempt": 1,
                "complete": 0,
                "att_yards": 0,
                "inside_20": 1,
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
                "nullified": true,
                "target": 1,
                "inside_20": 1,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "e7d6ae25-bf15-4660-8b37-c37716551de3",
                    "name": "Davante Adams",
                    "jersey": "17",
                    "position": "WR",
                    "sr_id": "sr:player:831457"
                },
                "team": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390"
                }
            }, {
                "stat_type": "penalty",
                "penalty": 1,
                "yards": 10,
                "player": {
                    "id": "04f6abef-834f-470e-9c15-8c0cc62fde4e",
                    "name": "Charvarius Ward",
                    "jersey": "07",
                    "position": "CB",
                    "sr_id": "sr:player:1183160"
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
                "category": "penalty",
                "team": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390"
                }
            }],
            "details": [{
                "category": "pass",
                "description": "J.Stidham steps back to pass.",
                "sequence": 0,
                "start_location": {
                    "alias": "SF",
                    "yardline": 15
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 15
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
                "category": "pass_incompletion",
                "description": "J.Stidham pass incomplete short left intended for D.Adams.",
                "sequence": 1,
                "direction": "short left",
                "start_location": {
                    "alias": "SF",
                    "yardline": 15
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 15
                },
                "players": [{
                    "id": "e7d6ae25-bf15-4660-8b37-c37716551de3",
                    "name": "Davante Adams",
                    "jersey": "17",
                    "position": "WR",
                    "sr_id": "sr:player:831457",
                    "role": "receive"
                }, {
                    "id": "582fe465-135a-4901-beef-60aebce99067",
                    "name": "Jarrett Stidham",
                    "jersey": "03",
                    "position": "QB",
                    "sr_id": "sr:player:1232264",
                    "role": "pass"
                }]
            }, {
                "category": "penalty",
                "description": "PENALTY on SF-C.Ward, Defensive Pass Interference, 10 yards, accepted.",
                "sequence": 2,
                "start_location": {
                    "alias": "SF",
                    "yardline": 15
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 5
                },
                "penalty": {
                    "description": "Defensive Pass Interference",
                    "result": "accepted",
                    "yards": 10,
                    "team": {
                        "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                        "name": "49ers",
                        "market": "San Francisco",
                        "alias": "SF",
                        "sr_id": "sr:competitor:4389"
                    }
                },
                "players": [{
                    "id": "04f6abef-834f-470e-9c15-8c0cc62fde4e",
                    "name": "Charvarius Ward",
                    "jersey": "07",
                    "position": "CB",
                    "sr_id": "sr:player:1183160",
                    "role": "penalty"
                }]
            }, {
                "category": "no_play",
                "description": "No Play.",
                "sequence": 3,
                "start_location": {
                    "alias": "SF",
                    "yardline": 5
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 5
                },
                "players": []
            }, {
                "category": "first_down",
                "sequence": 4,
                "result": "penalty",
                "start_location": {
                    "alias": "SF",
                    "yardline": 5
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 5
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
            "id": "6b0bd100-8a1b-11ed-9c65-6f281153d3a0",
            "sequence": 1672608623502.0,
            "clock": "3:12",
            "home_points": 7,
            "away_points": 7,
            "play_type": "rush",
            "goaltogo": true,
            "wall_clock": "2023-01-01T21:30:14+00:00",
            "description": "B.Bolden rushed right end to SF 4 for 1 yards. Tackled by F.Warner; D.Greenlaw at SF 4.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T21:30:23+00:00",
            "updated_at": "2023-01-01T22:07:58+00:00",
            "start_situation": {
                "clock": "3:12",
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
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389",
                    "yardline": 5
                }
            },
            "end_situation": {
                "clock": "3:12",
                "down": 2,
                "yfd": 4,
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
                    "yardline": 4
                }
            },
            "statistics": [{
                "stat_type": "rush",
                "attempt": 1,
                "yards": 1,
                "firstdown": 0,
                "inside_20": 1,
                "goaltogo": 1,
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
                "category": "rush",
                "description": "B.Bolden rushed right end to SF 4 for 1 yards.",
                "sequence": 0,
                "direction": "right end",
                "yards": 1,
                "result": "tackled",
                "start_location": {
                    "alias": "SF",
                    "yardline": 5
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 4
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
                "description": "Tackled by F.Warner; D.Greenlaw at SF 4.",
                "sequence": 1,
                "start_location": {
                    "alias": "SF",
                    "yardline": 4
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 4
                },
                "players": [{
                    "id": "75a74283-5ab6-49d4-bf2f-e6fcaf91ec36",
                    "name": "Fred Warner",
                    "jersey": "54",
                    "position": "LB",
                    "sr_id": "sr:player:1198502",
                    "role": "ast_tackle"
                }, {
                    "id": "e6eb9d50-9231-44ff-89eb-7f7b996e042f",
                    "name": "Dre Greenlaw",
                    "jersey": "57",
                    "position": "LB",
                    "sr_id": "sr:player:1833944",
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
            "id": "80980570-8a1b-11ed-9c65-6f281153d3a0",
            "sequence": 1672608658780.0,
            "clock": "2:35",
            "home_points": 7,
            "away_points": 7,
            "play_type": "rush",
            "goaltogo": true,
            "wall_clock": "2023-01-01T21:30:54+00:00",
            "description": "B.Bolden rushed right end to SF 1 for 3 yards. Tackled by T.Hufanga; D.Greenlaw at SF 1.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T21:30:58+00:00",
            "updated_at": "2023-01-01T22:07:58+00:00",
            "start_situation": {
                "clock": "2:35",
                "down": 2,
                "yfd": 4,
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
                    "yardline": 4
                }
            },
            "end_situation": {
                "clock": "1:53",
                "down": 3,
                "yfd": 1,
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
                    "yardline": 1
                }
            },
            "statistics": [{
                "stat_type": "rush",
                "attempt": 1,
                "yards": 3,
                "firstdown": 0,
                "inside_20": 1,
                "goaltogo": 1,
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
                    "id": "a1a2f797-77ac-4f13-8456-50a10a7fd61a",
                    "name": "Talanoa Hufanga",
                    "jersey": "29",
                    "position": "SAF",
                    "sr_id": "sr:player:1437360"
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
            }],
            "details": [{
                "category": "rush",
                "description": "B.Bolden rushed right end to SF 1 for 3 yards.",
                "sequence": 0,
                "direction": "right end",
                "yards": 3,
                "result": "tackled",
                "start_location": {
                    "alias": "SF",
                    "yardline": 4
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 1
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
                "description": "Tackled by T.Hufanga; D.Greenlaw at SF 1.",
                "sequence": 1,
                "start_location": {
                    "alias": "SF",
                    "yardline": 1
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 1
                },
                "players": [{
                    "id": "a1a2f797-77ac-4f13-8456-50a10a7fd61a",
                    "name": "Talanoa Hufanga",
                    "jersey": "29",
                    "position": "SAF",
                    "sr_id": "sr:player:1437360",
                    "role": "ast_tackle"
                }, {
                    "id": "e6eb9d50-9231-44ff-89eb-7f7b996e042f",
                    "name": "Dre Greenlaw",
                    "jersey": "57",
                    "position": "LB",
                    "sr_id": "sr:player:1833944",
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
            "id": "a075d3e0-8a1b-11ed-9c65-6f281153d3a0",
            "sequence": 1672608699593.0,
            "clock": "1:53",
            "home_points": 7,
            "away_points": 7,
            "play_type": "pass",
            "goaltogo": true,
            "wall_clock": "2023-01-01T21:31:35+00:00",
            "description": "J.Stidham steps back to pass. J.Stidham pass incomplete short left intended for.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T21:31:39+00:00",
            "updated_at": "2023-01-01T22:07:58+00:00",
            "start_situation": {
                "clock": "1:53",
                "down": 3,
                "yfd": 1,
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
                    "yardline": 1
                }
            },
            "end_situation": {
                "clock": "1:49",
                "down": 4,
                "yfd": 1,
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
                    "yardline": 1
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 0,
                "att_yards": -1,
                "firstdown": 0,
                "inside_20": 1,
                "goaltogo": 1,
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
                "stat_type": "down_conversion",
                "down": 3,
                "attempt": 1,
                "complete": 0,
                "team": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390"
                }
            }],
            "details": [{
                "category": "pass",
                "description": "J.Stidham steps back to pass.",
                "sequence": 0,
                "start_location": {
                    "alias": "SF",
                    "yardline": 1
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 1
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
                "category": "pass_incompletion",
                "description": "J.Stidham pass incomplete short left intended for.",
                "sequence": 1,
                "direction": "short left",
                "start_location": {
                    "alias": "SF",
                    "yardline": 1
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 2
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
                "category": "third_down_conversion",
                "sequence": 2,
                "result": "missed",
                "start_location": {
                    "alias": "SF",
                    "yardline": 1
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 1
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
            "id": "ae1894b0-8a1b-11ed-9c65-6f281153d3a0",
            "sequence": 1672608746743.0,
            "clock": "1:49",
            "home_points": 10,
            "away_points": 7,
            "play_type": "field_goal",
            "scoring_play": true,
            "goaltogo": true,
            "wall_clock": "2023-01-01T21:32:19+00:00",
            "description": "D.Carlson 20 yard field goal attempt is good, Center-T.Sieg, Holder-A.Cole.",
            "scoring_description": "D.Carlson 20 yard field goal attempt is good, Center-T.Sieg, Holder-A.Cole.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T21:32:26+00:00",
            "updated_at": "2023-01-01T22:07:58+00:00",
            "start_situation": {
                "clock": "1:49",
                "down": 4,
                "yfd": 1,
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
                    "yardline": 1
                }
            },
            "end_situation": {
                "clock": "1:45",
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
            "score": {
                "sequence": 5,
                "clock": "1:45",
                "points": 3,
                "home_points": 10,
                "away_points": 7
            },
            "statistics": [{
                "stat_type": "field_goal",
                "attempt": 1,
                "att_yards": 20,
                "yards": 20,
                "missed": 0,
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
                "category": "field_goal",
                "description": "D.Carlson 20 yard field goal attempt is good, Center-T.Sieg, Holder-A.Cole.",
                "sequence": 0,
                "yards": 20,
                "result": "good",
                "start_location": {
                    "alias": "SF",
                    "yardline": 10
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 9
                },
                "players": [{
                    "id": "7bb70550-c28a-4e47-9a13-cc0c0fef8b38",
                    "name": "Daniel Carlson",
                    "jersey": "02",
                    "position": "K",
                    "sr_id": "sr:player:1226876",
                    "role": "kick"
                }, {
                    "id": "36f93677-a95b-4362-ac5f-6722f5c05b6d",
                    "name": "AJ Cole",
                    "jersey": "06",
                    "position": "P",
                    "sr_id": "sr:player:1206824",
                    "role": "hold"
                }, {
                    "id": "378df3b9-0a5c-4d68-a173-79bc0df07a66",
                    "name": "Trent Sieg",
                    "jersey": "47",
                    "position": "LS",
                    "sr_id": "sr:player:1182210",
                    "role": "snap"
                }]
            }],
            "quarter": {
                "id": "47804644-a799-46ed-b958-0f8c49647fb4",
                "number": 1,
                "sequence": 1
            }
        }]
    }, {
        "id": "dfa200ad-a584-4c22-9ba3-ba03ac20f92b",
        "sequence": 4,
        "start_reason": "Kickoff",
        "end_reason": "Touchdown",
        "play_count": 13,
        "duration": "7:07",
        "first_downs": 6,
        "gain": 50,
        "penalty_yards": 25,
        "inside_20": true,
        "scoring_drive": true,
        "quarter": {
            "id": "47804644-a799-46ed-b958-0f8c49647fb4",
            "number": 1,
            "sequence": 1
        },
        "team": {
            "id": "f0e724b0-4cbf-495a-be47-013907608da9",
            "name": "49ers",
            "market": "San Francisco",
            "alias": "SF",
            "sr_id": "sr:competitor:4389"
        },
        "plays": [{
            "type": "play",
            "id": "e2fc9eb0-8a1b-11ed-9c65-6f281153d3a0",
            "sequence": 1672608939274.0,
            "clock": "1:45",
            "home_points": 10,
            "away_points": 7,
            "play_type": "kickoff",
            "wall_clock": "2023-01-01T21:35:21+00:00",
            "description": "D.Carlson kicks 62 yards from LV 35 to the SF 3. R.McCloud returns the kickoff. Tackled by I.Pola-Mao; M.Koonce at SF 25.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T21:35:39+00:00",
            "updated_at": "2023-01-01T21:47:39+00:00",
            "start_situation": {
                "clock": "1:45",
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
            "end_situation": {
                "clock": "1:34",
                "down": 1,
                "yfd": 10,
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
                    "yardline": 25
                }
            },
            "statistics": [{
                "stat_type": "kick",
                "attempt": 1,
                "yards": 62,
                "net_yards": 40,
                "onside_attempt": 0,
                "onside_success": 0,
                "squib_kick": 0,
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
            }, {
                "stat_type": "return",
                "return": 1,
                "yards": 22,
                "category": "kick_return",
                "player": {
                    "id": "f7ff7599-a175-4a0c-b887-3ae9e596fc64",
                    "name": "Ray-Ray McCloud III",
                    "jersey": "03",
                    "position": "WR",
                    "sr_id": "sr:player:1218938"
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
                "category": "special_team",
                "def_target": 0,
                "def_comp": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "batted_pass": 0,
                "player": {
                    "id": "83436be9-f646-4cb6-94e0-99a939298e3f",
                    "name": "Malcolm Koonce",
                    "jersey": "51",
                    "position": "DE",
                    "sr_id": "sr:player:2197780"
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
                "category": "special_team",
                "def_target": 0,
                "def_comp": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "batted_pass": 0,
                "player": {
                    "id": "03dc3660-d3a9-11ec-96a0-c3471a31202c",
                    "name": "Isaiah Pola-Mao",
                    "jersey": "20",
                    "position": "SAF",
                    "sr_id": "sr:player:1262718"
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
                "category": "kick_off",
                "description": "D.Carlson kicks 62 yards from LV 35 to the SF 3.",
                "sequence": 0,
                "yards": 62,
                "result": "returned",
                "start_location": {
                    "alias": "LV",
                    "yardline": 35
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 3
                },
                "players": [{
                    "id": "7bb70550-c28a-4e47-9a13-cc0c0fef8b38",
                    "name": "Daniel Carlson",
                    "jersey": "02",
                    "position": "K",
                    "sr_id": "sr:player:1226876",
                    "role": "kick"
                }]
            }, {
                "category": "kick_off_return",
                "description": "R.McCloud returns the kickoff.",
                "sequence": 1,
                "yards": 22,
                "result": "tackled",
                "start_location": {
                    "alias": "SF",
                    "yardline": 3
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 25
                },
                "players": [{
                    "id": "7bb70550-c28a-4e47-9a13-cc0c0fef8b38",
                    "name": "Daniel Carlson",
                    "jersey": "02",
                    "position": "K",
                    "sr_id": "sr:player:1226876",
                    "role": "kick"
                }, {
                    "id": "f7ff7599-a175-4a0c-b887-3ae9e596fc64",
                    "name": "Ray-Ray McCloud III",
                    "jersey": "03",
                    "position": "WR",
                    "sr_id": "sr:player:1218938",
                    "role": "return"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by I.Pola-Mao; M.Koonce at SF 25.",
                "sequence": 2,
                "start_location": {
                    "alias": "SF",
                    "yardline": 25
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 25
                },
                "players": [{
                    "id": "03dc3660-d3a9-11ec-96a0-c3471a31202c",
                    "name": "Isaiah Pola-Mao",
                    "jersey": "20",
                    "position": "SAF",
                    "sr_id": "sr:player:1262718",
                    "role": "ast_tackle"
                }, {
                    "id": "83436be9-f646-4cb6-94e0-99a939298e3f",
                    "name": "Malcolm Koonce",
                    "jersey": "51",
                    "position": "DE",
                    "sr_id": "sr:player:2197780",
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
            "id": "51ae7ae0-8a1c-11ed-9c65-6f281153d3a0",
            "sequence": 1672608995374.0,
            "clock": "1:34",
            "home_points": 10,
            "away_points": 7,
            "play_type": "pass",
            "wall_clock": "2023-01-01T21:36:31+00:00",
            "description": "B.Purdy steps back to pass. B.Purdy pass incomplete short right intended for C.McCaffrey (K.Peko).",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T21:36:35+00:00",
            "updated_at": "2023-01-01T21:37:36+00:00",
            "start_situation": {
                "clock": "1:34",
                "down": 1,
                "yfd": 10,
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
                    "yardline": 25
                }
            },
            "end_situation": {
                "clock": "1:34",
                "down": 2,
                "yfd": 10,
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
                    "yardline": 25
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 0,
                "att_yards": -5,
                "firstdown": 0,
                "inside_20": 0,
                "goaltogo": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "on_target_throw": 0,
                "batted_pass": 0,
                "player": {
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461"
                },
                "team": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }, {
                "stat_type": "receive",
                "firstdown": 0,
                "target": 1,
                "inside_20": 0,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "f96db0af-5e25-42d1-a07a-49b4e065b364",
                    "name": "Christian McCaffrey",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1129507"
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
                "pass_defended": 1,
                "def_target": 0,
                "def_comp": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "batted_pass": 0,
                "player": {
                    "id": "e9a7f92c-241c-4172-9874-6eb0c1576899",
                    "name": "Kyle Peko",
                    "jersey": "93",
                    "position": "DT",
                    "sr_id": "sr:player:1074060"
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
                "category": "pass",
                "description": "B.Purdy steps back to pass.",
                "sequence": 0,
                "start_location": {
                    "alias": "SF",
                    "yardline": 25
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 25
                },
                "players": [{
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461",
                    "role": "pass"
                }]
            }, {
                "category": "pass_incompletion",
                "description": "B.Purdy pass incomplete short right intended for C.McCaffrey (K.Peko).",
                "sequence": 1,
                "direction": "short right",
                "start_location": {
                    "alias": "SF",
                    "yardline": 25
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 20
                },
                "players": [{
                    "id": "f96db0af-5e25-42d1-a07a-49b4e065b364",
                    "name": "Christian McCaffrey",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1129507",
                    "role": "receive"
                }, {
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461",
                    "role": "pass"
                }, {
                    "id": "e9a7f92c-241c-4172-9874-6eb0c1576899",
                    "name": "Kyle Peko",
                    "jersey": "93",
                    "position": "DT",
                    "sr_id": "sr:player:1074060",
                    "role": "defend"
                }]
            }],
            "quarter": {
                "id": "47804644-a799-46ed-b958-0f8c49647fb4",
                "number": 1,
                "sequence": 1
            }
        }, {
            "type": "play",
            "id": "663685c0-8a1c-11ed-9c65-6f281153d3a0",
            "sequence": 1672609033097.0,
            "clock": "1:34",
            "home_points": 10,
            "away_points": 7,
            "play_type": "rush",
            "wall_clock": "2023-01-01T21:37:02+00:00",
            "description": "C.McCaffrey rushed left end to SF 34 for 9 yards. Tackled by M.Crosby at SF 34.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T21:37:13+00:00",
            "updated_at": "2023-01-01T21:38:08+00:00",
            "start_situation": {
                "clock": "1:34",
                "down": 2,
                "yfd": 10,
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
                    "yardline": 25
                }
            },
            "end_situation": {
                "clock": "00:50",
                "down": 3,
                "yfd": 1,
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
                    "yardline": 34
                }
            },
            "statistics": [{
                "stat_type": "rush",
                "attempt": 1,
                "yards": 9,
                "firstdown": 0,
                "inside_20": 0,
                "goaltogo": 0,
                "broken_tackles": 0,
                "kneel_down": 0,
                "scramble": 0,
                "player": {
                    "id": "f96db0af-5e25-42d1-a07a-49b4e065b364",
                    "name": "Christian McCaffrey",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1129507"
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
                    "id": "3ae55cda-ad32-46c5-bde7-470755f37f3a",
                    "name": "Maxx Crosby",
                    "jersey": "98",
                    "position": "DE",
                    "sr_id": "sr:player:1189114"
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
                "category": "rush",
                "description": "C.McCaffrey rushed left end to SF 34 for 9 yards.",
                "sequence": 0,
                "direction": "left end",
                "yards": 9,
                "result": "tackled",
                "start_location": {
                    "alias": "SF",
                    "yardline": 25
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 34
                },
                "players": [{
                    "id": "f96db0af-5e25-42d1-a07a-49b4e065b364",
                    "name": "Christian McCaffrey",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1129507",
                    "role": "rush"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by M.Crosby at SF 34.",
                "sequence": 1,
                "start_location": {
                    "alias": "SF",
                    "yardline": 34
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 34
                },
                "players": [{
                    "id": "3ae55cda-ad32-46c5-bde7-470755f37f3a",
                    "name": "Maxx Crosby",
                    "jersey": "98",
                    "position": "DE",
                    "sr_id": "sr:player:1189114",
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
            "id": "74cf6660-8a1c-11ed-9c65-6f281153d3a0",
            "sequence": 1672609073570.0,
            "clock": "00:50",
            "home_points": 10,
            "away_points": 7,
            "play_type": "rush",
            "wall_clock": "2023-01-01T21:37:46+00:00",
            "description": "C.McCaffrey rushed left guard to SF 36 for 2 yards. Tackled by H.Langi at SF 36.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T21:37:53+00:00",
            "updated_at": "2023-01-01T21:39:03+00:00",
            "start_situation": {
                "clock": "00:50",
                "down": 3,
                "yfd": 1,
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
                    "yardline": 34
                }
            },
            "end_situation": {
                "clock": "00:11",
                "down": 1,
                "yfd": 10,
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
                    "yardline": 36
                }
            },
            "statistics": [{
                "stat_type": "rush",
                "attempt": 1,
                "yards": 2,
                "firstdown": 1,
                "inside_20": 0,
                "goaltogo": 0,
                "broken_tackles": 0,
                "kneel_down": 0,
                "scramble": 0,
                "player": {
                    "id": "f96db0af-5e25-42d1-a07a-49b4e065b364",
                    "name": "Christian McCaffrey",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1129507"
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
                    "id": "d3e192b5-4523-4d65-94e0-a1fb164b6542",
                    "name": "Harvey Langi",
                    "jersey": "56",
                    "position": "LB",
                    "sr_id": "sr:player:1130349"
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
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }, {
                "stat_type": "first_down",
                "category": "rush",
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
                "description": "C.McCaffrey rushed left guard to SF 36 for 2 yards.",
                "sequence": 0,
                "direction": "left guard",
                "yards": 2,
                "result": "tackled",
                "start_location": {
                    "alias": "SF",
                    "yardline": 34
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 36
                },
                "players": [{
                    "id": "f96db0af-5e25-42d1-a07a-49b4e065b364",
                    "name": "Christian McCaffrey",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1129507",
                    "role": "rush"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by H.Langi at SF 36.",
                "sequence": 1,
                "start_location": {
                    "alias": "SF",
                    "yardline": 36
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 36
                },
                "players": [{
                    "id": "d3e192b5-4523-4d65-94e0-a1fb164b6542",
                    "name": "Harvey Langi",
                    "jersey": "56",
                    "position": "LB",
                    "sr_id": "sr:player:1130349",
                    "role": "tackle"
                }]
            }, {
                "category": "first_down",
                "sequence": 2,
                "result": "rush",
                "start_location": {
                    "alias": "SF",
                    "yardline": 36
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 36
                },
                "players": []
            }, {
                "category": "third_down_conversion",
                "sequence": 3,
                "result": "good",
                "start_location": {
                    "alias": "SF",
                    "yardline": 36
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 36
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
            "id": "8d36f560-8a1c-11ed-9c65-6f281153d3a0",
            "sequence": 1672609118399.0,
            "clock": "00:11",
            "home_points": 10,
            "away_points": 7,
            "play_type": "rush",
            "wall_clock": "2023-01-01T21:38:26+00:00",
            "description": "C.McCaffrey rushed left tackle to SF 34 for -2 yards. Tackled by C.Ferrell at SF 34.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T21:38:38+00:00",
            "updated_at": "2023-01-01T21:39:49+00:00",
            "start_situation": {
                "clock": "00:11",
                "down": 1,
                "yfd": 10,
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
                    "yardline": 36
                }
            },
            "end_situation": {
                "clock": "00:00",
                "down": 2,
                "yfd": 12,
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
                    "yardline": 34
                }
            },
            "statistics": [{
                "stat_type": "rush",
                "attempt": 1,
                "yards": -2,
                "firstdown": 0,
                "inside_20": 0,
                "goaltogo": 0,
                "tlost": 1,
                "tlost_yards": -2,
                "broken_tackles": 0,
                "kneel_down": 0,
                "scramble": 0,
                "player": {
                    "id": "f96db0af-5e25-42d1-a07a-49b4e065b364",
                    "name": "Christian McCaffrey",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1129507"
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
                "tlost": 1,
                "tlost_yards": 2,
                "category": "defense",
                "def_target": 0,
                "def_comp": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "batted_pass": 0,
                "player": {
                    "id": "108759bf-8c78-41c6-a409-b87c63985c21",
                    "name": "Clelin Ferrell",
                    "jersey": "99",
                    "position": "DE",
                    "sr_id": "sr:player:1217516"
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
                "category": "rush",
                "description": "C.McCaffrey rushed left tackle to SF 34 for -2 yards.",
                "sequence": 0,
                "direction": "left tackle",
                "yards": -2,
                "result": "tackled",
                "start_location": {
                    "alias": "SF",
                    "yardline": 36
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 34
                },
                "players": [{
                    "id": "f96db0af-5e25-42d1-a07a-49b4e065b364",
                    "name": "Christian McCaffrey",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1129507",
                    "role": "rush"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by C.Ferrell at SF 34.",
                "sequence": 1,
                "start_location": {
                    "alias": "SF",
                    "yardline": 34
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 34
                },
                "players": [{
                    "id": "108759bf-8c78-41c6-a409-b87c63985c21",
                    "name": "Clelin Ferrell",
                    "jersey": "99",
                    "position": "DE",
                    "sr_id": "sr:player:1217516",
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
            "id": "bbea3840-8a1c-11ed-9c65-6f281153d3a0",
            "sequence": 1672609332543.0,
            "clock": "15:00",
            "home_points": 10,
            "away_points": 7,
            "play_type": "pass",
            "wall_clock": "2023-01-01T21:41:45+00:00",
            "description": "B.Purdy pass short left complete to SF 35. Catch made by G.Kittle at SF 35. Gain of 6 yards. Tackled by N.Hobbs; C.Ferrell at SF 40.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T21:42:12+00:00",
            "updated_at": "2023-01-01T21:43:14+00:00",
            "start_situation": {
                "clock": "15:00",
                "down": 2,
                "yfd": 12,
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
                    "yardline": 34
                }
            },
            "end_situation": {
                "clock": "14:15",
                "down": 3,
                "yfd": 6,
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
                    "yardline": 40
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 1,
                "yards": 6,
                "att_yards": 1,
                "firstdown": 0,
                "inside_20": 0,
                "goaltogo": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "on_target_throw": 0,
                "batted_pass": 0,
                "player": {
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461"
                },
                "team": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }, {
                "stat_type": "receive",
                "firstdown": 0,
                "target": 1,
                "reception": 1,
                "yards": 6,
                "yards_after_catch": 5,
                "inside_20": 0,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "2ada91b0-036e-454f-83c3-6d939ff584a9",
                    "name": "George Kittle",
                    "jersey": "85",
                    "position": "TE",
                    "sr_id": "sr:player:1130029"
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
                    "id": "b34aa9fb-3f93-481b-8f68-7330c39e6e20",
                    "name": "Nate Hobbs",
                    "jersey": "39",
                    "position": "CB",
                    "sr_id": "sr:player:2197902"
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
                    "id": "108759bf-8c78-41c6-a409-b87c63985c21",
                    "name": "Clelin Ferrell",
                    "jersey": "99",
                    "position": "DE",
                    "sr_id": "sr:player:1217516"
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
                "description": "B.Purdy pass short left complete to SF 35.",
                "sequence": 0,
                "direction": "short left",
                "yards": 6,
                "start_location": {
                    "alias": "SF",
                    "yardline": 34
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 35
                },
                "players": [{
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461",
                    "role": "pass"
                }]
            }, {
                "category": "pass_reception",
                "description": "Catch made by G.Kittle at SF 35. Gain of 6 yards.",
                "sequence": 1,
                "yards": 6,
                "result": "tackled",
                "start_location": {
                    "alias": "SF",
                    "yardline": 35
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 40
                },
                "players": [{
                    "id": "2ada91b0-036e-454f-83c3-6d939ff584a9",
                    "name": "George Kittle",
                    "jersey": "85",
                    "position": "TE",
                    "sr_id": "sr:player:1130029",
                    "role": "catch"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by N.Hobbs; C.Ferrell at SF 40.",
                "sequence": 2,
                "start_location": {
                    "alias": "SF",
                    "yardline": 40
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 40
                },
                "players": [{
                    "id": "b34aa9fb-3f93-481b-8f68-7330c39e6e20",
                    "name": "Nate Hobbs",
                    "jersey": "39",
                    "position": "CB",
                    "sr_id": "sr:player:2197902",
                    "role": "ast_tackle"
                }, {
                    "id": "108759bf-8c78-41c6-a409-b87c63985c21",
                    "name": "Clelin Ferrell",
                    "jersey": "99",
                    "position": "DE",
                    "sr_id": "sr:player:1217516",
                    "role": "ast_tackle"
                }]
            }],
            "quarter": {
                "id": "6c9fadba-e23e-4987-94d2-9b71423d3d4d",
                "number": 2,
                "sequence": 2
            }
        }, {
            "type": "play",
            "id": "28415b90-8a1d-11ed-9c65-6f281153d3a0",
            "sequence": 1672609371741.0,
            "clock": "14:15",
            "home_points": 10,
            "away_points": 7,
            "play_type": "pass",
            "wall_clock": "2023-01-01T21:42:30+00:00",
            "description": "B.Purdy steps back to pass. B.Purdy pass incomplete short right intended for G.Kittle. PENALTY on LV-T.Moehrig, Defensive Pass Interference, 13 yards, accepted. No Play.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T21:42:51+00:00",
            "updated_at": "2023-01-01T21:44:51+00:00",
            "start_situation": {
                "clock": "14:15",
                "down": 3,
                "yfd": 6,
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
                    "yardline": 40
                }
            },
            "end_situation": {
                "clock": "14:09",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 47
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "nullified": true,
                "attempt": 1,
                "complete": 0,
                "att_yards": 0,
                "inside_20": 0,
                "goaltogo": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "on_target_throw": 0,
                "batted_pass": 0,
                "player": {
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461"
                },
                "team": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }, {
                "stat_type": "receive",
                "nullified": true,
                "target": 1,
                "inside_20": 0,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "2ada91b0-036e-454f-83c3-6d939ff584a9",
                    "name": "George Kittle",
                    "jersey": "85",
                    "position": "TE",
                    "sr_id": "sr:player:1130029"
                },
                "team": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }, {
                "stat_type": "penalty",
                "penalty": 1,
                "yards": 13,
                "player": {
                    "id": "c8f74b89-065c-4857-be4e-4fcf897a5bc0",
                    "name": "Tre'von Moehrig",
                    "jersey": "25",
                    "position": "SAF",
                    "sr_id": "sr:player:2197678"
                },
                "team": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390"
                }
            }, {
                "stat_type": "first_down",
                "category": "penalty",
                "team": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }],
            "details": [{
                "category": "pass",
                "description": "B.Purdy steps back to pass.",
                "sequence": 0,
                "start_location": {
                    "alias": "SF",
                    "yardline": 40
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 40
                },
                "players": [{
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461",
                    "role": "pass"
                }]
            }, {
                "category": "pass_incompletion",
                "description": "B.Purdy pass incomplete short right intended for G.Kittle.",
                "sequence": 1,
                "direction": "short right",
                "start_location": {
                    "alias": "SF",
                    "yardline": 40
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 40
                },
                "players": [{
                    "id": "2ada91b0-036e-454f-83c3-6d939ff584a9",
                    "name": "George Kittle",
                    "jersey": "85",
                    "position": "TE",
                    "sr_id": "sr:player:1130029",
                    "role": "receive"
                }, {
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461",
                    "role": "pass"
                }]
            }, {
                "category": "penalty",
                "description": "PENALTY on LV-T.Moehrig, Defensive Pass Interference, 13 yards, accepted.",
                "sequence": 2,
                "start_location": {
                    "alias": "SF",
                    "yardline": 40
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 47
                },
                "penalty": {
                    "description": "Defensive Pass Interference",
                    "result": "accepted",
                    "yards": 13,
                    "team": {
                        "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                        "name": "Raiders",
                        "market": "Las Vegas",
                        "alias": "LV",
                        "sr_id": "sr:competitor:4390"
                    }
                },
                "players": [{
                    "id": "c8f74b89-065c-4857-be4e-4fcf897a5bc0",
                    "name": "Tre'von Moehrig",
                    "jersey": "25",
                    "position": "SAF",
                    "sr_id": "sr:player:2197678",
                    "role": "penalty"
                }]
            }, {
                "category": "no_play",
                "description": "No Play.",
                "sequence": 3,
                "start_location": {
                    "alias": "LV",
                    "yardline": 47
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 47
                },
                "players": []
            }, {
                "category": "first_down",
                "sequence": 4,
                "result": "penalty",
                "start_location": {
                    "alias": "LV",
                    "yardline": 47
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 47
                },
                "players": []
            }],
            "quarter": {
                "id": "6c9fadba-e23e-4987-94d2-9b71423d3d4d",
                "number": 2,
                "sequence": 2
            }
        }, {
            "type": "play",
            "id": "3f490c70-8a1d-11ed-9c65-6f281153d3a0",
            "sequence": 1672609427226.0,
            "clock": "14:09",
            "home_points": 10,
            "away_points": 7,
            "play_type": "pass",
            "wall_clock": "2023-01-01T21:43:27+00:00",
            "description": "B.Purdy steps back to pass. B.Purdy pass incomplete short middle intended for B.Aiyuk. PENALTY on LV-N.Hobbs, Defensive Pass Interference, 12 yards, accepted. No Play.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T21:43:47+00:00",
            "updated_at": "2023-01-01T21:45:38+00:00",
            "start_situation": {
                "clock": "14:09",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 47
                }
            },
            "end_situation": {
                "clock": "14:04",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
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
                "stat_type": "pass",
                "nullified": true,
                "attempt": 1,
                "complete": 0,
                "att_yards": 0,
                "inside_20": 0,
                "goaltogo": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "on_target_throw": 0,
                "batted_pass": 0,
                "player": {
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461"
                },
                "team": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }, {
                "stat_type": "receive",
                "nullified": true,
                "target": 1,
                "inside_20": 0,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "c90471cc-fa60-4416-9388-5aebb5d877eb",
                    "name": "Brandon Aiyuk",
                    "jersey": "11",
                    "position": "WR",
                    "sr_id": "sr:player:2040579"
                },
                "team": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }, {
                "stat_type": "penalty",
                "penalty": 1,
                "yards": 12,
                "player": {
                    "id": "b34aa9fb-3f93-481b-8f68-7330c39e6e20",
                    "name": "Nate Hobbs",
                    "jersey": "39",
                    "position": "CB",
                    "sr_id": "sr:player:2197902"
                },
                "team": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390"
                }
            }, {
                "stat_type": "first_down",
                "category": "penalty",
                "team": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }],
            "details": [{
                "category": "pass",
                "description": "B.Purdy steps back to pass.",
                "sequence": 0,
                "start_location": {
                    "alias": "LV",
                    "yardline": 47
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 47
                },
                "players": [{
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461",
                    "role": "pass"
                }]
            }, {
                "category": "pass_incompletion",
                "description": "B.Purdy pass incomplete short middle intended for B.Aiyuk.",
                "sequence": 1,
                "direction": "short middle",
                "start_location": {
                    "alias": "LV",
                    "yardline": 47
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 47
                },
                "players": [{
                    "id": "c90471cc-fa60-4416-9388-5aebb5d877eb",
                    "name": "Brandon Aiyuk",
                    "jersey": "11",
                    "position": "WR",
                    "sr_id": "sr:player:2040579",
                    "role": "receive"
                }, {
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461",
                    "role": "pass"
                }]
            }, {
                "category": "penalty",
                "description": "PENALTY on LV-N.Hobbs, Defensive Pass Interference, 12 yards, accepted.",
                "sequence": 2,
                "start_location": {
                    "alias": "LV",
                    "yardline": 47
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 35
                },
                "penalty": {
                    "description": "Defensive Pass Interference",
                    "result": "accepted",
                    "yards": 12,
                    "team": {
                        "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                        "name": "Raiders",
                        "market": "Las Vegas",
                        "alias": "LV",
                        "sr_id": "sr:competitor:4390"
                    }
                },
                "players": [{
                    "id": "b34aa9fb-3f93-481b-8f68-7330c39e6e20",
                    "name": "Nate Hobbs",
                    "jersey": "39",
                    "position": "CB",
                    "sr_id": "sr:player:2197902",
                    "role": "penalty"
                }]
            }, {
                "category": "no_play",
                "description": "No Play.",
                "sequence": 3,
                "start_location": {
                    "alias": "LV",
                    "yardline": 35
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 35
                },
                "players": []
            }, {
                "category": "first_down",
                "sequence": 4,
                "result": "penalty",
                "start_location": {
                    "alias": "LV",
                    "yardline": 35
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 35
                },
                "players": []
            }],
            "quarter": {
                "id": "6c9fadba-e23e-4987-94d2-9b71423d3d4d",
                "number": 2,
                "sequence": 2
            }
        }, {
            "type": "play",
            "id": "6013fa00-8a1d-11ed-9c65-6f281153d3a0",
            "sequence": 1672609463265.0,
            "clock": "14:04",
            "home_points": 10,
            "away_points": 7,
            "play_type": "rush",
            "wall_clock": "2023-01-01T21:44:19+00:00",
            "description": "C.McCaffrey rushed left end to LV 35 for 0 yards. Tackled by A.Robertson, L.Masterson at LV 35.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T21:44:23+00:00",
            "updated_at": "2023-01-01T22:15:43+00:00",
            "start_situation": {
                "clock": "14:04",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
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
            "end_situation": {
                "clock": "13:23",
                "down": 2,
                "yfd": 10,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
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
                "stat_type": "rush",
                "attempt": 1,
                "yards": 0,
                "firstdown": 0,
                "inside_20": 0,
                "goaltogo": 0,
                "broken_tackles": 0,
                "kneel_down": 0,
                "scramble": 0,
                "player": {
                    "id": "f96db0af-5e25-42d1-a07a-49b4e065b364",
                    "name": "Christian McCaffrey",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1129507"
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
                    "id": "103ff970-d3a7-11ec-96a0-c3471a31202c",
                    "name": "Luke Masterson",
                    "jersey": "59",
                    "position": "LB",
                    "sr_id": "sr:player:1201174"
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
                    "id": "23525664-b547-413b-9221-b09091b90edf",
                    "name": "Amik Robertson",
                    "jersey": "21",
                    "position": "CB",
                    "sr_id": "sr:player:2040257"
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
                "category": "rush",
                "description": "C.McCaffrey rushed left end to LV 35 for 0 yards.",
                "sequence": 0,
                "direction": "left end",
                "yards": 0,
                "result": "tackled",
                "start_location": {
                    "alias": "LV",
                    "yardline": 35
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 35
                },
                "players": [{
                    "id": "f96db0af-5e25-42d1-a07a-49b4e065b364",
                    "name": "Christian McCaffrey",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1129507",
                    "role": "rush"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by A.Robertson, L.Masterson at LV 35.",
                "sequence": 1,
                "start_location": {
                    "alias": "LV",
                    "yardline": 35
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 35
                },
                "players": [{
                    "id": "23525664-b547-413b-9221-b09091b90edf",
                    "name": "Amik Robertson",
                    "jersey": "21",
                    "position": "CB",
                    "sr_id": "sr:player:2040257",
                    "role": "tackle"
                }, {
                    "id": "103ff970-d3a7-11ec-96a0-c3471a31202c",
                    "name": "Luke Masterson",
                    "jersey": "59",
                    "position": "LB",
                    "sr_id": "sr:player:1201174",
                    "role": "ast_tackle"
                }]
            }],
            "quarter": {
                "id": "6c9fadba-e23e-4987-94d2-9b71423d3d4d",
                "number": 2,
                "sequence": 2
            }
        }, {
            "type": "play",
            "id": "75490dc0-8a1d-11ed-9c65-6f281153d3a0",
            "sequence": 1672609510261.0,
            "clock": "13:23",
            "home_points": 10,
            "away_points": 7,
            "play_type": "rush",
            "wall_clock": "2023-01-01T21:45:04+00:00",
            "description": "C.McCaffrey rushed up the middle to LV 30 for 5 yards. Tackled by H.Langi at LV 30.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T21:45:10+00:00",
            "updated_at": "2023-01-01T21:48:34+00:00",
            "start_situation": {
                "clock": "13:23",
                "down": 2,
                "yfd": 10,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
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
            "end_situation": {
                "clock": "13:23",
                "down": 3,
                "yfd": 5,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
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
                "stat_type": "rush",
                "attempt": 1,
                "yards": 5,
                "firstdown": 0,
                "inside_20": 0,
                "goaltogo": 0,
                "broken_tackles": 0,
                "kneel_down": 0,
                "scramble": 0,
                "player": {
                    "id": "f96db0af-5e25-42d1-a07a-49b4e065b364",
                    "name": "Christian McCaffrey",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1129507"
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
                    "id": "d3e192b5-4523-4d65-94e0-a1fb164b6542",
                    "name": "Harvey Langi",
                    "jersey": "56",
                    "position": "LB",
                    "sr_id": "sr:player:1130349"
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
                "category": "rush",
                "description": "C.McCaffrey rushed up the middle to LV 30 for 5 yards.",
                "sequence": 0,
                "direction": "up the middle",
                "yards": 5,
                "result": "tackled",
                "start_location": {
                    "alias": "LV",
                    "yardline": 35
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 30
                },
                "players": [{
                    "id": "f96db0af-5e25-42d1-a07a-49b4e065b364",
                    "name": "Christian McCaffrey",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1129507",
                    "role": "rush"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by H.Langi at LV 30.",
                "sequence": 1,
                "start_location": {
                    "alias": "LV",
                    "yardline": 30
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 30
                },
                "players": [{
                    "id": "d3e192b5-4523-4d65-94e0-a1fb164b6542",
                    "name": "Harvey Langi",
                    "jersey": "56",
                    "position": "LB",
                    "sr_id": "sr:player:1130349",
                    "role": "tackle"
                }]
            }],
            "quarter": {
                "id": "6c9fadba-e23e-4987-94d2-9b71423d3d4d",
                "number": 2,
                "sequence": 2
            }
        }, {
            "type": "play",
            "id": "d5182f10-8a1d-11ed-9c65-6f281153d3a0",
            "sequence": 1672609714644.0,
            "clock": "12:56",
            "home_points": 10,
            "away_points": 7,
            "play_type": "pass",
            "wall_clock": "2023-01-01T21:48:19+00:00",
            "description": "B.Purdy pass short left complete to LV 28. Catch made by C.McCaffrey at LV 28. Gain of 6 yards. Pushed out of bounds by D.Harmon at LV 24.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T21:48:34+00:00",
            "updated_at": "2023-01-01T21:49:53+00:00",
            "start_situation": {
                "clock": "12:56",
                "down": 3,
                "yfd": 5,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
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
                "clock": "12:16",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 24
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 1,
                "yards": 6,
                "att_yards": 2,
                "firstdown": 1,
                "inside_20": 0,
                "goaltogo": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "on_target_throw": 0,
                "batted_pass": 0,
                "player": {
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461"
                },
                "team": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }, {
                "stat_type": "receive",
                "firstdown": 1,
                "target": 1,
                "reception": 1,
                "yards": 6,
                "yards_after_catch": 4,
                "inside_20": 0,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "f96db0af-5e25-42d1-a07a-49b4e065b364",
                    "name": "Christian McCaffrey",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1129507"
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
                    "id": "a2802951-e573-4e8f-ad31-14b9ae5f8e7c",
                    "name": "Duron Harmon",
                    "jersey": "30",
                    "position": "SAF",
                    "sr_id": "sr:player:830945"
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
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }],
            "details": [{
                "category": "pass_completion",
                "description": "B.Purdy pass short left complete to LV 28.",
                "sequence": 0,
                "direction": "short left",
                "yards": 6,
                "start_location": {
                    "alias": "LV",
                    "yardline": 30
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 28
                },
                "players": [{
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461",
                    "role": "pass"
                }]
            }, {
                "category": "pass_reception",
                "description": "Catch made by C.McCaffrey at LV 28. Gain of 6 yards.",
                "sequence": 1,
                "yards": 6,
                "result": "pushed out of bounds",
                "start_location": {
                    "alias": "LV",
                    "yardline": 28
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 24
                },
                "players": [{
                    "id": "f96db0af-5e25-42d1-a07a-49b4e065b364",
                    "name": "Christian McCaffrey",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1129507",
                    "role": "catch"
                }]
            }, {
                "category": "pushed_out_of_bounds",
                "description": "Pushed out of bounds by D.Harmon at LV 24.",
                "sequence": 2,
                "start_location": {
                    "alias": "LV",
                    "yardline": 24
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 24
                },
                "players": [{
                    "id": "a2802951-e573-4e8f-ad31-14b9ae5f8e7c",
                    "name": "Duron Harmon",
                    "jersey": "30",
                    "position": "SAF",
                    "sr_id": "sr:player:830945",
                    "role": "tackle"
                }]
            }, {
                "category": "first_down",
                "sequence": 3,
                "result": "pass",
                "start_location": {
                    "alias": "LV",
                    "yardline": 24
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 24
                },
                "players": []
            }, {
                "category": "third_down_conversion",
                "sequence": 4,
                "result": "good",
                "start_location": {
                    "alias": "LV",
                    "yardline": 24
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 24
                },
                "players": []
            }],
            "quarter": {
                "id": "6c9fadba-e23e-4987-94d2-9b71423d3d4d",
                "number": 2,
                "sequence": 2
            }
        }, {
            "type": "play",
            "id": "113ff6d0-8a1e-11ed-9c65-6f281153d3a0",
            "sequence": 1672609755407.0,
            "clock": "12:16",
            "home_points": 10,
            "away_points": 7,
            "play_type": "pass",
            "wall_clock": "2023-01-01T21:49:06+00:00",
            "description": "B.Purdy pass short middle complete to LV 20. Catch made by G.Kittle at LV 20. Gain of 9 yards. Tackled by H.Langi at LV 15.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T21:49:15+00:00",
            "updated_at": "2023-01-01T21:50:22+00:00",
            "start_situation": {
                "clock": "12:16",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 24
                }
            },
            "end_situation": {
                "clock": "11:32",
                "down": 2,
                "yfd": 1,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 15
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 1,
                "yards": 9,
                "att_yards": 4,
                "firstdown": 0,
                "inside_20": 0,
                "goaltogo": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "on_target_throw": 0,
                "batted_pass": 0,
                "player": {
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461"
                },
                "team": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }, {
                "stat_type": "receive",
                "firstdown": 0,
                "target": 1,
                "reception": 1,
                "yards": 9,
                "yards_after_catch": 5,
                "inside_20": 0,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "2ada91b0-036e-454f-83c3-6d939ff584a9",
                    "name": "George Kittle",
                    "jersey": "85",
                    "position": "TE",
                    "sr_id": "sr:player:1130029"
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
                    "id": "d3e192b5-4523-4d65-94e0-a1fb164b6542",
                    "name": "Harvey Langi",
                    "jersey": "56",
                    "position": "LB",
                    "sr_id": "sr:player:1130349"
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
                "description": "B.Purdy pass short middle complete to LV 20.",
                "sequence": 0,
                "direction": "short middle",
                "yards": 9,
                "start_location": {
                    "alias": "LV",
                    "yardline": 24
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 20
                },
                "players": [{
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461",
                    "role": "pass"
                }]
            }, {
                "category": "pass_reception",
                "description": "Catch made by G.Kittle at LV 20. Gain of 9 yards.",
                "sequence": 1,
                "yards": 9,
                "result": "tackled",
                "start_location": {
                    "alias": "LV",
                    "yardline": 20
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 15
                },
                "players": [{
                    "id": "2ada91b0-036e-454f-83c3-6d939ff584a9",
                    "name": "George Kittle",
                    "jersey": "85",
                    "position": "TE",
                    "sr_id": "sr:player:1130029",
                    "role": "catch"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by H.Langi at LV 15.",
                "sequence": 2,
                "start_location": {
                    "alias": "LV",
                    "yardline": 15
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 15
                },
                "players": [{
                    "id": "d3e192b5-4523-4d65-94e0-a1fb164b6542",
                    "name": "Harvey Langi",
                    "jersey": "56",
                    "position": "LB",
                    "sr_id": "sr:player:1130349",
                    "role": "tackle"
                }]
            }],
            "quarter": {
                "id": "6c9fadba-e23e-4987-94d2-9b71423d3d4d",
                "number": 2,
                "sequence": 2
            }
        }, {
            "type": "play",
            "id": "23baa580-8a1e-11ed-9c65-6f281153d3a0",
            "sequence": 1672609796736.0,
            "clock": "11:32",
            "home_points": 10,
            "away_points": 7,
            "play_type": "rush",
            "wall_clock": "2023-01-01T21:49:50+00:00",
            "description": "K.Juszczyk rushed up the middle to LV 6 for 9 yards. Tackled by D.Harmon; T.Moehrig at LV 6.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T21:49:56+00:00",
            "updated_at": "2023-01-01T22:15:44+00:00",
            "start_situation": {
                "clock": "11:32",
                "down": 2,
                "yfd": 1,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 15
                }
            },
            "end_situation": {
                "clock": "10:52",
                "down": 1,
                "yfd": 6,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 6
                }
            },
            "statistics": [{
                "stat_type": "rush",
                "attempt": 1,
                "yards": 9,
                "firstdown": 1,
                "inside_20": 1,
                "goaltogo": 0,
                "broken_tackles": 0,
                "kneel_down": 0,
                "scramble": 0,
                "player": {
                    "id": "67da5b5c-0db9-4fbc-b98d-7eb8e97b69f6",
                    "name": "Kyle Juszczyk",
                    "jersey": "44",
                    "position": "FB",
                    "sr_id": "sr:player:829117"
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
                    "id": "c8f74b89-065c-4857-be4e-4fcf897a5bc0",
                    "name": "Tre'von Moehrig",
                    "jersey": "25",
                    "position": "SAF",
                    "sr_id": "sr:player:2197678"
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
                    "id": "a2802951-e573-4e8f-ad31-14b9ae5f8e7c",
                    "name": "Duron Harmon",
                    "jersey": "30",
                    "position": "SAF",
                    "sr_id": "sr:player:830945"
                },
                "team": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390"
                }
            }, {
                "stat_type": "first_down",
                "category": "rush",
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
                "description": "K.Juszczyk rushed up the middle to LV 6 for 9 yards.",
                "sequence": 0,
                "direction": "up the middle",
                "yards": 9,
                "result": "tackled",
                "start_location": {
                    "alias": "LV",
                    "yardline": 15
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 6
                },
                "players": [{
                    "id": "67da5b5c-0db9-4fbc-b98d-7eb8e97b69f6",
                    "name": "Kyle Juszczyk",
                    "jersey": "44",
                    "position": "FB",
                    "sr_id": "sr:player:829117",
                    "role": "rush"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by D.Harmon; T.Moehrig at LV 6.",
                "sequence": 1,
                "start_location": {
                    "alias": "LV",
                    "yardline": 6
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 6
                },
                "players": [{
                    "id": "a2802951-e573-4e8f-ad31-14b9ae5f8e7c",
                    "name": "Duron Harmon",
                    "jersey": "30",
                    "position": "SAF",
                    "sr_id": "sr:player:830945",
                    "role": "ast_tackle"
                }, {
                    "id": "c8f74b89-065c-4857-be4e-4fcf897a5bc0",
                    "name": "Tre'von Moehrig",
                    "jersey": "25",
                    "position": "SAF",
                    "sr_id": "sr:player:2197678",
                    "role": "ast_tackle"
                }]
            }, {
                "category": "first_down",
                "sequence": 2,
                "result": "rush",
                "start_location": {
                    "alias": "LV",
                    "yardline": 6
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 6
                },
                "players": []
            }],
            "quarter": {
                "id": "6c9fadba-e23e-4987-94d2-9b71423d3d4d",
                "number": 2,
                "sequence": 2
            }
        }, {
            "type": "play",
            "id": "49e80db0-8a1e-11ed-9c65-6f281153d3a0",
            "sequence": 1672609842210.0,
            "clock": "10:52",
            "home_points": 10,
            "away_points": 7,
            "play_type": "rush",
            "goaltogo": true,
            "wall_clock": "2023-01-01T21:50:30+00:00",
            "description": "C.McCaffrey rushed left guard to LV 1 for 5 yards. Tackled by D.Harmon, L.Masterson at LV 1.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T21:50:42+00:00",
            "updated_at": "2023-01-01T22:15:44+00:00",
            "start_situation": {
                "clock": "10:52",
                "down": 1,
                "yfd": 6,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 6
                }
            },
            "end_situation": {
                "clock": "10:30",
                "down": 2,
                "yfd": 1,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 1
                }
            },
            "statistics": [{
                "stat_type": "rush",
                "attempt": 1,
                "yards": 5,
                "firstdown": 0,
                "inside_20": 1,
                "goaltogo": 1,
                "broken_tackles": 0,
                "kneel_down": 0,
                "scramble": 0,
                "player": {
                    "id": "f96db0af-5e25-42d1-a07a-49b4e065b364",
                    "name": "Christian McCaffrey",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1129507"
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
                    "id": "a2802951-e573-4e8f-ad31-14b9ae5f8e7c",
                    "name": "Duron Harmon",
                    "jersey": "30",
                    "position": "SAF",
                    "sr_id": "sr:player:830945"
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
                    "id": "103ff970-d3a7-11ec-96a0-c3471a31202c",
                    "name": "Luke Masterson",
                    "jersey": "59",
                    "position": "LB",
                    "sr_id": "sr:player:1201174"
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
                "category": "rush",
                "description": "C.McCaffrey rushed left guard to LV 1 for 5 yards.",
                "sequence": 0,
                "direction": "left guard",
                "yards": 5,
                "result": "tackled",
                "start_location": {
                    "alias": "LV",
                    "yardline": 6
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 1
                },
                "players": [{
                    "id": "f96db0af-5e25-42d1-a07a-49b4e065b364",
                    "name": "Christian McCaffrey",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1129507",
                    "role": "rush"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by D.Harmon, L.Masterson at LV 1.",
                "sequence": 1,
                "start_location": {
                    "alias": "LV",
                    "yardline": 1
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 1
                },
                "players": [{
                    "id": "a2802951-e573-4e8f-ad31-14b9ae5f8e7c",
                    "name": "Duron Harmon",
                    "jersey": "30",
                    "position": "SAF",
                    "sr_id": "sr:player:830945",
                    "role": "tackle"
                }, {
                    "id": "103ff970-d3a7-11ec-96a0-c3471a31202c",
                    "name": "Luke Masterson",
                    "jersey": "59",
                    "position": "LB",
                    "sr_id": "sr:player:1201174",
                    "role": "ast_tackle"
                }]
            }],
            "quarter": {
                "id": "6c9fadba-e23e-4987-94d2-9b71423d3d4d",
                "number": 2,
                "sequence": 2
            }
        }, {
            "type": "play",
            "id": "56f4a900-8a1e-11ed-9c65-6f281153d3a0",
            "sequence": 1672609862213.0,
            "clock": "10:30",
            "home_points": 10,
            "away_points": 7,
            "play_type": "rush",
            "goaltogo": true,
            "wall_clock": "2023-01-01T21:50:54+00:00",
            "description": "C.McCaffrey rushed left tackle to LV 2 for -1 yards. Tackled by L.Masterson, C.Ferrell at LV 2.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T21:51:02+00:00",
            "updated_at": "2023-01-01T22:15:44+00:00",
            "start_situation": {
                "clock": "10:30",
                "down": 2,
                "yfd": 1,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 1
                }
            },
            "end_situation": {
                "clock": "9:45",
                "down": 3,
                "yfd": 2,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 2
                }
            },
            "statistics": [{
                "stat_type": "rush",
                "attempt": 1,
                "yards": -1,
                "firstdown": 0,
                "inside_20": 1,
                "goaltogo": 1,
                "tlost": 1,
                "tlost_yards": -1,
                "broken_tackles": 0,
                "kneel_down": 0,
                "scramble": 0,
                "player": {
                    "id": "f96db0af-5e25-42d1-a07a-49b4e065b364",
                    "name": "Christian McCaffrey",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1129507"
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
                "tlost": 1,
                "tlost_yards": 1,
                "category": "defense",
                "def_target": 0,
                "def_comp": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "batted_pass": 0,
                "player": {
                    "id": "103ff970-d3a7-11ec-96a0-c3471a31202c",
                    "name": "Luke Masterson",
                    "jersey": "59",
                    "position": "LB",
                    "sr_id": "sr:player:1201174"
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
                    "id": "108759bf-8c78-41c6-a409-b87c63985c21",
                    "name": "Clelin Ferrell",
                    "jersey": "99",
                    "position": "DE",
                    "sr_id": "sr:player:1217516"
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
                "category": "rush",
                "description": "C.McCaffrey rushed left tackle to LV 2 for -1 yards.",
                "sequence": 0,
                "direction": "left tackle",
                "yards": -1,
                "result": "tackled",
                "start_location": {
                    "alias": "LV",
                    "yardline": 1
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 2
                },
                "players": [{
                    "id": "f96db0af-5e25-42d1-a07a-49b4e065b364",
                    "name": "Christian McCaffrey",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1129507",
                    "role": "rush"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by L.Masterson, C.Ferrell at LV 2.",
                "sequence": 1,
                "start_location": {
                    "alias": "LV",
                    "yardline": 2
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 2
                },
                "players": [{
                    "id": "103ff970-d3a7-11ec-96a0-c3471a31202c",
                    "name": "Luke Masterson",
                    "jersey": "59",
                    "position": "LB",
                    "sr_id": "sr:player:1201174",
                    "role": "tackle"
                }, {
                    "id": "108759bf-8c78-41c6-a409-b87c63985c21",
                    "name": "Clelin Ferrell",
                    "jersey": "99",
                    "position": "DE",
                    "sr_id": "sr:player:1217516",
                    "role": "ast_tackle"
                }]
            }],
            "quarter": {
                "id": "6c9fadba-e23e-4987-94d2-9b71423d3d4d",
                "number": 2,
                "sequence": 2
            }
        }, {
            "type": "play",
            "id": "69072000-8a1e-11ed-9c65-6f281153d3a0",
            "sequence": 1672609937214.0,
            "clock": "9:45",
            "home_points": 10,
            "away_points": 13,
            "play_type": "pass",
            "scoring_play": true,
            "goaltogo": true,
            "wall_clock": "2023-01-01T21:51:41+00:00",
            "description": "B.Purdy pass short left complete to LV End Zone. Catch made by G.Kittle at LV End Zone. Gain of 2 yards. G.Kittle for 2 yards, TOUCHDOWN.",
            "scoring_description": "B.Purdy pass short left complete to LV End Zone. Catch made by G.Kittle at LV End Zone. Gain of 2 yards. G.Kittle for 2 yards, TOUCHDOWN.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T21:52:17+00:00",
            "updated_at": "2023-01-01T22:15:44+00:00",
            "start_situation": {
                "clock": "9:45",
                "down": 3,
                "yfd": 2,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 2
                }
            },
            "end_situation": {
                "clock": "9:38",
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
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 15
                }
            },
            "score": {
                "sequence": 7,
                "clock": "9:38",
                "points": 7,
                "home_points": 10,
                "away_points": 13,
                "points-after-play": {
                    "id": "8fdf9540-8a1e-11ed-9c65-6f281153d3a0",
                    "sequence": 1672609942226.0,
                    "type": "extra_point"
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 1,
                "yards": 2,
                "att_yards": 2,
                "firstdown": 1,
                "touchdown": 1,
                "inside_20": 1,
                "goaltogo": 1,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "on_target_throw": 0,
                "batted_pass": 0,
                "player": {
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461"
                },
                "team": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }, {
                "stat_type": "receive",
                "firstdown": 1,
                "touchdown": 1,
                "target": 1,
                "reception": 1,
                "yards": 2,
                "yards_after_catch": 0,
                "inside_20": 1,
                "goaltogo": 1,
                "catchable": 0,
                "player": {
                    "id": "2ada91b0-036e-454f-83c3-6d939ff584a9",
                    "name": "George Kittle",
                    "jersey": "85",
                    "position": "TE",
                    "sr_id": "sr:player:1130029"
                },
                "team": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }, {
                "stat_type": "down_conversion",
                "down": 3,
                "attempt": 1,
                "complete": 1,
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
                "player": {
                    "id": "2ada91b0-036e-454f-83c3-6d939ff584a9",
                    "name": "George Kittle",
                    "jersey": "85",
                    "position": "TE",
                    "sr_id": "sr:player:1130029"
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
                "category": "pass_completion",
                "description": "B.Purdy pass short left complete to LV End Zone.",
                "sequence": 0,
                "direction": "short left",
                "yards": 2,
                "start_location": {
                    "alias": "LV",
                    "yardline": 2
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 0
                },
                "players": [{
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461",
                    "role": "pass"
                }]
            }, {
                "category": "pass_reception",
                "description": "Catch made by G.Kittle at LV End Zone. Gain of 2 yards.",
                "sequence": 1,
                "yards": 2,
                "result": "touchdown",
                "start_location": {
                    "alias": "LV",
                    "yardline": 0
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 0
                },
                "players": [{
                    "id": "2ada91b0-036e-454f-83c3-6d939ff584a9",
                    "name": "George Kittle",
                    "jersey": "85",
                    "position": "TE",
                    "sr_id": "sr:player:1130029",
                    "role": "catch"
                }]
            }, {
                "category": "touchdown",
                "description": "G.Kittle for 2 yards, TOUCHDOWN.",
                "sequence": 2,
                "yards": 2,
                "result": "touchdown",
                "start_location": {
                    "alias": "LV",
                    "yardline": 0
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 0
                },
                "players": [{
                    "id": "2ada91b0-036e-454f-83c3-6d939ff584a9",
                    "name": "George Kittle",
                    "jersey": "85",
                    "position": "TE",
                    "sr_id": "sr:player:1130029",
                    "role": "catch"
                }]
            }, {
                "category": "third_down_conversion",
                "sequence": 3,
                "result": "good",
                "start_location": {
                    "alias": "LV",
                    "yardline": 0
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 0
                },
                "players": []
            }],
            "quarter": {
                "id": "6c9fadba-e23e-4987-94d2-9b71423d3d4d",
                "number": 2,
                "sequence": 2
            }
        }, {
            "type": "play",
            "id": "8fdf9540-8a1e-11ed-9c65-6f281153d3a0",
            "sequence": 1672609942226.0,
            "clock": "9:38",
            "home_points": 10,
            "away_points": 14,
            "play_type": "extra_point",
            "scoring_play": true,
            "wall_clock": "2023-01-01T21:52:20+00:00",
            "description": "R.Gould extra point is good.",
            "scoring_description": "B.Purdy pass short left complete to LV End Zone. Catch made by G.Kittle at LV End Zone. Gain of 2 yards. G.Kittle for 2 yards, TOUCHDOWN.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T21:52:22+00:00",
            "updated_at": "2023-01-01T22:15:44+00:00",
            "start_situation": {
                "clock": "9:38",
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
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 15
                }
            },
            "end_situation": {
                "clock": "9:38",
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
            "statistics": [{
                "stat_type": "extra_point",
                "attempt": 1,
                "made": 1,
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
            }],
            "details": [{
                "category": "extra_point_attempt",
                "description": "R.Gould extra point is good.",
                "sequence": 0,
                "result": "good",
                "start_location": {
                    "alias": "LV",
                    "yardline": 15
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 15
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
                "id": "6c9fadba-e23e-4987-94d2-9b71423d3d4d",
                "number": 2,
                "sequence": 2
            }
        }]
    }, {
        "id": "d977810d-b0bf-4ece-82d6-bba3c5dae830",
        "sequence": 7,
        "start_reason": "Punt",
        "end_reason": "Touchdown",
        "play_count": 8,
        "duration": "2:23",
        "first_downs": 4,
        "gain": 44,
        "penalty_yards": 0,
        "inside_20": true,
        "scoring_drive": true,
        "quarter": {
            "id": "6c9fadba-e23e-4987-94d2-9b71423d3d4d",
            "number": 2,
            "sequence": 2
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
            "id": "69d39060-8a21-11ed-9c65-6f281153d3a0",
            "sequence": 1672611210728.0,
            "clock": "2:33",
            "home_points": 10,
            "away_points": 14,
            "play_type": "rush",
            "wall_clock": "2023-01-01T22:13:20+00:00",
            "description": "J.Jacobs rushed right guard to SF 40 for 4 yards. Tackled by T.Hufanga at SF 40.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T22:13:30+00:00",
            "updated_at": "2023-01-01T22:16:04+00:00",
            "start_situation": {
                "clock": "2:33",
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
                    "yardline": 44
                }
            },
            "end_situation": {
                "clock": "2:00",
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
                    "yardline": 40
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
                "tackle": 1,
                "category": "defense",
                "def_target": 0,
                "def_comp": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "batted_pass": 0,
                "player": {
                    "id": "a1a2f797-77ac-4f13-8456-50a10a7fd61a",
                    "name": "Talanoa Hufanga",
                    "jersey": "29",
                    "position": "SAF",
                    "sr_id": "sr:player:1437360"
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
                "description": "J.Jacobs rushed right guard to SF 40 for 4 yards.",
                "sequence": 0,
                "direction": "right guard",
                "yards": 4,
                "result": "tackled",
                "start_location": {
                    "alias": "SF",
                    "yardline": 44
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 40
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
                "description": "Tackled by T.Hufanga at SF 40.",
                "sequence": 1,
                "start_location": {
                    "alias": "SF",
                    "yardline": 40
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 40
                },
                "players": [{
                    "id": "a1a2f797-77ac-4f13-8456-50a10a7fd61a",
                    "name": "Talanoa Hufanga",
                    "jersey": "29",
                    "position": "SAF",
                    "sr_id": "sr:player:1437360",
                    "role": "tackle"
                }]
            }],
            "quarter": {
                "id": "6c9fadba-e23e-4987-94d2-9b71423d3d4d",
                "number": 2,
                "sequence": 2
            }
        }, {
            "type": "play",
            "id": "cf8be880-8a21-11ed-9c65-6f281153d3a0",
            "sequence": 1672611424325.0,
            "clock": "2:00",
            "home_points": 10,
            "away_points": 14,
            "play_type": "pass",
            "wall_clock": "2023-01-01T22:16:55+00:00",
            "description": "J.Stidham pass short left complete to SF 33. Catch made by J.Jacobs at SF 33. Gain of 7 yards. Tackled by D.Lenoir at SF 33.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T22:17:04+00:00",
            "updated_at": "2023-01-01T22:19:04+00:00",
            "start_situation": {
                "clock": "2:00",
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
                    "yardline": 40
                }
            },
            "end_situation": {
                "clock": "1:21",
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
                    "yardline": 33
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 1,
                "yards": 7,
                "att_yards": 7,
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
                "yards": 7,
                "yards_after_catch": 0,
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
                    "id": "d24bbe70-baba-4337-822e-c166a156f92e",
                    "name": "Deommodore Lenoir",
                    "jersey": "38",
                    "position": "DB",
                    "sr_id": "sr:player:2198824"
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
                "description": "J.Stidham pass short left complete to SF 33.",
                "sequence": 0,
                "direction": "short left",
                "yards": 7,
                "start_location": {
                    "alias": "SF",
                    "yardline": 40
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 33
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
                "description": "Catch made by J.Jacobs at SF 33. Gain of 7 yards.",
                "sequence": 1,
                "yards": 7,
                "result": "tackled",
                "start_location": {
                    "alias": "SF",
                    "yardline": 33
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 33
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
                "description": "Tackled by D.Lenoir at SF 33.",
                "sequence": 2,
                "start_location": {
                    "alias": "SF",
                    "yardline": 33
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 33
                },
                "players": [{
                    "id": "d24bbe70-baba-4337-822e-c166a156f92e",
                    "name": "Deommodore Lenoir",
                    "jersey": "38",
                    "position": "DB",
                    "sr_id": "sr:player:2198824",
                    "role": "tackle"
                }]
            }, {
                "category": "first_down",
                "sequence": 3,
                "result": "pass",
                "start_location": {
                    "alias": "SF",
                    "yardline": 33
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 33
                },
                "players": []
            }],
            "quarter": {
                "id": "6c9fadba-e23e-4987-94d2-9b71423d3d4d",
                "number": 2,
                "sequence": 2
            }
        }, {
            "type": "play",
            "id": "1594d530-8a22-11ed-9c65-6f281153d3a0",
            "sequence": 1672611460250.0,
            "clock": "1:21",
            "home_points": 10,
            "away_points": 14,
            "play_type": "rush",
            "wall_clock": "2023-01-01T22:17:33+00:00",
            "description": "J.Jacobs rushed left guard to SF 28 for 5 yards. Tackled by T.Hufanga; F.Warner at SF 28.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T22:17:40+00:00",
            "updated_at": "2023-01-01T22:19:33+00:00",
            "start_situation": {
                "clock": "1:21",
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
                    "yardline": 33
                }
            },
            "end_situation": {
                "clock": "00:53",
                "down": 2,
                "yfd": 5,
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
                    "yardline": 28
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
                    "id": "a1a2f797-77ac-4f13-8456-50a10a7fd61a",
                    "name": "Talanoa Hufanga",
                    "jersey": "29",
                    "position": "SAF",
                    "sr_id": "sr:player:1437360"
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
                "description": "J.Jacobs rushed left guard to SF 28 for 5 yards.",
                "sequence": 0,
                "direction": "left guard",
                "yards": 5,
                "result": "tackled",
                "start_location": {
                    "alias": "SF",
                    "yardline": 33
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 28
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
                "description": "Tackled by T.Hufanga; F.Warner at SF 28.",
                "sequence": 1,
                "start_location": {
                    "alias": "SF",
                    "yardline": 28
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 28
                },
                "players": [{
                    "id": "a1a2f797-77ac-4f13-8456-50a10a7fd61a",
                    "name": "Talanoa Hufanga",
                    "jersey": "29",
                    "position": "SAF",
                    "sr_id": "sr:player:1437360",
                    "role": "ast_tackle"
                }, {
                    "id": "75a74283-5ab6-49d4-bf2f-e6fcaf91ec36",
                    "name": "Fred Warner",
                    "jersey": "54",
                    "position": "LB",
                    "sr_id": "sr:player:1198502",
                    "role": "ast_tackle"
                }]
            }],
            "quarter": {
                "id": "6c9fadba-e23e-4987-94d2-9b71423d3d4d",
                "number": 2,
                "sequence": 2
            }
        }, {
            "type": "play",
            "id": "1b795110-8a22-11ed-9c65-6f281153d3a0",
            "sequence": 1672611491439.0,
            "clock": "00:53",
            "home_points": 10,
            "away_points": 14,
            "play_type": "pass",
            "wall_clock": "2023-01-01T22:18:03+00:00",
            "description": "J.Stidham pass short right complete to SF 25. Catch made by H.Renfrow at SF 25. Gain of 12 yards. Tackled by J.Ward at SF 16.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T22:18:11+00:00",
            "updated_at": "2023-01-01T22:19:59+00:00",
            "start_situation": {
                "clock": "00:53",
                "down": 2,
                "yfd": 5,
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
                    "yardline": 28
                }
            },
            "end_situation": {
                "clock": "00:45",
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
                    "yardline": 16
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 1,
                "yards": 12,
                "att_yards": 3,
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
                "yards": 12,
                "yards_after_catch": 9,
                "inside_20": 0,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "34c523c7-bc58-49f0-a9cc-f9edd91fe00f",
                    "name": "Hunter Renfrow",
                    "jersey": "13",
                    "position": "WR",
                    "sr_id": "sr:player:1219084"
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
                    "id": "1b8414b5-3db8-4e89-8bcc-7ac7f7d0b931",
                    "name": "Jimmie Ward",
                    "jersey": "01",
                    "position": "DB",
                    "sr_id": "sr:player:829883"
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
                "description": "J.Stidham pass short right complete to SF 25.",
                "sequence": 0,
                "direction": "short right",
                "yards": 12,
                "start_location": {
                    "alias": "SF",
                    "yardline": 28
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 25
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
                "description": "Catch made by H.Renfrow at SF 25. Gain of 12 yards.",
                "sequence": 1,
                "yards": 12,
                "result": "tackled",
                "start_location": {
                    "alias": "SF",
                    "yardline": 25
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 16
                },
                "players": [{
                    "id": "34c523c7-bc58-49f0-a9cc-f9edd91fe00f",
                    "name": "Hunter Renfrow",
                    "jersey": "13",
                    "position": "WR",
                    "sr_id": "sr:player:1219084",
                    "role": "catch"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by J.Ward at SF 16.",
                "sequence": 2,
                "start_location": {
                    "alias": "SF",
                    "yardline": 16
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 16
                },
                "players": [{
                    "id": "1b8414b5-3db8-4e89-8bcc-7ac7f7d0b931",
                    "name": "Jimmie Ward",
                    "jersey": "01",
                    "position": "DB",
                    "sr_id": "sr:player:829883",
                    "role": "tackle"
                }]
            }, {
                "category": "first_down",
                "sequence": 3,
                "result": "pass",
                "start_location": {
                    "alias": "SF",
                    "yardline": 16
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 16
                },
                "players": []
            }],
            "quarter": {
                "id": "6c9fadba-e23e-4987-94d2-9b71423d3d4d",
                "number": 2,
                "sequence": 2
            }
        }, {
            "type": "play",
            "id": "38ccf230-8a22-11ed-9c65-6f281153d3a0",
            "sequence": 1672611561708.0,
            "clock": "00:45",
            "home_points": 10,
            "away_points": 14,
            "play_type": "pass",
            "wall_clock": "2023-01-01T22:19:12+00:00",
            "description": "J.Stidham pass short left complete to SF 16. Catch made by M.Hollins at SF 16. Gain of 8 yards. Tackled by J.Ward at SF 8.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T22:19:21+00:00",
            "updated_at": "2023-01-01T22:29:33+00:00",
            "start_situation": {
                "clock": "00:45",
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
                    "yardline": 16
                }
            },
            "end_situation": {
                "clock": "00:26",
                "down": 2,
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
                    "yardline": 8
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 1,
                "yards": 8,
                "att_yards": 0,
                "firstdown": 0,
                "inside_20": 1,
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
                "firstdown": 0,
                "target": 1,
                "reception": 1,
                "yards": 8,
                "yards_after_catch": 8,
                "inside_20": 1,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "93cb5790-1012-4c42-bccb-5748c27ba7d6",
                    "name": "Mack Hollins",
                    "jersey": "10",
                    "position": "WR",
                    "sr_id": "sr:player:1129973"
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
                    "id": "1b8414b5-3db8-4e89-8bcc-7ac7f7d0b931",
                    "name": "Jimmie Ward",
                    "jersey": "01",
                    "position": "DB",
                    "sr_id": "sr:player:829883"
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
                "qb_hit": 1,
                "def_target": 0,
                "def_comp": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "batted_pass": 0,
                "player": {
                    "id": "07c51c65-489b-4bae-b997-f1a0f35deffe",
                    "name": "T.Y. McGill",
                    "jersey": "96",
                    "position": "DT",
                    "sr_id": "sr:player:855240"
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
                "category": "pass_completion",
                "description": "J.Stidham pass short left complete to SF 16.",
                "sequence": 0,
                "direction": "short left",
                "yards": 8,
                "start_location": {
                    "alias": "SF",
                    "yardline": 16
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 16
                },
                "players": [{
                    "id": "582fe465-135a-4901-beef-60aebce99067",
                    "name": "Jarrett Stidham",
                    "jersey": "03",
                    "position": "QB",
                    "sr_id": "sr:player:1232264",
                    "role": "pass"
                }, {
                    "id": "07c51c65-489b-4bae-b997-f1a0f35deffe",
                    "name": "T.Y. McGill",
                    "jersey": "96",
                    "position": "DT",
                    "sr_id": "sr:player:855240",
                    "role": "hit"
                }]
            }, {
                "category": "pass_reception",
                "description": "Catch made by M.Hollins at SF 16. Gain of 8 yards.",
                "sequence": 1,
                "yards": 8,
                "result": "tackled",
                "start_location": {
                    "alias": "SF",
                    "yardline": 16
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 8
                },
                "players": [{
                    "id": "93cb5790-1012-4c42-bccb-5748c27ba7d6",
                    "name": "Mack Hollins",
                    "jersey": "10",
                    "position": "WR",
                    "sr_id": "sr:player:1129973",
                    "role": "catch"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by J.Ward at SF 8.",
                "sequence": 2,
                "start_location": {
                    "alias": "SF",
                    "yardline": 8
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 8
                },
                "players": [{
                    "id": "1b8414b5-3db8-4e89-8bcc-7ac7f7d0b931",
                    "name": "Jimmie Ward",
                    "jersey": "01",
                    "position": "DB",
                    "sr_id": "sr:player:829883",
                    "role": "tackle"
                }]
            }],
            "quarter": {
                "id": "6c9fadba-e23e-4987-94d2-9b71423d3d4d",
                "number": 2,
                "sequence": 2
            }
        }, {
            "type": "play",
            "id": "5803f950-8a22-11ed-9c65-6f281153d3a0",
            "sequence": 1672611578435.0,
            "clock": "00:26",
            "home_points": 10,
            "away_points": 14,
            "play_type": "pass",
            "wall_clock": "2023-01-01T22:19:32+00:00",
            "description": "J.Stidham steps back to pass. J.Stidham pass incomplete short left intended for D.Waller.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T22:19:38+00:00",
            "updated_at": "2023-01-01T22:29:33+00:00",
            "start_situation": {
                "clock": "00:26",
                "down": 2,
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
                    "yardline": 8
                }
            },
            "end_situation": {
                "clock": "00:22",
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
                    "yardline": 8
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 0,
                "att_yards": 4,
                "firstdown": 0,
                "inside_20": 1,
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
                "firstdown": 0,
                "target": 1,
                "inside_20": 1,
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
            }],
            "details": [{
                "category": "pass",
                "description": "J.Stidham steps back to pass.",
                "sequence": 0,
                "start_location": {
                    "alias": "SF",
                    "yardline": 8
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 8
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
                "category": "pass_incompletion",
                "description": "J.Stidham pass incomplete short left intended for D.Waller.",
                "sequence": 1,
                "direction": "short left",
                "start_location": {
                    "alias": "SF",
                    "yardline": 8
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 4
                },
                "players": [{
                    "id": "14c97c9f-26e8-4944-9299-f90de6aeada3",
                    "name": "Darren Waller",
                    "jersey": "83",
                    "position": "TE",
                    "sr_id": "sr:player:835255",
                    "role": "receive"
                }, {
                    "id": "582fe465-135a-4901-beef-60aebce99067",
                    "name": "Jarrett Stidham",
                    "jersey": "03",
                    "position": "QB",
                    "sr_id": "sr:player:1232264",
                    "role": "pass"
                }]
            }],
            "quarter": {
                "id": "6c9fadba-e23e-4987-94d2-9b71423d3d4d",
                "number": 2,
                "sequence": 2
            }
        }, {
            "type": "play",
            "id": "62df5cc0-8a22-11ed-9c65-6f281153d3a0",
            "sequence": 1672611625041.0,
            "clock": "00:22",
            "home_points": 10,
            "away_points": 14,
            "play_type": "rush",
            "wall_clock": "2023-01-01T22:20:18+00:00",
            "description": "J.Stidham scrambles left tackle to SF 4 for 4 yards. Tackled by C.Ward; D.Greenlaw at SF 4.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T22:20:25+00:00",
            "updated_at": "2023-01-01T22:29:33+00:00",
            "start_situation": {
                "clock": "00:22",
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
                    "yardline": 8
                }
            },
            "end_situation": {
                "clock": "00:15",
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
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389",
                    "yardline": 4
                }
            },
            "statistics": [{
                "stat_type": "rush",
                "attempt": 1,
                "yards": 4,
                "firstdown": 1,
                "inside_20": 1,
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
                    "id": "04f6abef-834f-470e-9c15-8c0cc62fde4e",
                    "name": "Charvarius Ward",
                    "jersey": "07",
                    "position": "CB",
                    "sr_id": "sr:player:1183160"
                },
                "team": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
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
                "category": "rush",
                "team": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390"
                }
            }],
            "details": [{
                "category": "scramble",
                "description": "J.Stidham scrambles left tackle to SF 4 for 4 yards.",
                "sequence": 0,
                "direction": "left tackle",
                "yards": 4,
                "start_location": {
                    "alias": "SF",
                    "yardline": 8
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 4
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
                "description": "Tackled by C.Ward; D.Greenlaw at SF 4.",
                "sequence": 1,
                "start_location": {
                    "alias": "SF",
                    "yardline": 4
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 4
                },
                "players": [{
                    "id": "04f6abef-834f-470e-9c15-8c0cc62fde4e",
                    "name": "Charvarius Ward",
                    "jersey": "07",
                    "position": "CB",
                    "sr_id": "sr:player:1183160",
                    "role": "ast_tackle"
                }, {
                    "id": "e6eb9d50-9231-44ff-89eb-7f7b996e042f",
                    "name": "Dre Greenlaw",
                    "jersey": "57",
                    "position": "LB",
                    "sr_id": "sr:player:1833944",
                    "role": "ast_tackle"
                }]
            }, {
                "category": "first_down",
                "sequence": 2,
                "result": "rush",
                "start_location": {
                    "alias": "SF",
                    "yardline": 4
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 4
                },
                "players": []
            }, {
                "category": "third_down_conversion",
                "sequence": 3,
                "result": "good",
                "start_location": {
                    "alias": "SF",
                    "yardline": 4
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 4
                },
                "players": []
            }],
            "quarter": {
                "id": "6c9fadba-e23e-4987-94d2-9b71423d3d4d",
                "number": 2,
                "sequence": 2
            }
        }, {
            "type": "play",
            "id": "96862bd0-8a22-11ed-9c65-6f281153d3a0",
            "sequence": 1672611776384.0,
            "clock": "00:15",
            "home_points": 16,
            "away_points": 14,
            "play_type": "pass",
            "scoring_play": true,
            "goaltogo": true,
            "wall_clock": "2023-01-01T22:21:32+00:00",
            "description": "J.Stidham pass short left complete to SF End Zone. Catch made by D.Adams at SF End Zone. Gain of 4 yards. D.Adams for 4 yards, TOUCHDOWN.",
            "scoring_description": "J.Stidham pass short left complete to SF End Zone. Catch made by D.Adams at SF End Zone. Gain of 4 yards. D.Adams for 4 yards, TOUCHDOWN.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T22:22:56+00:00",
            "updated_at": "2023-01-01T22:29:33+00:00",
            "start_situation": {
                "clock": "00:15",
                "down": 1,
                "yfd": 4,
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
                    "yardline": 4
                }
            },
            "end_situation": {
                "clock": "00:10",
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
                "sequence": 9,
                "clock": "00:10",
                "points": 7,
                "home_points": 16,
                "away_points": 14,
                "points-after-play": {
                    "id": "d7f45ab0-8a22-11ed-9c65-6f281153d3a0",
                    "sequence": 1672611783102.0,
                    "type": "extra_point"
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 1,
                "yards": 4,
                "att_yards": 4,
                "firstdown": 1,
                "touchdown": 1,
                "inside_20": 1,
                "goaltogo": 1,
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
                "yards": 4,
                "yards_after_catch": 0,
                "inside_20": 1,
                "goaltogo": 1,
                "catchable": 0,
                "player": {
                    "id": "e7d6ae25-bf15-4660-8b37-c37716551de3",
                    "name": "Davante Adams",
                    "jersey": "17",
                    "position": "WR",
                    "sr_id": "sr:player:831457"
                },
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
                    "id": "e7d6ae25-bf15-4660-8b37-c37716551de3",
                    "name": "Davante Adams",
                    "jersey": "17",
                    "position": "WR",
                    "sr_id": "sr:player:831457"
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
                "description": "J.Stidham pass short left complete to SF End Zone.",
                "sequence": 0,
                "direction": "short left",
                "yards": 4,
                "start_location": {
                    "alias": "SF",
                    "yardline": 4
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 0
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
                "description": "Catch made by D.Adams at SF End Zone. Gain of 4 yards.",
                "sequence": 1,
                "yards": 4,
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
                    "id": "e7d6ae25-bf15-4660-8b37-c37716551de3",
                    "name": "Davante Adams",
                    "jersey": "17",
                    "position": "WR",
                    "sr_id": "sr:player:831457",
                    "role": "catch"
                }]
            }, {
                "category": "touchdown",
                "description": "D.Adams for 4 yards, TOUCHDOWN.",
                "sequence": 2,
                "yards": 4,
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
                    "id": "e7d6ae25-bf15-4660-8b37-c37716551de3",
                    "name": "Davante Adams",
                    "jersey": "17",
                    "position": "WR",
                    "sr_id": "sr:player:831457",
                    "role": "catch"
                }]
            }],
            "quarter": {
                "id": "6c9fadba-e23e-4987-94d2-9b71423d3d4d",
                "number": 2,
                "sequence": 2
            }
        }, {
            "type": "play",
            "id": "d7f45ab0-8a22-11ed-9c65-6f281153d3a0",
            "sequence": 1672611783102.0,
            "clock": "00:10",
            "home_points": 17,
            "away_points": 14,
            "play_type": "extra_point",
            "scoring_play": true,
            "wall_clock": "2023-01-01T22:23:01+00:00",
            "description": "D.Carlson extra point is good.",
            "scoring_description": "J.Stidham pass short left complete to SF End Zone. Catch made by D.Adams at SF End Zone. Gain of 4 yards. D.Adams for 4 yards, TOUCHDOWN.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T22:23:03+00:00",
            "updated_at": "2023-01-01T22:29:33+00:00",
            "start_situation": {
                "clock": "00:10",
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
                "clock": "00:10",
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
                "id": "6c9fadba-e23e-4987-94d2-9b71423d3d4d",
                "number": 2,
                "sequence": 2
            }
        }]
    }, {
        "id": "e3d909e8-2fdb-4ff9-af47-82528845a44a",
        "sequence": 10,
        "start_reason": "Punt",
        "end_reason": "Touchdown",
        "play_count": 6,
        "duration": "2:54",
        "first_downs": 2,
        "gain": 70,
        "penalty_yards": 15,
        "scoring_drive": true,
        "quarter": {
            "id": "6d257af9-0e2a-4233-8f0e-bb961745455d",
            "number": 3,
            "sequence": 3
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
            "id": "a9ec6ba0-8a25-11ed-9c65-6f281153d3a0",
            "sequence": 1672613106104.0,
            "clock": "13:16",
            "home_points": 17,
            "away_points": 14,
            "play_type": "rush",
            "wall_clock": "2023-01-01T22:45:03+00:00",
            "description": "J.Stidham FUMBLES (aborted). Fumble RECOVERED by LV-J.Stidham at LV 15.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T22:45:06+00:00",
            "updated_at": "2023-01-01T22:47:56+00:00",
            "start_situation": {
                "clock": "13:16",
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
                    "yardline": 16
                }
            },
            "end_situation": {
                "clock": "12:35",
                "down": 2,
                "yfd": 12,
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
                    "yardline": 15
                }
            },
            "statistics": [{
                "stat_type": "rush",
                "attempt": 1,
                "yards": 0,
                "firstdown": 0,
                "inside_20": 0,
                "goaltogo": 0,
                "broken_tackles": 0,
                "kneel_down": 0,
                "scramble": 0,
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
                "stat_type": "fumble",
                "fumble": 1,
                "forced": 0,
                "own_rec": 1,
                "own_rec_yards": 0,
                "play_category": "misc",
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
            }],
            "details": [{
                "category": "aborted_snap",
                "description": "J.Stidham FUMBLES (aborted).",
                "sequence": 0,
                "start_location": {
                    "alias": "LV",
                    "yardline": 15
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 15
                },
                "players": [{
                    "id": "582fe465-135a-4901-beef-60aebce99067",
                    "name": "Jarrett Stidham",
                    "jersey": "03",
                    "position": "QB",
                    "sr_id": "sr:player:1232264",
                    "role": "fumble"
                }]
            }, {
                "category": "own_aborted_snap_recovery",
                "description": "Fumble RECOVERED by LV-J.Stidham at LV 15.",
                "sequence": 1,
                "start_location": {
                    "alias": "LV",
                    "yardline": 15
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 15
                },
                "players": [{
                    "id": "582fe465-135a-4901-beef-60aebce99067",
                    "name": "Jarrett Stidham",
                    "jersey": "03",
                    "position": "QB",
                    "sr_id": "sr:player:1232264",
                    "role": "fum_rec"
                }]
            }],
            "quarter": {
                "id": "6d257af9-0e2a-4233-8f0e-bb961745455d",
                "number": 3,
                "sequence": 3
            }
        }, {
            "type": "play",
            "id": "fb228540-8a25-11ed-9c65-6f281153d3a0",
            "sequence": 1672613141514.0,
            "clock": "12:35",
            "home_points": 17,
            "away_points": 14,
            "play_type": "pass",
            "wall_clock": "2023-01-01T22:45:37+00:00",
            "description": "J.Stidham steps back to pass. J.Stidham pass incomplete short left intended for J.Jacobs.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T22:45:41+00:00",
            "updated_at": "2023-01-01T22:48:48+00:00",
            "start_situation": {
                "clock": "12:35",
                "down": 2,
                "yfd": 11,
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
                    "yardline": 15
                }
            },
            "end_situation": {
                "clock": "12:22",
                "down": 3,
                "yfd": 11,
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
                    "yardline": 15
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 0,
                "att_yards": 2,
                "firstdown": 0,
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
                "firstdown": 0,
                "target": 1,
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
                "qb_hit": 1,
                "def_target": 0,
                "def_comp": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "batted_pass": 0,
                "player": {
                    "id": "d24bbe70-baba-4337-822e-c166a156f92e",
                    "name": "Deommodore Lenoir",
                    "jersey": "38",
                    "position": "DB",
                    "sr_id": "sr:player:2198824"
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
                "category": "pass",
                "description": "J.Stidham steps back to pass.",
                "sequence": 0,
                "start_location": {
                    "alias": "LV",
                    "yardline": 15
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 15
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
                "category": "pass_incompletion",
                "description": "J.Stidham pass incomplete short left intended for J.Jacobs.",
                "sequence": 1,
                "direction": "short left",
                "start_location": {
                    "alias": "LV",
                    "yardline": 15
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 17
                },
                "players": [{
                    "id": "61694ab9-b099-408e-b48d-6a643dd069ec",
                    "name": "Josh Jacobs",
                    "jersey": "28",
                    "position": "RB",
                    "sr_id": "sr:player:1216962",
                    "role": "receive"
                }, {
                    "id": "582fe465-135a-4901-beef-60aebce99067",
                    "name": "Jarrett Stidham",
                    "jersey": "03",
                    "position": "QB",
                    "sr_id": "sr:player:1232264",
                    "role": "pass"
                }, {
                    "id": "d24bbe70-baba-4337-822e-c166a156f92e",
                    "name": "Deommodore Lenoir",
                    "jersey": "38",
                    "position": "DB",
                    "sr_id": "sr:player:2198824",
                    "role": "hit"
                }]
            }],
            "quarter": {
                "id": "6d257af9-0e2a-4233-8f0e-bb961745455d",
                "number": 3,
                "sequence": 3
            }
        }, {
            "type": "play",
            "id": "05621de0-8a26-11ed-9c65-6f281153d3a0",
            "sequence": 1672613184910.0,
            "clock": "12:22",
            "home_points": 17,
            "away_points": 14,
            "play_type": "pass",
            "wall_clock": "2023-01-01T22:46:17+00:00",
            "description": "J.Stidham pass short left complete to LV 13. Catch made by H.Renfrow at LV 13. Gain of 4 yards. Tackled by F.Warner at LV 19.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T22:46:24+00:00",
            "updated_at": "2023-01-01T22:51:37+00:00",
            "start_situation": {
                "clock": "12:22",
                "down": 3,
                "yfd": 11,
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
                    "yardline": 15
                }
            },
            "end_situation": {
                "clock": "12:22",
                "down": 4,
                "yfd": 7,
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
                    "yardline": 19
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 1,
                "yards": 4,
                "att_yards": -2,
                "firstdown": 0,
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
                "firstdown": 0,
                "target": 1,
                "reception": 1,
                "yards": 4,
                "yards_after_catch": 6,
                "inside_20": 0,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "34c523c7-bc58-49f0-a9cc-f9edd91fe00f",
                    "name": "Hunter Renfrow",
                    "jersey": "13",
                    "position": "WR",
                    "sr_id": "sr:player:1219084"
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
            }, {
                "stat_type": "down_conversion",
                "down": 3,
                "attempt": 1,
                "complete": 0,
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
                "description": "J.Stidham pass short left complete to LV 13.",
                "sequence": 0,
                "direction": "short left",
                "yards": 4,
                "start_location": {
                    "alias": "LV",
                    "yardline": 15
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 13
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
                "description": "Catch made by H.Renfrow at LV 13. Gain of 4 yards.",
                "sequence": 1,
                "yards": 4,
                "result": "tackled",
                "start_location": {
                    "alias": "LV",
                    "yardline": 13
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 19
                },
                "players": [{
                    "id": "34c523c7-bc58-49f0-a9cc-f9edd91fe00f",
                    "name": "Hunter Renfrow",
                    "jersey": "13",
                    "position": "WR",
                    "sr_id": "sr:player:1219084",
                    "role": "catch"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by F.Warner at LV 19.",
                "sequence": 2,
                "start_location": {
                    "alias": "LV",
                    "yardline": 19
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 19
                },
                "players": [{
                    "id": "75a74283-5ab6-49d4-bf2f-e6fcaf91ec36",
                    "name": "Fred Warner",
                    "jersey": "54",
                    "position": "LB",
                    "sr_id": "sr:player:1198502",
                    "role": "tackle"
                }]
            }, {
                "category": "third_down_conversion",
                "sequence": 3,
                "result": "missed",
                "start_location": {
                    "alias": "LV",
                    "yardline": 19
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 19
                },
                "players": []
            }],
            "quarter": {
                "id": "6d257af9-0e2a-4233-8f0e-bb961745455d",
                "number": 3,
                "sequence": 3
            }
        }, {
            "type": "play",
            "id": "aee6b920-8a26-11ed-8ca3-2165a4c8ecba",
            "sequence": 1672613217584.0,
            "clock": "12:22",
            "home_points": 17,
            "away_points": 14,
            "play_type": "penalty",
            "wall_clock": "2023-01-01T22:50:30+00:00",
            "description": "PENALTY on SF-F.Warner, Face Mask (15 Yards), 15 yards, accepted. No Play.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T22:50:40+00:00",
            "updated_at": "2023-01-01T22:52:14+00:00",
            "start_situation": {
                "clock": "12:22",
                "down": 4,
                "yfd": 7,
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
                    "yardline": 19
                }
            },
            "end_situation": {
                "clock": "10:22",
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
                    "yardline": 34
                }
            },
            "statistics": [{
                "stat_type": "penalty",
                "penalty": 1,
                "yards": 15,
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
            }, {
                "stat_type": "first_down",
                "category": "penalty",
                "team": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390"
                }
            }],
            "details": [{
                "category": "penalty",
                "description": "PENALTY on SF-F.Warner, Face Mask (15 Yards), 15 yards, accepted.",
                "sequence": 0,
                "start_location": {
                    "alias": "LV",
                    "yardline": 19
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 34
                },
                "penalty": {
                    "description": "Face Mask (15 Yards)",
                    "result": "accepted",
                    "yards": 15,
                    "team": {
                        "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                        "name": "49ers",
                        "market": "San Francisco",
                        "alias": "SF",
                        "sr_id": "sr:competitor:4389"
                    }
                },
                "players": [{
                    "id": "75a74283-5ab6-49d4-bf2f-e6fcaf91ec36",
                    "name": "Fred Warner",
                    "jersey": "54",
                    "position": "LB",
                    "sr_id": "sr:player:1198502",
                    "role": "penalty"
                }]
            }, {
                "category": "no_play",
                "description": "No Play.",
                "sequence": 1,
                "start_location": {
                    "alias": "LV",
                    "yardline": 34
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 34
                },
                "players": []
            }, {
                "category": "first_down",
                "sequence": 2,
                "result": "penalty",
                "start_location": {
                    "alias": "LV",
                    "yardline": 34
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 34
                },
                "players": []
            }],
            "quarter": {
                "id": "6d257af9-0e2a-4233-8f0e-bb961745455d",
                "number": 3,
                "sequence": 3
            }
        }, {
            "type": "play",
            "id": "33a2c8d0-8a26-11ed-9c65-6f281153d3a0",
            "sequence": 1672613250258.0,
            "clock": "12:04",
            "home_points": 17,
            "away_points": 14,
            "play_type": "pass",
            "wall_clock": "2023-01-01T22:47:21+00:00",
            "description": "J.Stidham pass short left complete to LV 32. Catch made by H.Renfrow at LV 32. Gain of 3 yards. Tackled by C.Ward; T.Hufanga at LV 37.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T22:47:30+00:00",
            "updated_at": "2023-01-01T22:50:21+00:00",
            "start_situation": {
                "clock": "12:04",
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
                    "yardline": 34
                }
            },
            "end_situation": {
                "clock": "11:19",
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
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 37
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 1,
                "yards": 3,
                "att_yards": -2,
                "firstdown": 0,
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
                "firstdown": 0,
                "target": 1,
                "reception": 1,
                "yards": 3,
                "yards_after_catch": 5,
                "inside_20": 0,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "34c523c7-bc58-49f0-a9cc-f9edd91fe00f",
                    "name": "Hunter Renfrow",
                    "jersey": "13",
                    "position": "WR",
                    "sr_id": "sr:player:1219084"
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
                    "id": "04f6abef-834f-470e-9c15-8c0cc62fde4e",
                    "name": "Charvarius Ward",
                    "jersey": "07",
                    "position": "CB",
                    "sr_id": "sr:player:1183160"
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
                    "id": "a1a2f797-77ac-4f13-8456-50a10a7fd61a",
                    "name": "Talanoa Hufanga",
                    "jersey": "29",
                    "position": "SAF",
                    "sr_id": "sr:player:1437360"
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
                "category": "pass_completion",
                "description": "J.Stidham pass short left complete to LV 32.",
                "sequence": 0,
                "direction": "short left",
                "yards": 3,
                "start_location": {
                    "alias": "LV",
                    "yardline": 34
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 32
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
                "description": "Catch made by H.Renfrow at LV 32. Gain of 3 yards.",
                "sequence": 1,
                "yards": 3,
                "result": "tackled",
                "start_location": {
                    "alias": "LV",
                    "yardline": 32
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 37
                },
                "players": [{
                    "id": "34c523c7-bc58-49f0-a9cc-f9edd91fe00f",
                    "name": "Hunter Renfrow",
                    "jersey": "13",
                    "position": "WR",
                    "sr_id": "sr:player:1219084",
                    "role": "catch"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by C.Ward; T.Hufanga at LV 37.",
                "sequence": 2,
                "start_location": {
                    "alias": "LV",
                    "yardline": 37
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 37
                },
                "players": [{
                    "id": "04f6abef-834f-470e-9c15-8c0cc62fde4e",
                    "name": "Charvarius Ward",
                    "jersey": "07",
                    "position": "CB",
                    "sr_id": "sr:player:1183160",
                    "role": "ast_tackle"
                }, {
                    "id": "a1a2f797-77ac-4f13-8456-50a10a7fd61a",
                    "name": "Talanoa Hufanga",
                    "jersey": "29",
                    "position": "SAF",
                    "sr_id": "sr:player:1437360",
                    "role": "ast_tackle"
                }]
            }],
            "quarter": {
                "id": "6d257af9-0e2a-4233-8f0e-bb961745455d",
                "number": 3,
                "sequence": 3
            }
        }, {
            "type": "play",
            "id": "46b8cd20-8a26-11ed-9c65-6f281153d3a0",
            "sequence": 1672613294410.0,
            "clock": "11:19",
            "home_points": 17,
            "away_points": 14,
            "play_type": "rush",
            "wall_clock": "2023-01-01T22:48:07+00:00",
            "description": "J.Jacobs rushed up the middle to LV 40 for 3 yards. Tackled by F.Warner at LV 40.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T22:48:14+00:00",
            "updated_at": "2023-01-01T22:50:54+00:00",
            "start_situation": {
                "clock": "11:19",
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
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 37
                }
            },
            "end_situation": {
                "clock": "10:34",
                "down": 3,
                "yfd": 4,
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
                    "yardline": 40
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
                "category": "rush",
                "description": "J.Jacobs rushed up the middle to LV 40 for 3 yards.",
                "sequence": 0,
                "direction": "up the middle",
                "yards": 3,
                "result": "tackled",
                "start_location": {
                    "alias": "LV",
                    "yardline": 37
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 40
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
                "description": "Tackled by F.Warner at LV 40.",
                "sequence": 1,
                "start_location": {
                    "alias": "LV",
                    "yardline": 40
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 40
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
                "id": "6d257af9-0e2a-4233-8f0e-bb961745455d",
                "number": 3,
                "sequence": 3
            }
        }, {
            "type": "play",
            "id": "608dced0-8a26-11ed-9c65-6f281153d3a0",
            "sequence": 1672613382844.0,
            "clock": "10:34",
            "home_points": 23,
            "away_points": 14,
            "play_type": "pass",
            "scoring_play": true,
            "wall_clock": "2023-01-01T22:48:57+00:00",
            "description": "J.Stidham pass deep left complete to SF 35. Catch made by D.Adams at SF 35. Gain of 60 yards. D.Adams for 60 yards, TOUCHDOWN. PENALTY on SF-C.Ward, Illegal Contact, 5 yards, declined.",
            "scoring_description": "J.Stidham pass deep left complete to SF 35. Catch made by D.Adams at SF 35. Gain of 60 yards. D.Adams for 60 yards, TOUCHDOWN. PENALTY on SF-C.Ward, Illegal Contact, 5 yards, declined.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T22:49:42+00:00",
            "updated_at": "2023-01-01T22:52:23+00:00",
            "start_situation": {
                "clock": "10:34",
                "down": 3,
                "yfd": 4,
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
                    "yardline": 40
                }
            },
            "end_situation": {
                "clock": "10:22",
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
                "sequence": 11,
                "clock": "10:22",
                "points": 7,
                "home_points": 23,
                "away_points": 14,
                "points-after-play": {
                    "id": "960b0b90-8a26-11ed-9c65-6f281153d3a0",
                    "sequence": 1672613421560.0,
                    "type": "extra_point"
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 1,
                "yards": 60,
                "att_yards": 25,
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
                "yards": 60,
                "yards_after_catch": 35,
                "inside_20": 0,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "e7d6ae25-bf15-4660-8b37-c37716551de3",
                    "name": "Davante Adams",
                    "jersey": "17",
                    "position": "WR",
                    "sr_id": "sr:player:831457"
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
                "qb_hit": 1,
                "def_target": 0,
                "def_comp": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "batted_pass": 0,
                "player": {
                    "id": "a1a2f797-77ac-4f13-8456-50a10a7fd61a",
                    "name": "Talanoa Hufanga",
                    "jersey": "29",
                    "position": "SAF",
                    "sr_id": "sr:player:1437360"
                },
                "team": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
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
                    "id": "e7d6ae25-bf15-4660-8b37-c37716551de3",
                    "name": "Davante Adams",
                    "jersey": "17",
                    "position": "WR",
                    "sr_id": "sr:player:831457"
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
                "description": "J.Stidham pass deep left complete to SF 35.",
                "sequence": 0,
                "direction": "deep left",
                "yards": 60,
                "start_location": {
                    "alias": "LV",
                    "yardline": 40
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 35
                },
                "players": [{
                    "id": "582fe465-135a-4901-beef-60aebce99067",
                    "name": "Jarrett Stidham",
                    "jersey": "03",
                    "position": "QB",
                    "sr_id": "sr:player:1232264",
                    "role": "pass"
                }, {
                    "id": "a1a2f797-77ac-4f13-8456-50a10a7fd61a",
                    "name": "Talanoa Hufanga",
                    "jersey": "29",
                    "position": "SAF",
                    "sr_id": "sr:player:1437360",
                    "role": "hit"
                }]
            }, {
                "category": "pass_reception",
                "description": "Catch made by D.Adams at SF 35. Gain of 60 yards.",
                "sequence": 1,
                "yards": 60,
                "result": "touchdown",
                "start_location": {
                    "alias": "SF",
                    "yardline": 35
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 0
                },
                "players": [{
                    "id": "e7d6ae25-bf15-4660-8b37-c37716551de3",
                    "name": "Davante Adams",
                    "jersey": "17",
                    "position": "WR",
                    "sr_id": "sr:player:831457",
                    "role": "catch"
                }]
            }, {
                "category": "touchdown",
                "description": "D.Adams for 60 yards, TOUCHDOWN.",
                "sequence": 2,
                "yards": 60,
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
                    "id": "e7d6ae25-bf15-4660-8b37-c37716551de3",
                    "name": "Davante Adams",
                    "jersey": "17",
                    "position": "WR",
                    "sr_id": "sr:player:831457",
                    "role": "catch"
                }]
            }, {
                "category": "penalty",
                "description": "PENALTY on SF-C.Ward, Illegal Contact, 5 yards, declined.",
                "sequence": 3,
                "start_location": {
                    "alias": "LV",
                    "yardline": 40
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 40
                },
                "penalty": {
                    "description": "Illegal Contact",
                    "result": "declined",
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
                    "id": "04f6abef-834f-470e-9c15-8c0cc62fde4e",
                    "name": "Charvarius Ward",
                    "jersey": "07",
                    "position": "CB",
                    "sr_id": "sr:player:1183160",
                    "role": "penalty"
                }]
            }, {
                "category": "third_down_conversion",
                "sequence": 4,
                "result": "good",
                "start_location": {
                    "alias": "LV",
                    "yardline": 45
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 45
                },
                "players": []
            }],
            "quarter": {
                "id": "6d257af9-0e2a-4233-8f0e-bb961745455d",
                "number": 3,
                "sequence": 3
            }
        }, {
            "type": "play",
            "id": "960b0b90-8a26-11ed-9c65-6f281153d3a0",
            "sequence": 1672613421560.0,
            "clock": "10:22",
            "home_points": 24,
            "away_points": 14,
            "play_type": "extra_point",
            "scoring_play": true,
            "wall_clock": "2023-01-01T22:50:19+00:00",
            "description": "D.Carlson extra point is good.",
            "scoring_description": "J.Stidham pass deep left complete to SF 35. Catch made by D.Adams at SF 35. Gain of 60 yards. D.Adams for 60 yards, TOUCHDOWN. PENALTY on SF-C.Ward, Illegal Contact, 5 yards, declined.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T22:50:21+00:00",
            "updated_at": "2023-01-01T22:50:22+00:00",
            "start_situation": {
                "clock": "10:22",
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
                "clock": "10:22",
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
                "id": "6d257af9-0e2a-4233-8f0e-bb961745455d",
                "number": 3,
                "sequence": 3
            }
        }]
    }, {
        "id": "0a7cf37f-da15-47f1-86a8-3457ada1e7c8",
        "sequence": 11,
        "start_reason": "Kickoff",
        "end_reason": "Touchdown",
        "play_count": 8,
        "duration": "5:00",
        "first_downs": 5,
        "gain": 85,
        "penalty_yards": -10,
        "inside_20": true,
        "scoring_drive": true,
        "quarter": {
            "id": "6d257af9-0e2a-4233-8f0e-bb961745455d",
            "number": 3,
            "sequence": 3
        },
        "team": {
            "id": "f0e724b0-4cbf-495a-be47-013907608da9",
            "name": "49ers",
            "market": "San Francisco",
            "alias": "SF",
            "sr_id": "sr:competitor:4389"
        },
        "plays": [{
            "type": "play",
            "id": "ae393b10-8a26-11ed-9c65-6f281153d3a0",
            "sequence": 1672613624798.0,
            "clock": "10:22",
            "home_points": 24,
            "away_points": 14,
            "play_type": "kickoff",
            "wall_clock": "2023-01-01T22:53:37+00:00",
            "description": "D.Carlson kicks 65 yards from LV 35 to the SF End Zone. Touchback.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T22:53:44+00:00",
            "updated_at": "2023-01-01T22:53:45+00:00",
            "start_situation": {
                "clock": "10:22",
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
            "end_situation": {
                "clock": "10:22",
                "down": 1,
                "yfd": 10,
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
            }, {
                "stat_type": "return",
                "touchback": 1,
                "category": "kick_return",
                "team": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }],
            "details": [{
                "category": "kick_off",
                "description": "D.Carlson kicks 65 yards from LV 35 to the SF End Zone.",
                "sequence": 0,
                "yards": 65,
                "result": "touchback",
                "start_location": {
                    "alias": "LV",
                    "yardline": 35
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 0
                },
                "players": [{
                    "id": "7bb70550-c28a-4e47-9a13-cc0c0fef8b38",
                    "name": "Daniel Carlson",
                    "jersey": "02",
                    "position": "K",
                    "sr_id": "sr:player:1226876",
                    "role": "kick"
                }]
            }, {
                "category": "touchback",
                "description": "Touchback.",
                "sequence": 1,
                "result": "touchback",
                "start_location": {
                    "alias": "SF",
                    "yardline": 0
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 0
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
                "id": "6d257af9-0e2a-4233-8f0e-bb961745455d",
                "number": 3,
                "sequence": 3
            }
        }, {
            "type": "play",
            "id": "2596f080-8a27-11ed-9c65-6f281153d3a0",
            "sequence": 1672613670879.0,
            "clock": "10:22",
            "home_points": 24,
            "away_points": 14,
            "play_type": "pass",
            "wall_clock": "2023-01-01T22:54:19+00:00",
            "description": "B.Purdy pass short left complete to SF 28. Catch made by C.McCaffrey at SF 28. Gain of 7 yards. Tackled by R.Teamer; H.Langi at SF 32.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T22:54:30+00:00",
            "updated_at": "2023-01-01T22:55:34+00:00",
            "start_situation": {
                "clock": "10:22",
                "down": 1,
                "yfd": 10,
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
                    "yardline": 25
                }
            },
            "end_situation": {
                "clock": "9:42",
                "down": 2,
                "yfd": 3,
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
                    "yardline": 32
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 1,
                "yards": 7,
                "att_yards": 3,
                "firstdown": 0,
                "inside_20": 0,
                "goaltogo": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "on_target_throw": 0,
                "batted_pass": 0,
                "player": {
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461"
                },
                "team": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }, {
                "stat_type": "receive",
                "firstdown": 0,
                "target": 1,
                "reception": 1,
                "yards": 7,
                "yards_after_catch": 4,
                "inside_20": 0,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "f96db0af-5e25-42d1-a07a-49b4e065b364",
                    "name": "Christian McCaffrey",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1129507"
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
                    "id": "dba7bc1b-c414-404a-8845-4b0245df64a9",
                    "name": "Roderic Teamer",
                    "jersey": "33",
                    "position": "SAF",
                    "sr_id": "sr:player:1194798"
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
                    "id": "d3e192b5-4523-4d65-94e0-a1fb164b6542",
                    "name": "Harvey Langi",
                    "jersey": "56",
                    "position": "LB",
                    "sr_id": "sr:player:1130349"
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
                "description": "B.Purdy pass short left complete to SF 28.",
                "sequence": 0,
                "direction": "short left",
                "yards": 7,
                "start_location": {
                    "alias": "SF",
                    "yardline": 25
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 28
                },
                "players": [{
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461",
                    "role": "pass"
                }]
            }, {
                "category": "pass_reception",
                "description": "Catch made by C.McCaffrey at SF 28. Gain of 7 yards.",
                "sequence": 1,
                "yards": 7,
                "result": "tackled",
                "start_location": {
                    "alias": "SF",
                    "yardline": 28
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 32
                },
                "players": [{
                    "id": "f96db0af-5e25-42d1-a07a-49b4e065b364",
                    "name": "Christian McCaffrey",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1129507",
                    "role": "catch"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by R.Teamer; H.Langi at SF 32.",
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
                    "id": "dba7bc1b-c414-404a-8845-4b0245df64a9",
                    "name": "Roderic Teamer",
                    "jersey": "33",
                    "position": "SAF",
                    "sr_id": "sr:player:1194798",
                    "role": "ast_tackle"
                }, {
                    "id": "d3e192b5-4523-4d65-94e0-a1fb164b6542",
                    "name": "Harvey Langi",
                    "jersey": "56",
                    "position": "LB",
                    "sr_id": "sr:player:1130349",
                    "role": "ast_tackle"
                }]
            }],
            "quarter": {
                "id": "6d257af9-0e2a-4233-8f0e-bb961745455d",
                "number": 3,
                "sequence": 3
            }
        }, {
            "type": "play",
            "id": "44804cd0-8a27-11ed-9c65-6f281153d3a0",
            "sequence": 1672613709262.0,
            "clock": "9:42",
            "home_points": 24,
            "away_points": 14,
            "play_type": "rush",
            "wall_clock": "2023-01-01T22:54:58+00:00",
            "description": "C.McCaffrey rushed right guard to SF 37 for 5 yards. Tackled by R.Teamer at SF 37.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T22:55:09+00:00",
            "updated_at": "2023-01-01T22:56:06+00:00",
            "start_situation": {
                "clock": "9:42",
                "down": 2,
                "yfd": 3,
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
                    "yardline": 32
                }
            },
            "end_situation": {
                "clock": "9:08",
                "down": 1,
                "yfd": 10,
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
                    "yardline": 37
                }
            },
            "statistics": [{
                "stat_type": "rush",
                "attempt": 1,
                "yards": 5,
                "firstdown": 1,
                "inside_20": 0,
                "goaltogo": 0,
                "broken_tackles": 0,
                "kneel_down": 0,
                "scramble": 0,
                "player": {
                    "id": "f96db0af-5e25-42d1-a07a-49b4e065b364",
                    "name": "Christian McCaffrey",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1129507"
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
                    "id": "dba7bc1b-c414-404a-8845-4b0245df64a9",
                    "name": "Roderic Teamer",
                    "jersey": "33",
                    "position": "SAF",
                    "sr_id": "sr:player:1194798"
                },
                "team": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390"
                }
            }, {
                "stat_type": "first_down",
                "category": "rush",
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
                "description": "C.McCaffrey rushed right guard to SF 37 for 5 yards.",
                "sequence": 0,
                "direction": "right guard",
                "yards": 5,
                "result": "tackled",
                "start_location": {
                    "alias": "SF",
                    "yardline": 32
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 37
                },
                "players": [{
                    "id": "f96db0af-5e25-42d1-a07a-49b4e065b364",
                    "name": "Christian McCaffrey",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1129507",
                    "role": "rush"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by R.Teamer at SF 37.",
                "sequence": 1,
                "start_location": {
                    "alias": "SF",
                    "yardline": 37
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 37
                },
                "players": [{
                    "id": "dba7bc1b-c414-404a-8845-4b0245df64a9",
                    "name": "Roderic Teamer",
                    "jersey": "33",
                    "position": "SAF",
                    "sr_id": "sr:player:1194798",
                    "role": "tackle"
                }]
            }, {
                "category": "first_down",
                "sequence": 2,
                "result": "rush",
                "start_location": {
                    "alias": "SF",
                    "yardline": 37
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 37
                },
                "players": []
            }],
            "quarter": {
                "id": "6d257af9-0e2a-4233-8f0e-bb961745455d",
                "number": 3,
                "sequence": 3
            }
        }, {
            "type": "play",
            "id": "61a9d0b0-8a27-11ed-9c65-6f281153d3a0",
            "sequence": 1672613740259.0,
            "clock": "9:08",
            "home_points": 24,
            "away_points": 14,
            "play_type": "pass",
            "wall_clock": "2023-01-01T22:55:32+00:00",
            "description": "B.Purdy pass short right complete to SF 42. Catch made by B.Aiyuk at SF 42. Gain of 5 yards. Tackled by H.Langi at SF 42.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T22:55:40+00:00",
            "updated_at": "2023-01-01T22:56:37+00:00",
            "start_situation": {
                "clock": "9:08",
                "down": 1,
                "yfd": 10,
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
                    "yardline": 37
                }
            },
            "end_situation": {
                "clock": "8:33",
                "down": 2,
                "yfd": 5,
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
                    "yardline": 42
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 1,
                "yards": 5,
                "att_yards": 5,
                "firstdown": 0,
                "inside_20": 0,
                "goaltogo": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "on_target_throw": 0,
                "batted_pass": 0,
                "player": {
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461"
                },
                "team": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }, {
                "stat_type": "receive",
                "firstdown": 0,
                "target": 1,
                "reception": 1,
                "yards": 5,
                "yards_after_catch": 0,
                "inside_20": 0,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "c90471cc-fa60-4416-9388-5aebb5d877eb",
                    "name": "Brandon Aiyuk",
                    "jersey": "11",
                    "position": "WR",
                    "sr_id": "sr:player:2040579"
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
                    "id": "d3e192b5-4523-4d65-94e0-a1fb164b6542",
                    "name": "Harvey Langi",
                    "jersey": "56",
                    "position": "LB",
                    "sr_id": "sr:player:1130349"
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
                "description": "B.Purdy pass short right complete to SF 42.",
                "sequence": 0,
                "direction": "short right",
                "yards": 5,
                "start_location": {
                    "alias": "SF",
                    "yardline": 37
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 42
                },
                "players": [{
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461",
                    "role": "pass"
                }]
            }, {
                "category": "pass_reception",
                "description": "Catch made by B.Aiyuk at SF 42. Gain of 5 yards.",
                "sequence": 1,
                "yards": 5,
                "result": "tackled",
                "start_location": {
                    "alias": "SF",
                    "yardline": 42
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 42
                },
                "players": [{
                    "id": "c90471cc-fa60-4416-9388-5aebb5d877eb",
                    "name": "Brandon Aiyuk",
                    "jersey": "11",
                    "position": "WR",
                    "sr_id": "sr:player:2040579",
                    "role": "catch"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by H.Langi at SF 42.",
                "sequence": 2,
                "start_location": {
                    "alias": "SF",
                    "yardline": 42
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 42
                },
                "players": [{
                    "id": "d3e192b5-4523-4d65-94e0-a1fb164b6542",
                    "name": "Harvey Langi",
                    "jersey": "56",
                    "position": "LB",
                    "sr_id": "sr:player:1130349",
                    "role": "tackle"
                }]
            }],
            "quarter": {
                "id": "6d257af9-0e2a-4233-8f0e-bb961745455d",
                "number": 3,
                "sequence": 3
            }
        }, {
            "type": "play",
            "id": "6fd3e9f0-8a27-11ed-9c65-6f281153d3a0",
            "sequence": 1672613782318.0,
            "clock": "8:33",
            "home_points": 24,
            "away_points": 14,
            "play_type": "pass",
            "wall_clock": "2023-01-01T22:56:09+00:00",
            "description": "B.Purdy pass short right complete to SF 42. Catch made by C.McCaffrey at SF 42. Gain of 15 yards. Pushed out of bounds by H.Langi at LV 43.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T22:56:22+00:00",
            "updated_at": "2023-01-01T22:57:37+00:00",
            "start_situation": {
                "clock": "8:33",
                "down": 2,
                "yfd": 5,
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
                    "yardline": 42
                }
            },
            "end_situation": {
                "clock": "7:53",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 43
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 1,
                "yards": 15,
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
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461"
                },
                "team": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }, {
                "stat_type": "receive",
                "firstdown": 1,
                "target": 1,
                "reception": 1,
                "yards": 15,
                "yards_after_catch": 15,
                "inside_20": 0,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "f96db0af-5e25-42d1-a07a-49b4e065b364",
                    "name": "Christian McCaffrey",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1129507"
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
                    "id": "d3e192b5-4523-4d65-94e0-a1fb164b6542",
                    "name": "Harvey Langi",
                    "jersey": "56",
                    "position": "LB",
                    "sr_id": "sr:player:1130349"
                },
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
                "team": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }],
            "details": [{
                "category": "pass_completion",
                "description": "B.Purdy pass short right complete to SF 42.",
                "sequence": 0,
                "direction": "short right",
                "yards": 15,
                "start_location": {
                    "alias": "SF",
                    "yardline": 42
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 42
                },
                "players": [{
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461",
                    "role": "pass"
                }]
            }, {
                "category": "pass_reception",
                "description": "Catch made by C.McCaffrey at SF 42. Gain of 15 yards.",
                "sequence": 1,
                "yards": 15,
                "result": "pushed out of bounds",
                "start_location": {
                    "alias": "SF",
                    "yardline": 42
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 43
                },
                "players": [{
                    "id": "f96db0af-5e25-42d1-a07a-49b4e065b364",
                    "name": "Christian McCaffrey",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1129507",
                    "role": "catch"
                }]
            }, {
                "category": "pushed_out_of_bounds",
                "description": "Pushed out of bounds by H.Langi at LV 43.",
                "sequence": 2,
                "start_location": {
                    "alias": "LV",
                    "yardline": 43
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 43
                },
                "players": [{
                    "id": "d3e192b5-4523-4d65-94e0-a1fb164b6542",
                    "name": "Harvey Langi",
                    "jersey": "56",
                    "position": "LB",
                    "sr_id": "sr:player:1130349",
                    "role": "tackle"
                }]
            }, {
                "category": "first_down",
                "sequence": 3,
                "result": "pass",
                "start_location": {
                    "alias": "LV",
                    "yardline": 43
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 43
                },
                "players": []
            }],
            "quarter": {
                "id": "6d257af9-0e2a-4233-8f0e-bb961745455d",
                "number": 3,
                "sequence": 3
            }
        }, {
            "type": "play",
            "id": "8f885e70-8a27-11ed-9c65-6f281153d3a0",
            "sequence": 1672613843214.0,
            "clock": "7:53",
            "home_points": 24,
            "away_points": 14,
            "play_type": "rush",
            "wall_clock": "2023-01-01T22:56:53+00:00",
            "description": "C.McCaffrey rushed left tackle to LV 39 for yards. Tackled by A.Robertson at LV 39. PENALTY on SF-G.Kittle, Offensive Holding, 10 yards, accepted. No Play.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T22:57:23+00:00",
            "updated_at": "2023-01-01T22:59:16+00:00",
            "start_situation": {
                "clock": "7:53",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 43
                }
            },
            "end_situation": {
                "clock": "7:46",
                "down": 1,
                "yfd": 20,
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
                    "yardline": 47
                }
            },
            "statistics": [{
                "stat_type": "rush",
                "nullified": true,
                "attempt": 1,
                "yards": 0,
                "inside_20": 0,
                "goaltogo": 0,
                "broken_tackles": 0,
                "kneel_down": 0,
                "scramble": 0,
                "player": {
                    "id": "f96db0af-5e25-42d1-a07a-49b4e065b364",
                    "name": "Christian McCaffrey",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1129507"
                },
                "team": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }, {
                "stat_type": "penalty",
                "penalty": 1,
                "yards": 10,
                "player": {
                    "id": "2ada91b0-036e-454f-83c3-6d939ff584a9",
                    "name": "George Kittle",
                    "jersey": "85",
                    "position": "TE",
                    "sr_id": "sr:player:1130029"
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
                "nullified": true,
                "tackle": 1,
                "category": "defense",
                "def_target": 0,
                "def_comp": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "batted_pass": 0,
                "player": {
                    "id": "23525664-b547-413b-9221-b09091b90edf",
                    "name": "Amik Robertson",
                    "jersey": "21",
                    "position": "CB",
                    "sr_id": "sr:player:2040257"
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
                "category": "rush",
                "description": "C.McCaffrey rushed left tackle to LV 39 for yards.",
                "sequence": 0,
                "direction": "left tackle",
                "result": "tackled",
                "start_location": {
                    "alias": "LV",
                    "yardline": 43
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 39
                },
                "players": [{
                    "id": "f96db0af-5e25-42d1-a07a-49b4e065b364",
                    "name": "Christian McCaffrey",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1129507",
                    "role": "rush"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by A.Robertson at LV 39.",
                "sequence": 1,
                "start_location": {
                    "alias": "LV",
                    "yardline": 39
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 39
                },
                "players": [{
                    "id": "23525664-b547-413b-9221-b09091b90edf",
                    "name": "Amik Robertson",
                    "jersey": "21",
                    "position": "CB",
                    "sr_id": "sr:player:2040257",
                    "role": "tackle"
                }]
            }, {
                "category": "penalty",
                "description": "PENALTY on SF-G.Kittle, Offensive Holding, 10 yards, accepted.",
                "sequence": 2,
                "start_location": {
                    "alias": "LV",
                    "yardline": 43
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 47
                },
                "penalty": {
                    "description": "Offensive Holding",
                    "result": "accepted",
                    "yards": 10,
                    "team": {
                        "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                        "name": "49ers",
                        "market": "San Francisco",
                        "alias": "SF",
                        "sr_id": "sr:competitor:4389"
                    }
                },
                "players": [{
                    "id": "2ada91b0-036e-454f-83c3-6d939ff584a9",
                    "name": "George Kittle",
                    "jersey": "85",
                    "position": "TE",
                    "sr_id": "sr:player:1130029",
                    "role": "penalty"
                }]
            }, {
                "category": "no_play",
                "description": "No Play.",
                "sequence": 3,
                "start_location": {
                    "alias": "SF",
                    "yardline": 47
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 47
                },
                "players": []
            }],
            "quarter": {
                "id": "6d257af9-0e2a-4233-8f0e-bb961745455d",
                "number": 3,
                "sequence": 3
            }
        }, {
            "type": "play",
            "id": "a7e5b440-8a27-11ed-9c65-6f281153d3a0",
            "sequence": 1672613916681.0,
            "clock": "7:46",
            "home_points": 24,
            "away_points": 14,
            "play_type": "pass",
            "wall_clock": "2023-01-01T22:58:14+00:00",
            "description": "B.Purdy pass short left complete to LV 39. Catch made by J.Jennings at LV 39. Gain of 18 yards. Tackled by D.Harmon at LV 35.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T22:58:36+00:00",
            "updated_at": "2023-01-01T23:00:07+00:00",
            "start_situation": {
                "clock": "7:46",
                "down": 1,
                "yfd": 20,
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
                    "yardline": 47
                }
            },
            "end_situation": {
                "clock": "6:59",
                "down": 2,
                "yfd": 2,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
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
                "stat_type": "pass",
                "attempt": 1,
                "complete": 1,
                "yards": 18,
                "att_yards": 14,
                "firstdown": 0,
                "inside_20": 0,
                "goaltogo": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "on_target_throw": 0,
                "batted_pass": 0,
                "player": {
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461"
                },
                "team": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }, {
                "stat_type": "receive",
                "firstdown": 0,
                "target": 1,
                "reception": 1,
                "yards": 18,
                "yards_after_catch": 4,
                "inside_20": 0,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "3ae9f0fa-c711-4663-80cf-4707856c07aa",
                    "name": "Jauan Jennings",
                    "jersey": "15",
                    "position": "WR",
                    "sr_id": "sr:player:1219286"
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
                    "id": "a2802951-e573-4e8f-ad31-14b9ae5f8e7c",
                    "name": "Duron Harmon",
                    "jersey": "30",
                    "position": "SAF",
                    "sr_id": "sr:player:830945"
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
                "description": "B.Purdy pass short left complete to LV 39.",
                "sequence": 0,
                "direction": "short left",
                "yards": 18,
                "start_location": {
                    "alias": "SF",
                    "yardline": 47
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 39
                },
                "players": [{
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461",
                    "role": "pass"
                }]
            }, {
                "category": "pass_reception",
                "description": "Catch made by J.Jennings at LV 39. Gain of 18 yards.",
                "sequence": 1,
                "yards": 18,
                "result": "tackled",
                "start_location": {
                    "alias": "LV",
                    "yardline": 39
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 35
                },
                "players": [{
                    "id": "3ae9f0fa-c711-4663-80cf-4707856c07aa",
                    "name": "Jauan Jennings",
                    "jersey": "15",
                    "position": "WR",
                    "sr_id": "sr:player:1219286",
                    "role": "catch"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by D.Harmon at LV 35.",
                "sequence": 2,
                "start_location": {
                    "alias": "LV",
                    "yardline": 35
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 35
                },
                "players": [{
                    "id": "a2802951-e573-4e8f-ad31-14b9ae5f8e7c",
                    "name": "Duron Harmon",
                    "jersey": "30",
                    "position": "SAF",
                    "sr_id": "sr:player:830945",
                    "role": "tackle"
                }]
            }],
            "quarter": {
                "id": "6d257af9-0e2a-4233-8f0e-bb961745455d",
                "number": 3,
                "sequence": 3
            }
        }, {
            "type": "play",
            "id": "d3e87d20-8a27-11ed-9c65-6f281153d3a0",
            "sequence": 1672613940106.0,
            "clock": "6:59",
            "home_points": 24,
            "away_points": 14,
            "play_type": "rush",
            "wall_clock": "2023-01-01T22:58:48+00:00",
            "description": "T.Davis-Price rushed left tackle to LV 30 for 5 yards. Tackled by D.Harmon at LV 30.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T22:59:00+00:00",
            "updated_at": "2023-01-01T23:00:41+00:00",
            "start_situation": {
                "clock": "6:59",
                "down": 2,
                "yfd": 2,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
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
            "end_situation": {
                "clock": "6:15",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
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
                "stat_type": "rush",
                "attempt": 1,
                "yards": 5,
                "firstdown": 1,
                "inside_20": 0,
                "goaltogo": 0,
                "broken_tackles": 0,
                "kneel_down": 0,
                "scramble": 0,
                "player": {
                    "id": "052cdbeb-f758-4110-ac1a-675cd0335db9",
                    "name": "Tyrion Davis-Price",
                    "jersey": "32",
                    "position": "RB",
                    "sr_id": "sr:player:1694045"
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
                    "id": "a2802951-e573-4e8f-ad31-14b9ae5f8e7c",
                    "name": "Duron Harmon",
                    "jersey": "30",
                    "position": "SAF",
                    "sr_id": "sr:player:830945"
                },
                "team": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390"
                }
            }, {
                "stat_type": "first_down",
                "category": "rush",
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
                "description": "T.Davis-Price rushed left tackle to LV 30 for 5 yards.",
                "sequence": 0,
                "direction": "left tackle",
                "yards": 5,
                "result": "tackled",
                "start_location": {
                    "alias": "LV",
                    "yardline": 35
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 30
                },
                "players": [{
                    "id": "052cdbeb-f758-4110-ac1a-675cd0335db9",
                    "name": "Tyrion Davis-Price",
                    "jersey": "32",
                    "position": "RB",
                    "sr_id": "sr:player:1694045",
                    "role": "rush"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by D.Harmon at LV 30.",
                "sequence": 1,
                "start_location": {
                    "alias": "LV",
                    "yardline": 30
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 30
                },
                "players": [{
                    "id": "a2802951-e573-4e8f-ad31-14b9ae5f8e7c",
                    "name": "Duron Harmon",
                    "jersey": "30",
                    "position": "SAF",
                    "sr_id": "sr:player:830945",
                    "role": "tackle"
                }]
            }, {
                "category": "first_down",
                "sequence": 2,
                "result": "rush",
                "start_location": {
                    "alias": "LV",
                    "yardline": 30
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 30
                },
                "players": []
            }],
            "quarter": {
                "id": "6d257af9-0e2a-4233-8f0e-bb961745455d",
                "number": 3,
                "sequence": 3
            }
        }, {
            "type": "play",
            "id": "e17c49d0-8a27-11ed-9c65-6f281153d3a0",
            "sequence": 1672613986854.0,
            "clock": "6:15",
            "home_points": 24,
            "away_points": 14,
            "play_type": "rush",
            "wall_clock": "2023-01-01T22:59:39+00:00",
            "description": "B.Aiyuk rushed right end to LV 14 for 16 yards. Tackled by T.Moehrig; L.Masterson at LV 14.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T22:59:46+00:00",
            "updated_at": "2023-01-01T23:01:33+00:00",
            "start_situation": {
                "clock": "6:15",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
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
                "clock": "5:29",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 14
                }
            },
            "statistics": [{
                "stat_type": "rush",
                "attempt": 1,
                "yards": 16,
                "firstdown": 1,
                "inside_20": 0,
                "goaltogo": 0,
                "broken_tackles": 0,
                "kneel_down": 0,
                "scramble": 0,
                "player": {
                    "id": "c90471cc-fa60-4416-9388-5aebb5d877eb",
                    "name": "Brandon Aiyuk",
                    "jersey": "11",
                    "position": "WR",
                    "sr_id": "sr:player:2040579"
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
                    "id": "c8f74b89-065c-4857-be4e-4fcf897a5bc0",
                    "name": "Tre'von Moehrig",
                    "jersey": "25",
                    "position": "SAF",
                    "sr_id": "sr:player:2197678"
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
                    "id": "103ff970-d3a7-11ec-96a0-c3471a31202c",
                    "name": "Luke Masterson",
                    "jersey": "59",
                    "position": "LB",
                    "sr_id": "sr:player:1201174"
                },
                "team": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390"
                }
            }, {
                "stat_type": "first_down",
                "category": "rush",
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
                "description": "B.Aiyuk rushed right end to LV 14 for 16 yards.",
                "sequence": 0,
                "direction": "right end",
                "yards": 16,
                "result": "tackled",
                "start_location": {
                    "alias": "LV",
                    "yardline": 30
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 14
                },
                "players": [{
                    "id": "c90471cc-fa60-4416-9388-5aebb5d877eb",
                    "name": "Brandon Aiyuk",
                    "jersey": "11",
                    "position": "WR",
                    "sr_id": "sr:player:2040579",
                    "role": "rush"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by T.Moehrig; L.Masterson at LV 14.",
                "sequence": 1,
                "start_location": {
                    "alias": "LV",
                    "yardline": 14
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 14
                },
                "players": [{
                    "id": "c8f74b89-065c-4857-be4e-4fcf897a5bc0",
                    "name": "Tre'von Moehrig",
                    "jersey": "25",
                    "position": "SAF",
                    "sr_id": "sr:player:2197678",
                    "role": "ast_tackle"
                }, {
                    "id": "103ff970-d3a7-11ec-96a0-c3471a31202c",
                    "name": "Luke Masterson",
                    "jersey": "59",
                    "position": "LB",
                    "sr_id": "sr:player:1201174",
                    "role": "ast_tackle"
                }]
            }, {
                "category": "first_down",
                "sequence": 2,
                "result": "rush",
                "start_location": {
                    "alias": "LV",
                    "yardline": 14
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 14
                },
                "players": []
            }],
            "quarter": {
                "id": "6d257af9-0e2a-4233-8f0e-bb961745455d",
                "number": 3,
                "sequence": 3
            }
        }, {
            "type": "play",
            "id": "fd7da160-8a27-11ed-9c65-6f281153d3a0",
            "sequence": 1672614061519.0,
            "clock": "5:29",
            "home_points": 24,
            "away_points": 20,
            "play_type": "rush",
            "scoring_play": true,
            "wall_clock": "2023-01-01T23:00:19+00:00",
            "description": "C.McCaffrey rushed right end to LV End Zone for 14 yards. C.McCaffrey for 14 yards, TOUCHDOWN.",
            "scoring_description": "C.McCaffrey rushed right end to LV End Zone for 14 yards. C.McCaffrey for 14 yards, TOUCHDOWN.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T23:01:01+00:00",
            "updated_at": "2023-01-01T23:04:11+00:00",
            "start_situation": {
                "clock": "5:29",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 14
                }
            },
            "end_situation": {
                "clock": "5:22",
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
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 15
                }
            },
            "score": {
                "sequence": 13,
                "clock": "5:22",
                "points": 7,
                "home_points": 24,
                "away_points": 20,
                "points-after-play": {
                    "id": "29e6a620-8a28-11ed-9c65-6f281153d3a0",
                    "sequence": 1672614065254.0,
                    "type": "extra_point"
                }
            },
            "statistics": [{
                "stat_type": "rush",
                "attempt": 1,
                "yards": 14,
                "touchdown": 1,
                "firstdown": 1,
                "inside_20": 1,
                "goaltogo": 0,
                "broken_tackles": 0,
                "kneel_down": 0,
                "scramble": 0,
                "player": {
                    "id": "f96db0af-5e25-42d1-a07a-49b4e065b364",
                    "name": "Christian McCaffrey",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1129507"
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
                "category": "rush",
                "player": {
                    "id": "f96db0af-5e25-42d1-a07a-49b4e065b364",
                    "name": "Christian McCaffrey",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1129507"
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
                "description": "C.McCaffrey rushed right end to LV End Zone for 14 yards.",
                "sequence": 0,
                "direction": "right end",
                "yards": 14,
                "result": "touchdown",
                "start_location": {
                    "alias": "LV",
                    "yardline": 14
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 0
                },
                "players": [{
                    "id": "f96db0af-5e25-42d1-a07a-49b4e065b364",
                    "name": "Christian McCaffrey",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1129507",
                    "role": "rush"
                }]
            }, {
                "category": "touchdown",
                "description": "C.McCaffrey for 14 yards, TOUCHDOWN.",
                "sequence": 1,
                "yards": 14,
                "result": "touchdown",
                "start_location": {
                    "alias": "LV",
                    "yardline": 0
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 0
                },
                "players": [{
                    "id": "f96db0af-5e25-42d1-a07a-49b4e065b364",
                    "name": "Christian McCaffrey",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1129507",
                    "role": "rush"
                }]
            }],
            "quarter": {
                "id": "6d257af9-0e2a-4233-8f0e-bb961745455d",
                "number": 3,
                "sequence": 3
            }
        }, {
            "type": "play",
            "id": "29e6a620-8a28-11ed-9c65-6f281153d3a0",
            "sequence": 1672614065254.0,
            "clock": "5:22",
            "home_points": 24,
            "away_points": 21,
            "play_type": "extra_point",
            "scoring_play": true,
            "wall_clock": "2023-01-01T23:01:03+00:00",
            "description": "R.Gould extra point is good.",
            "scoring_description": "C.McCaffrey rushed right end to LV End Zone for 14 yards. C.McCaffrey for 14 yards, TOUCHDOWN.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T23:01:05+00:00",
            "updated_at": "2023-01-01T23:04:11+00:00",
            "start_situation": {
                "clock": "5:22",
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
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 15
                }
            },
            "end_situation": {
                "clock": "5:22",
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
            "statistics": [{
                "stat_type": "extra_point",
                "attempt": 1,
                "made": 1,
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
            }],
            "details": [{
                "category": "extra_point_attempt",
                "description": "R.Gould extra point is good.",
                "sequence": 0,
                "result": "good",
                "start_location": {
                    "alias": "LV",
                    "yardline": 15
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 15
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
                "id": "6d257af9-0e2a-4233-8f0e-bb961745455d",
                "number": 3,
                "sequence": 3
            }
        }]
    }, {
        "id": "da1581d1-41ac-4c07-949f-f2efea3a0b64",
        "sequence": 15,
        "start_reason": "Interception",
        "end_reason": "Field Goal",
        "play_count": 6,
        "duration": "2:12",
        "first_downs": 1,
        "gain": 17,
        "penalty_yards": 0,
        "scoring_drive": true,
        "quarter": {
            "id": "c45b69d8-4bb6-468f-a7b9-b6dfc688ba74",
            "number": 4,
            "sequence": 4
        },
        "team": {
            "id": "f0e724b0-4cbf-495a-be47-013907608da9",
            "name": "49ers",
            "market": "San Francisco",
            "alias": "SF",
            "sr_id": "sr:competitor:4389"
        },
        "plays": [{
            "type": "play",
            "id": "7a9dc460-8a2b-11ed-9c65-6f281153d3a0",
            "sequence": 1672615560292.0,
            "clock": "14:46",
            "home_points": 24,
            "away_points": 21,
            "play_type": "rush",
            "wall_clock": "2023-01-01T23:25:42+00:00",
            "description": "D.Gray rushed right end to LV 33 for 9 yards. Pushed out of bounds by T.Moehrig at LV 33.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T23:26:00+00:00",
            "updated_at": "2023-01-01T23:28:31+00:00",
            "start_situation": {
                "clock": "14:46",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 42
                }
            },
            "end_situation": {
                "clock": "14:16",
                "down": 2,
                "yfd": 1,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 33
                }
            },
            "statistics": [{
                "stat_type": "rush",
                "attempt": 1,
                "yards": 9,
                "firstdown": 0,
                "inside_20": 0,
                "goaltogo": 0,
                "broken_tackles": 0,
                "kneel_down": 0,
                "scramble": 0,
                "player": {
                    "id": "7ec60efe-5dd3-43c3-b76f-f0d00589fdc3",
                    "name": "Danny Gray",
                    "jersey": "06",
                    "position": "WR",
                    "sr_id": "sr:player:1415877"
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
                    "id": "c8f74b89-065c-4857-be4e-4fcf897a5bc0",
                    "name": "Tre'von Moehrig",
                    "jersey": "25",
                    "position": "SAF",
                    "sr_id": "sr:player:2197678"
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
                "category": "rush",
                "description": "D.Gray rushed right end to LV 33 for 9 yards.",
                "sequence": 0,
                "direction": "right end",
                "yards": 9,
                "result": "pushed out of bounds",
                "start_location": {
                    "alias": "LV",
                    "yardline": 42
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 33
                },
                "players": [{
                    "id": "7ec60efe-5dd3-43c3-b76f-f0d00589fdc3",
                    "name": "Danny Gray",
                    "jersey": "06",
                    "position": "WR",
                    "sr_id": "sr:player:1415877",
                    "role": "rush"
                }]
            }, {
                "category": "pushed_out_of_bounds",
                "description": "Pushed out of bounds by T.Moehrig at LV 33.",
                "sequence": 1,
                "start_location": {
                    "alias": "LV",
                    "yardline": 33
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 33
                },
                "players": [{
                    "id": "c8f74b89-065c-4857-be4e-4fcf897a5bc0",
                    "name": "Tre'von Moehrig",
                    "jersey": "25",
                    "position": "SAF",
                    "sr_id": "sr:player:2197678",
                    "role": "tackle"
                }]
            }],
            "quarter": {
                "id": "c45b69d8-4bb6-468f-a7b9-b6dfc688ba74",
                "number": 4,
                "sequence": 4
            }
        }, {
            "type": "play",
            "id": "a75b03a0-8a2b-11ed-9c65-6f281153d3a0",
            "sequence": 1672615587856.0,
            "clock": "14:16",
            "home_points": 24,
            "away_points": 21,
            "play_type": "rush",
            "wall_clock": "2023-01-01T23:26:20+00:00",
            "description": "C.McCaffrey rushed up the middle to LV 28 for 5 yards. Tackled by L.Masterson at LV 28.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T23:26:27+00:00",
            "updated_at": "2023-01-01T23:28:50+00:00",
            "start_situation": {
                "clock": "14:16",
                "down": 2,
                "yfd": 1,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 33
                }
            },
            "end_situation": {
                "clock": "13:33",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 28
                }
            },
            "statistics": [{
                "stat_type": "rush",
                "attempt": 1,
                "yards": 5,
                "firstdown": 1,
                "inside_20": 0,
                "goaltogo": 0,
                "broken_tackles": 0,
                "kneel_down": 0,
                "scramble": 0,
                "player": {
                    "id": "f96db0af-5e25-42d1-a07a-49b4e065b364",
                    "name": "Christian McCaffrey",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1129507"
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
                    "id": "103ff970-d3a7-11ec-96a0-c3471a31202c",
                    "name": "Luke Masterson",
                    "jersey": "59",
                    "position": "LB",
                    "sr_id": "sr:player:1201174"
                },
                "team": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390"
                }
            }, {
                "stat_type": "first_down",
                "category": "rush",
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
                "description": "C.McCaffrey rushed up the middle to LV 28 for 5 yards.",
                "sequence": 0,
                "direction": "up the middle",
                "yards": 5,
                "result": "tackled",
                "start_location": {
                    "alias": "LV",
                    "yardline": 33
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 28
                },
                "players": [{
                    "id": "f96db0af-5e25-42d1-a07a-49b4e065b364",
                    "name": "Christian McCaffrey",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1129507",
                    "role": "rush"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by L.Masterson at LV 28.",
                "sequence": 1,
                "start_location": {
                    "alias": "LV",
                    "yardline": 28
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 28
                },
                "players": [{
                    "id": "103ff970-d3a7-11ec-96a0-c3471a31202c",
                    "name": "Luke Masterson",
                    "jersey": "59",
                    "position": "LB",
                    "sr_id": "sr:player:1201174",
                    "role": "tackle"
                }]
            }, {
                "category": "first_down",
                "sequence": 2,
                "result": "rush",
                "start_location": {
                    "alias": "LV",
                    "yardline": 28
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 28
                },
                "players": []
            }],
            "quarter": {
                "id": "c45b69d8-4bb6-468f-a7b9-b6dfc688ba74",
                "number": 4,
                "sequence": 4
            }
        }, {
            "type": "play",
            "id": "b7d06c70-8a2b-11ed-9c65-6f281153d3a0",
            "sequence": 1672615634313.0,
            "clock": "13:33",
            "home_points": 24,
            "away_points": 21,
            "play_type": "rush",
            "wall_clock": "2023-01-01T23:27:02+00:00",
            "description": "C.McCaffrey rushed left guard to LV 25 for 3 yards. Tackled by K.Peko; B.Nichols at LV 25.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T23:27:14+00:00",
            "updated_at": "2023-01-01T23:29:21+00:00",
            "start_situation": {
                "clock": "13:33",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 28
                }
            },
            "end_situation": {
                "clock": "12:50",
                "down": 2,
                "yfd": 7,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
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
                    "id": "f96db0af-5e25-42d1-a07a-49b4e065b364",
                    "name": "Christian McCaffrey",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1129507"
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
                    "id": "0a6c2bfc-19a4-47f9-ba60-74265af6e947",
                    "name": "Bilal Nichols",
                    "jersey": "91",
                    "position": "DT",
                    "sr_id": "sr:player:1224502"
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
                    "id": "e9a7f92c-241c-4172-9874-6eb0c1576899",
                    "name": "Kyle Peko",
                    "jersey": "93",
                    "position": "DT",
                    "sr_id": "sr:player:1074060"
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
                "category": "rush",
                "description": "C.McCaffrey rushed left guard to LV 25 for 3 yards.",
                "sequence": 0,
                "direction": "left guard",
                "yards": 3,
                "result": "tackled",
                "start_location": {
                    "alias": "LV",
                    "yardline": 28
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 25
                },
                "players": [{
                    "id": "f96db0af-5e25-42d1-a07a-49b4e065b364",
                    "name": "Christian McCaffrey",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1129507",
                    "role": "rush"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by K.Peko; B.Nichols at LV 25.",
                "sequence": 1,
                "start_location": {
                    "alias": "LV",
                    "yardline": 25
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 25
                },
                "players": [{
                    "id": "e9a7f92c-241c-4172-9874-6eb0c1576899",
                    "name": "Kyle Peko",
                    "jersey": "93",
                    "position": "DT",
                    "sr_id": "sr:player:1074060",
                    "role": "ast_tackle"
                }, {
                    "id": "0a6c2bfc-19a4-47f9-ba60-74265af6e947",
                    "name": "Bilal Nichols",
                    "jersey": "91",
                    "position": "DT",
                    "sr_id": "sr:player:1224502",
                    "role": "ast_tackle"
                }]
            }],
            "quarter": {
                "id": "c45b69d8-4bb6-468f-a7b9-b6dfc688ba74",
                "number": 4,
                "sequence": 4
            }
        }, {
            "type": "play",
            "id": "dd4aff60-8a2b-11ed-9c65-6f281153d3a0",
            "sequence": 1672615673586.0,
            "clock": "12:50",
            "home_points": 24,
            "away_points": 21,
            "play_type": "pass",
            "wall_clock": "2023-01-01T23:27:46+00:00",
            "description": "B.Purdy steps back to pass. B.Purdy pass incomplete deep right intended for J.Jennings (T.Hall).",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T23:27:53+00:00",
            "updated_at": "2023-01-01T23:29:59+00:00",
            "start_situation": {
                "clock": "12:50",
                "down": 2,
                "yfd": 7,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
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
                "clock": "12:45",
                "down": 3,
                "yfd": 7,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
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
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 0,
                "att_yards": 23,
                "firstdown": 0,
                "inside_20": 0,
                "goaltogo": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "on_target_throw": 0,
                "batted_pass": 0,
                "player": {
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461"
                },
                "team": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }, {
                "stat_type": "receive",
                "firstdown": 0,
                "target": 1,
                "inside_20": 0,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "3ae9f0fa-c711-4663-80cf-4707856c07aa",
                    "name": "Jauan Jennings",
                    "jersey": "15",
                    "position": "WR",
                    "sr_id": "sr:player:1219286"
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
                "pass_defended": 1,
                "def_target": 0,
                "def_comp": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "batted_pass": 0,
                "player": {
                    "id": "74761bca-f09c-4a06-8dd4-5f3cf2a2b897",
                    "name": "Tyler Hall",
                    "jersey": "37",
                    "position": "CB",
                    "sr_id": "sr:player:1205992"
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
                "category": "pass",
                "description": "B.Purdy steps back to pass.",
                "sequence": 0,
                "start_location": {
                    "alias": "LV",
                    "yardline": 25
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 25
                },
                "players": [{
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461",
                    "role": "pass"
                }]
            }, {
                "category": "pass_incompletion",
                "description": "B.Purdy pass incomplete deep right intended for J.Jennings (T.Hall).",
                "sequence": 1,
                "direction": "deep right",
                "start_location": {
                    "alias": "LV",
                    "yardline": 25
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 2
                },
                "players": [{
                    "id": "74761bca-f09c-4a06-8dd4-5f3cf2a2b897",
                    "name": "Tyler Hall",
                    "jersey": "37",
                    "position": "CB",
                    "sr_id": "sr:player:1205992",
                    "role": "defend"
                }, {
                    "id": "3ae9f0fa-c711-4663-80cf-4707856c07aa",
                    "name": "Jauan Jennings",
                    "jersey": "15",
                    "position": "WR",
                    "sr_id": "sr:player:1219286",
                    "role": "receive"
                }, {
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461",
                    "role": "pass"
                }]
            }],
            "quarter": {
                "id": "c45b69d8-4bb6-468f-a7b9-b6dfc688ba74",
                "number": 4,
                "sequence": 4
            }
        }, {
            "type": "play",
            "id": "eac02080-8a2b-11ed-9c65-6f281153d3a0",
            "sequence": 1672615714707.0,
            "clock": "12:45",
            "home_points": 24,
            "away_points": 21,
            "play_type": "pass",
            "wall_clock": "2023-01-01T23:28:28+00:00",
            "description": "B.Purdy steps back to pass. B.Purdy pass incomplete deep left intended for G.Kittle.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T23:28:34+00:00",
            "updated_at": "2023-01-01T23:30:24+00:00",
            "start_situation": {
                "clock": "12:45",
                "down": 3,
                "yfd": 7,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
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
                "clock": "12:39",
                "down": 4,
                "yfd": 7,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
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
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 0,
                "att_yards": 20,
                "firstdown": 0,
                "inside_20": 0,
                "goaltogo": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "on_target_throw": 0,
                "batted_pass": 0,
                "player": {
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461"
                },
                "team": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }, {
                "stat_type": "receive",
                "firstdown": 0,
                "target": 1,
                "inside_20": 0,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "2ada91b0-036e-454f-83c3-6d939ff584a9",
                    "name": "George Kittle",
                    "jersey": "85",
                    "position": "TE",
                    "sr_id": "sr:player:1130029"
                },
                "team": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }, {
                "stat_type": "down_conversion",
                "down": 3,
                "attempt": 1,
                "complete": 0,
                "team": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }],
            "details": [{
                "category": "pass",
                "description": "B.Purdy steps back to pass.",
                "sequence": 0,
                "start_location": {
                    "alias": "LV",
                    "yardline": 25
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 25
                },
                "players": [{
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461",
                    "role": "pass"
                }]
            }, {
                "category": "pass_incompletion",
                "description": "B.Purdy pass incomplete deep left intended for G.Kittle.",
                "sequence": 1,
                "direction": "deep left",
                "start_location": {
                    "alias": "LV",
                    "yardline": 25
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 5
                },
                "players": [{
                    "id": "2ada91b0-036e-454f-83c3-6d939ff584a9",
                    "name": "George Kittle",
                    "jersey": "85",
                    "position": "TE",
                    "sr_id": "sr:player:1130029",
                    "role": "receive"
                }, {
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461",
                    "role": "pass"
                }]
            }, {
                "category": "third_down_conversion",
                "sequence": 2,
                "result": "missed",
                "start_location": {
                    "alias": "LV",
                    "yardline": 25
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 25
                },
                "players": []
            }],
            "quarter": {
                "id": "c45b69d8-4bb6-468f-a7b9-b6dfc688ba74",
                "number": 4,
                "sequence": 4
            }
        }, {
            "type": "play",
            "id": "03833d00-8a2c-11ed-9c65-6f281153d3a0",
            "sequence": 1672615750296.0,
            "clock": "12:39",
            "home_points": 24,
            "away_points": 24,
            "play_type": "field_goal",
            "scoring_play": true,
            "wall_clock": "2023-01-01T23:29:06+00:00",
            "description": "R.Gould 43 yard field goal attempt is good, Center-T.Pepper, Holder-M.Wishnowsky.",
            "scoring_description": "R.Gould 43 yard field goal attempt is good, Center-T.Pepper, Holder-M.Wishnowsky.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T23:29:10+00:00",
            "updated_at": "2023-01-01T23:29:11+00:00",
            "start_situation": {
                "clock": "12:39",
                "down": 4,
                "yfd": 7,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
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
                "clock": "12:34",
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
            "score": {
                "sequence": 14,
                "clock": "12:34",
                "points": 3,
                "home_points": 24,
                "away_points": 24
            },
            "statistics": [{
                "stat_type": "field_goal",
                "attempt": 1,
                "att_yards": 43,
                "yards": 43,
                "missed": 0,
                "made": 1,
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
            }],
            "details": [{
                "category": "field_goal",
                "description": "R.Gould 43 yard field goal attempt is good, Center-T.Pepper, Holder-M.Wishnowsky.",
                "sequence": 0,
                "yards": 43,
                "result": "good",
                "start_location": {
                    "alias": "LV",
                    "yardline": 33
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 33
                },
                "players": [{
                    "id": "abd73d50-ce60-47f1-b37f-2f9a05b0d7b9",
                    "name": "Robbie Gould",
                    "jersey": "09",
                    "position": "K",
                    "sr_id": "sr:player:830975",
                    "role": "kick"
                }, {
                    "id": "e8e8a5fe-00d1-4ffc-9401-9e5cb254afea",
                    "name": "Mitch Wishnowsky",
                    "jersey": "18",
                    "position": "P",
                    "sr_id": "sr:player:1221966",
                    "role": "hold"
                }, {
                    "id": "0c727216-dadf-41d5-80e9-154ba9261663",
                    "name": "Taybor Pepper",
                    "jersey": "46",
                    "position": "LS",
                    "sr_id": "sr:player:1098114",
                    "role": "snap"
                }]
            }],
            "quarter": {
                "id": "c45b69d8-4bb6-468f-a7b9-b6dfc688ba74",
                "number": 4,
                "sequence": 4
            }
        }]
    }, {
        "id": "fa6dc39b-f4ef-43b3-9f33-48d936e5f02d",
        "sequence": 17,
        "start_reason": "Punt",
        "end_reason": "Field Goal",
        "play_count": 7,
        "duration": "2:58",
        "first_downs": 2,
        "gain": 59,
        "penalty_yards": 0,
        "inside_20": true,
        "scoring_drive": true,
        "quarter": {
            "id": "c45b69d8-4bb6-468f-a7b9-b6dfc688ba74",
            "number": 4,
            "sequence": 4
        },
        "team": {
            "id": "f0e724b0-4cbf-495a-be47-013907608da9",
            "name": "49ers",
            "market": "San Francisco",
            "alias": "SF",
            "sr_id": "sr:competitor:4389"
        },
        "plays": [{
            "type": "play",
            "id": "5064ad10-8a2d-11ed-9c65-6f281153d3a0",
            "sequence": 1672616449011.0,
            "clock": "9:42",
            "home_points": 24,
            "away_points": 24,
            "play_type": "pass",
            "wall_clock": "2023-01-01T23:40:34+00:00",
            "description": "B.Purdy pass short left complete to SF 34. Catch made by R.McCloud at SF 34. Gain of 42 yards. Pushed out of bounds by D.Harmon at LV 23.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T23:40:49+00:00",
            "updated_at": "2023-01-01T23:42:58+00:00",
            "start_situation": {
                "clock": "9:42",
                "down": 1,
                "yfd": 10,
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
                "clock": "8:58",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 23
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 1,
                "yards": 42,
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
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461"
                },
                "team": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }, {
                "stat_type": "receive",
                "firstdown": 1,
                "target": 1,
                "reception": 1,
                "yards": 42,
                "yards_after_catch": 43,
                "inside_20": 0,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "f7ff7599-a175-4a0c-b887-3ae9e596fc64",
                    "name": "Ray-Ray McCloud III",
                    "jersey": "03",
                    "position": "WR",
                    "sr_id": "sr:player:1218938"
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
                    "id": "a2802951-e573-4e8f-ad31-14b9ae5f8e7c",
                    "name": "Duron Harmon",
                    "jersey": "30",
                    "position": "SAF",
                    "sr_id": "sr:player:830945"
                },
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
                "team": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }],
            "details": [{
                "category": "pass_completion",
                "description": "B.Purdy pass short left complete to SF 34.",
                "sequence": 0,
                "direction": "short left",
                "yards": 42,
                "start_location": {
                    "alias": "SF",
                    "yardline": 35
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 34
                },
                "players": [{
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461",
                    "role": "pass"
                }]
            }, {
                "category": "pass_reception",
                "description": "Catch made by R.McCloud at SF 34. Gain of 42 yards.",
                "sequence": 1,
                "yards": 42,
                "result": "pushed out of bounds",
                "start_location": {
                    "alias": "SF",
                    "yardline": 34
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 23
                },
                "players": [{
                    "id": "f7ff7599-a175-4a0c-b887-3ae9e596fc64",
                    "name": "Ray-Ray McCloud III",
                    "jersey": "03",
                    "position": "WR",
                    "sr_id": "sr:player:1218938",
                    "role": "catch"
                }]
            }, {
                "category": "pushed_out_of_bounds",
                "description": "Pushed out of bounds by D.Harmon at LV 23.",
                "sequence": 2,
                "start_location": {
                    "alias": "LV",
                    "yardline": 23
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 23
                },
                "players": [{
                    "id": "a2802951-e573-4e8f-ad31-14b9ae5f8e7c",
                    "name": "Duron Harmon",
                    "jersey": "30",
                    "position": "SAF",
                    "sr_id": "sr:player:830945",
                    "role": "tackle"
                }]
            }, {
                "category": "first_down",
                "sequence": 3,
                "result": "pass",
                "start_location": {
                    "alias": "LV",
                    "yardline": 23
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 23
                },
                "players": []
            }],
            "quarter": {
                "id": "c45b69d8-4bb6-468f-a7b9-b6dfc688ba74",
                "number": 4,
                "sequence": 4
            }
        }, {
            "type": "play",
            "id": "b939fca0-8a2d-11ed-9c65-6f281153d3a0",
            "sequence": 1672616494827.0,
            "clock": "8:58",
            "home_points": 24,
            "away_points": 24,
            "play_type": "rush",
            "wall_clock": "2023-01-01T23:41:25+00:00",
            "description": "C.McCaffrey rushed right end to LV 18 for 5 yards. Tackled by B.Nichols at LV 18.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T23:41:34+00:00",
            "updated_at": "2023-01-01T23:43:30+00:00",
            "start_situation": {
                "clock": "8:58",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 23
                }
            },
            "end_situation": {
                "clock": "8:15",
                "down": 2,
                "yfd": 5,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 18
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
                "scramble": 0,
                "player": {
                    "id": "f96db0af-5e25-42d1-a07a-49b4e065b364",
                    "name": "Christian McCaffrey",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1129507"
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
                    "id": "0a6c2bfc-19a4-47f9-ba60-74265af6e947",
                    "name": "Bilal Nichols",
                    "jersey": "91",
                    "position": "DT",
                    "sr_id": "sr:player:1224502"
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
                "category": "rush",
                "description": "C.McCaffrey rushed right end to LV 18 for 5 yards.",
                "sequence": 0,
                "direction": "right end",
                "yards": 5,
                "result": "tackled",
                "start_location": {
                    "alias": "LV",
                    "yardline": 23
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 18
                },
                "players": [{
                    "id": "f96db0af-5e25-42d1-a07a-49b4e065b364",
                    "name": "Christian McCaffrey",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1129507",
                    "role": "rush"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by B.Nichols at LV 18.",
                "sequence": 1,
                "start_location": {
                    "alias": "LV",
                    "yardline": 18
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 18
                },
                "players": [{
                    "id": "0a6c2bfc-19a4-47f9-ba60-74265af6e947",
                    "name": "Bilal Nichols",
                    "jersey": "91",
                    "position": "DT",
                    "sr_id": "sr:player:1224502",
                    "role": "tackle"
                }]
            }],
            "quarter": {
                "id": "c45b69d8-4bb6-468f-a7b9-b6dfc688ba74",
                "number": 4,
                "sequence": 4
            }
        }, {
            "type": "play",
            "id": "d41e2460-8a2d-11ed-9c65-6f281153d3a0",
            "sequence": 1672616541418.0,
            "clock": "8:15",
            "home_points": 24,
            "away_points": 24,
            "play_type": "pass",
            "wall_clock": "2023-01-01T23:42:08+00:00",
            "description": "B.Purdy pass short middle complete to LV 13. Catch made by B.Aiyuk at LV 13. Gain of 6 yards. Tackled by K.Peko; N.Hobbs at LV 12.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T23:42:21+00:00",
            "updated_at": "2023-01-01T23:52:34+00:00",
            "start_situation": {
                "clock": "8:15",
                "down": 2,
                "yfd": 5,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 18
                }
            },
            "end_situation": {
                "clock": "7:28",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 12
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 1,
                "yards": 6,
                "att_yards": 5,
                "firstdown": 1,
                "inside_20": 1,
                "goaltogo": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "on_target_throw": 0,
                "batted_pass": 0,
                "player": {
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461"
                },
                "team": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }, {
                "stat_type": "receive",
                "firstdown": 1,
                "target": 1,
                "reception": 1,
                "yards": 6,
                "yards_after_catch": 1,
                "inside_20": 1,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "c90471cc-fa60-4416-9388-5aebb5d877eb",
                    "name": "Brandon Aiyuk",
                    "jersey": "11",
                    "position": "WR",
                    "sr_id": "sr:player:2040579"
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
                    "id": "b34aa9fb-3f93-481b-8f68-7330c39e6e20",
                    "name": "Nate Hobbs",
                    "jersey": "39",
                    "position": "CB",
                    "sr_id": "sr:player:2197902"
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
                    "id": "e9a7f92c-241c-4172-9874-6eb0c1576899",
                    "name": "Kyle Peko",
                    "jersey": "93",
                    "position": "DT",
                    "sr_id": "sr:player:1074060"
                },
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
                "team": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }],
            "details": [{
                "category": "pass_completion",
                "description": "B.Purdy pass short middle complete to LV 13.",
                "sequence": 0,
                "direction": "short middle",
                "yards": 6,
                "start_location": {
                    "alias": "LV",
                    "yardline": 18
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 13
                },
                "players": [{
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461",
                    "role": "pass"
                }]
            }, {
                "category": "pass_reception",
                "description": "Catch made by B.Aiyuk at LV 13. Gain of 6 yards.",
                "sequence": 1,
                "yards": 6,
                "result": "tackled",
                "start_location": {
                    "alias": "LV",
                    "yardline": 13
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 12
                },
                "players": [{
                    "id": "c90471cc-fa60-4416-9388-5aebb5d877eb",
                    "name": "Brandon Aiyuk",
                    "jersey": "11",
                    "position": "WR",
                    "sr_id": "sr:player:2040579",
                    "role": "catch"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by K.Peko; N.Hobbs at LV 12.",
                "sequence": 2,
                "start_location": {
                    "alias": "LV",
                    "yardline": 12
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 12
                },
                "players": [{
                    "id": "e9a7f92c-241c-4172-9874-6eb0c1576899",
                    "name": "Kyle Peko",
                    "jersey": "93",
                    "position": "DT",
                    "sr_id": "sr:player:1074060",
                    "role": "ast_tackle"
                }, {
                    "id": "b34aa9fb-3f93-481b-8f68-7330c39e6e20",
                    "name": "Nate Hobbs",
                    "jersey": "39",
                    "position": "CB",
                    "sr_id": "sr:player:2197902",
                    "role": "ast_tackle"
                }]
            }, {
                "category": "first_down",
                "sequence": 3,
                "result": "pass",
                "start_location": {
                    "alias": "LV",
                    "yardline": 12
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 12
                },
                "players": []
            }],
            "quarter": {
                "id": "c45b69d8-4bb6-468f-a7b9-b6dfc688ba74",
                "number": 4,
                "sequence": 4
            }
        }, {
            "type": "play",
            "id": "f02129a0-8a2d-11ed-9c65-6f281153d3a0",
            "sequence": 1672616582862.0,
            "clock": "7:28",
            "home_points": 24,
            "away_points": 24,
            "play_type": "pass",
            "wall_clock": "2023-01-01T23:42:57+00:00",
            "description": "B.Purdy steps back to pass. B.Purdy pass incomplete short left intended for B.Aiyuk (N.Hobbs).",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T23:43:02+00:00",
            "updated_at": "2023-01-01T23:52:34+00:00",
            "start_situation": {
                "clock": "7:28",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 12
                }
            },
            "end_situation": {
                "clock": "7:23",
                "down": 2,
                "yfd": 10,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 12
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 0,
                "att_yards": 4,
                "firstdown": 0,
                "inside_20": 1,
                "goaltogo": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "on_target_throw": 0,
                "batted_pass": 0,
                "player": {
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461"
                },
                "team": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }, {
                "stat_type": "receive",
                "firstdown": 0,
                "target": 1,
                "inside_20": 1,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "c90471cc-fa60-4416-9388-5aebb5d877eb",
                    "name": "Brandon Aiyuk",
                    "jersey": "11",
                    "position": "WR",
                    "sr_id": "sr:player:2040579"
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
                "pass_defended": 1,
                "def_target": 0,
                "def_comp": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "batted_pass": 0,
                "player": {
                    "id": "b34aa9fb-3f93-481b-8f68-7330c39e6e20",
                    "name": "Nate Hobbs",
                    "jersey": "39",
                    "position": "CB",
                    "sr_id": "sr:player:2197902"
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
                "category": "pass",
                "description": "B.Purdy steps back to pass.",
                "sequence": 0,
                "start_location": {
                    "alias": "LV",
                    "yardline": 13
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 13
                },
                "players": [{
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461",
                    "role": "pass"
                }]
            }, {
                "category": "pass_incompletion",
                "description": "B.Purdy pass incomplete short left intended for B.Aiyuk (N.Hobbs).",
                "sequence": 1,
                "direction": "short left",
                "start_location": {
                    "alias": "LV",
                    "yardline": 13
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 9
                },
                "players": [{
                    "id": "c90471cc-fa60-4416-9388-5aebb5d877eb",
                    "name": "Brandon Aiyuk",
                    "jersey": "11",
                    "position": "WR",
                    "sr_id": "sr:player:2040579",
                    "role": "receive"
                }, {
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461",
                    "role": "pass"
                }, {
                    "id": "b34aa9fb-3f93-481b-8f68-7330c39e6e20",
                    "name": "Nate Hobbs",
                    "jersey": "39",
                    "position": "CB",
                    "sr_id": "sr:player:2197902",
                    "role": "defend"
                }]
            }],
            "quarter": {
                "id": "c45b69d8-4bb6-468f-a7b9-b6dfc688ba74",
                "number": 4,
                "sequence": 4
            }
        }, {
            "type": "play",
            "id": "0897fae0-8a2e-11ed-9c65-6f281153d3a0",
            "sequence": 1672616629880.0,
            "clock": "7:23",
            "home_points": 24,
            "away_points": 24,
            "play_type": "rush",
            "wall_clock": "2023-01-01T23:43:42+00:00",
            "description": "C.McCaffrey rushed right guard to LV 6 for 6 yards. Tackled by H.Langi; J.Tillery at LV 6.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T23:43:49+00:00",
            "updated_at": "2023-01-01T23:52:34+00:00",
            "start_situation": {
                "clock": "7:23",
                "down": 2,
                "yfd": 10,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 12
                }
            },
            "end_situation": {
                "clock": "6:51",
                "down": 2,
                "yfd": 10,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 12
                }
            },
            "statistics": [{
                "stat_type": "rush",
                "attempt": 1,
                "yards": 6,
                "firstdown": 0,
                "inside_20": 1,
                "goaltogo": 0,
                "broken_tackles": 0,
                "kneel_down": 0,
                "scramble": 0,
                "player": {
                    "id": "f96db0af-5e25-42d1-a07a-49b4e065b364",
                    "name": "Christian McCaffrey",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1129507"
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
                    "id": "9da6119d-b135-4b90-9f9d-7d08ab00b15d",
                    "name": "Jerry Tillery",
                    "jersey": "90",
                    "position": "DL",
                    "sr_id": "sr:player:1188426"
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
                    "id": "d3e192b5-4523-4d65-94e0-a1fb164b6542",
                    "name": "Harvey Langi",
                    "jersey": "56",
                    "position": "LB",
                    "sr_id": "sr:player:1130349"
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
                "category": "rush",
                "description": "C.McCaffrey rushed right guard to LV 6 for 6 yards.",
                "sequence": 0,
                "direction": "right guard",
                "yards": 6,
                "result": "tackled",
                "start_location": {
                    "alias": "LV",
                    "yardline": 12
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 6
                },
                "players": [{
                    "id": "f96db0af-5e25-42d1-a07a-49b4e065b364",
                    "name": "Christian McCaffrey",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1129507",
                    "role": "rush"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by H.Langi; J.Tillery at LV 6.",
                "sequence": 1,
                "start_location": {
                    "alias": "LV",
                    "yardline": 6
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 6
                },
                "players": [{
                    "id": "d3e192b5-4523-4d65-94e0-a1fb164b6542",
                    "name": "Harvey Langi",
                    "jersey": "56",
                    "position": "LB",
                    "sr_id": "sr:player:1130349",
                    "role": "ast_tackle"
                }, {
                    "id": "9da6119d-b135-4b90-9f9d-7d08ab00b15d",
                    "name": "Jerry Tillery",
                    "jersey": "90",
                    "position": "DL",
                    "sr_id": "sr:player:1188426",
                    "role": "ast_tackle"
                }]
            }],
            "quarter": {
                "id": "c45b69d8-4bb6-468f-a7b9-b6dfc688ba74",
                "number": 4,
                "sequence": 4
            }
        }, {
            "type": "play",
            "id": "4b98d7b0-8a2e-11ed-9c65-6f281153d3a0",
            "sequence": 1672616719562.0,
            "clock": "6:51",
            "home_points": 24,
            "away_points": 24,
            "play_type": "pass",
            "wall_clock": "2023-01-01T23:45:16+00:00",
            "description": "B.Purdy steps back to pass. B.Purdy pass incomplete short middle intended for G.Kittle (T.Hall).",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T23:45:19+00:00",
            "updated_at": "2023-01-01T23:52:34+00:00",
            "start_situation": {
                "clock": "6:51",
                "down": 3,
                "yfd": 4,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 6
                }
            },
            "end_situation": {
                "clock": "6:48",
                "down": 4,
                "yfd": 4,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 6
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 0,
                "att_yards": 6,
                "firstdown": 0,
                "inside_20": 1,
                "goaltogo": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "on_target_throw": 0,
                "batted_pass": 0,
                "player": {
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461"
                },
                "team": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }, {
                "stat_type": "receive",
                "firstdown": 0,
                "target": 1,
                "inside_20": 1,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "2ada91b0-036e-454f-83c3-6d939ff584a9",
                    "name": "George Kittle",
                    "jersey": "85",
                    "position": "TE",
                    "sr_id": "sr:player:1130029"
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
                "pass_defended": 1,
                "def_target": 0,
                "def_comp": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "batted_pass": 0,
                "player": {
                    "id": "74761bca-f09c-4a06-8dd4-5f3cf2a2b897",
                    "name": "Tyler Hall",
                    "jersey": "37",
                    "position": "CB",
                    "sr_id": "sr:player:1205992"
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
                "complete": 0,
                "team": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }],
            "details": [{
                "category": "pass",
                "description": "B.Purdy steps back to pass.",
                "sequence": 0,
                "start_location": {
                    "alias": "LV",
                    "yardline": 6
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 6
                },
                "players": [{
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461",
                    "role": "pass"
                }]
            }, {
                "category": "pass_incompletion",
                "description": "B.Purdy pass incomplete short middle intended for G.Kittle (T.Hall).",
                "sequence": 1,
                "direction": "short middle",
                "start_location": {
                    "alias": "LV",
                    "yardline": 6
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 0
                },
                "players": [{
                    "id": "2ada91b0-036e-454f-83c3-6d939ff584a9",
                    "name": "George Kittle",
                    "jersey": "85",
                    "position": "TE",
                    "sr_id": "sr:player:1130029",
                    "role": "receive"
                }, {
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461",
                    "role": "pass"
                }, {
                    "id": "74761bca-f09c-4a06-8dd4-5f3cf2a2b897",
                    "name": "Tyler Hall",
                    "jersey": "37",
                    "position": "CB",
                    "sr_id": "sr:player:1205992",
                    "role": "defend"
                }]
            }, {
                "category": "third_down_conversion",
                "sequence": 2,
                "result": "missed",
                "start_location": {
                    "alias": "LV",
                    "yardline": 6
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 6
                },
                "players": []
            }],
            "quarter": {
                "id": "c45b69d8-4bb6-468f-a7b9-b6dfc688ba74",
                "number": 4,
                "sequence": 4
            }
        }, {
            "type": "play",
            "id": "62802f50-8a2e-11ed-9c65-6f281153d3a0",
            "sequence": 1672616754644.0,
            "clock": "6:48",
            "home_points": 24,
            "away_points": 27,
            "play_type": "field_goal",
            "scoring_play": true,
            "wall_clock": "2023-01-01T23:45:51+00:00",
            "description": "R.Gould 24 yard field goal attempt is good, Center-T.Pepper, Holder-M.Wishnowsky.",
            "scoring_description": "R.Gould 24 yard field goal attempt is good, Center-T.Pepper, Holder-M.Wishnowsky.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T23:45:54+00:00",
            "updated_at": "2023-01-01T23:52:34+00:00",
            "start_situation": {
                "clock": "6:48",
                "down": 4,
                "yfd": 4,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 6
                }
            },
            "end_situation": {
                "clock": "6:44",
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
            "score": {
                "sequence": 15,
                "clock": "6:44",
                "points": 3,
                "home_points": 24,
                "away_points": 27
            },
            "statistics": [{
                "stat_type": "field_goal",
                "attempt": 1,
                "att_yards": 24,
                "yards": 24,
                "missed": 0,
                "made": 1,
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
            }],
            "details": [{
                "category": "field_goal",
                "description": "R.Gould 24 yard field goal attempt is good, Center-T.Pepper, Holder-M.Wishnowsky.",
                "sequence": 0,
                "yards": 24,
                "result": "good",
                "start_location": {
                    "alias": "LV",
                    "yardline": 14
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 14
                },
                "players": [{
                    "id": "abd73d50-ce60-47f1-b37f-2f9a05b0d7b9",
                    "name": "Robbie Gould",
                    "jersey": "09",
                    "position": "K",
                    "sr_id": "sr:player:830975",
                    "role": "kick"
                }, {
                    "id": "e8e8a5fe-00d1-4ffc-9401-9e5cb254afea",
                    "name": "Mitch Wishnowsky",
                    "jersey": "18",
                    "position": "P",
                    "sr_id": "sr:player:1221966",
                    "role": "hold"
                }, {
                    "id": "0c727216-dadf-41d5-80e9-154ba9261663",
                    "name": "Taybor Pepper",
                    "jersey": "46",
                    "position": "LS",
                    "sr_id": "sr:player:1098114",
                    "role": "snap"
                }]
            }],
            "quarter": {
                "id": "c45b69d8-4bb6-468f-a7b9-b6dfc688ba74",
                "number": 4,
                "sequence": 4
            }
        }]
    }, {
        "id": "7639b0cb-63cb-4114-ae8a-5c9a882ac3e8",
        "sequence": 18,
        "start_reason": "Kickoff",
        "end_reason": "Field Goal",
        "play_count": 7,
        "duration": "2:36",
        "first_downs": 2,
        "gain": 41,
        "penalty_yards": -5,
        "scoring_drive": true,
        "quarter": {
            "id": "c45b69d8-4bb6-468f-a7b9-b6dfc688ba74",
            "number": 4,
            "sequence": 4
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
            "id": "72ab21a0-8a2e-11ed-9c65-6f281153d3a0",
            "sequence": 1672616838088.0,
            "clock": "6:44",
            "home_points": 24,
            "away_points": 27,
            "play_type": "kickoff",
            "wall_clock": "2023-01-01T23:47:10+00:00",
            "description": "R.Gould kicks 65 yards from SF 35 to the LV End Zone. Touchback.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T23:47:18+00:00",
            "updated_at": "2023-01-01T23:47:18+00:00",
            "start_situation": {
                "clock": "6:44",
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
                "clock": "6:44",
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
                "id": "c45b69d8-4bb6-468f-a7b9-b6dfc688ba74",
                "number": 4,
                "sequence": 4
            }
        }, {
            "type": "play",
            "id": "a0cfb910-8a2e-11ed-9c65-6f281153d3a0",
            "sequence": 1672616884399.0,
            "clock": "6:44",
            "home_points": 24,
            "away_points": 27,
            "play_type": "pass",
            "wall_clock": "2023-01-01T23:47:56+00:00",
            "description": "J.Stidham pass short right complete to LV 31. Catch made by F.Moreau at LV 31. Gain of 21 yards. Tackled by O.Burks at LV 46.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T23:48:04+00:00",
            "updated_at": "2023-01-01T23:49:40+00:00",
            "start_situation": {
                "clock": "6:44",
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
                "clock": "5:55",
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
                    "yardline": 46
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 1,
                "yards": 21,
                "att_yards": 6,
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
                "yards": 21,
                "yards_after_catch": 15,
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
                    "id": "ab9bd5b1-eaf9-4f2d-8acd-fbc143980b17",
                    "name": "Oren Burks",
                    "jersey": "48",
                    "position": "LB",
                    "sr_id": "sr:player:1181532"
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
                "description": "J.Stidham pass short right complete to LV 31.",
                "sequence": 0,
                "direction": "short right",
                "yards": 21,
                "start_location": {
                    "alias": "LV",
                    "yardline": 25
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 31
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
                "description": "Catch made by F.Moreau at LV 31. Gain of 21 yards.",
                "sequence": 1,
                "yards": 21,
                "result": "tackled",
                "start_location": {
                    "alias": "LV",
                    "yardline": 31
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 46
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
                "category": "tackle",
                "description": "Tackled by O.Burks at LV 46.",
                "sequence": 2,
                "start_location": {
                    "alias": "LV",
                    "yardline": 46
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 46
                },
                "players": [{
                    "id": "ab9bd5b1-eaf9-4f2d-8acd-fbc143980b17",
                    "name": "Oren Burks",
                    "jersey": "48",
                    "position": "LB",
                    "sr_id": "sr:player:1181532",
                    "role": "tackle"
                }]
            }, {
                "category": "first_down",
                "sequence": 3,
                "result": "pass",
                "start_location": {
                    "alias": "LV",
                    "yardline": 46
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 46
                },
                "players": []
            }],
            "quarter": {
                "id": "c45b69d8-4bb6-468f-a7b9-b6dfc688ba74",
                "number": 4,
                "sequence": 4
            }
        }, {
            "type": "play",
            "id": "c32f0240-8a2e-11ed-9c65-6f281153d3a0",
            "sequence": 1672616933054.0,
            "clock": "5:55",
            "home_points": 24,
            "away_points": 27,
            "play_type": "rush",
            "wall_clock": "2023-01-01T23:48:44+00:00",
            "description": "J.Jacobs rushed up the middle to LV 47 for 1 yards. Tackled by J.Ward at LV 47.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T23:48:53+00:00",
            "updated_at": "2023-01-01T23:49:56+00:00",
            "start_situation": {
                "clock": "5:55",
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
                    "yardline": 46
                }
            },
            "end_situation": {
                "clock": "5:13",
                "down": 2,
                "yfd": 9,
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
                    "yardline": 47
                }
            },
            "statistics": [{
                "stat_type": "rush",
                "attempt": 1,
                "yards": 1,
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
                "tackle": 1,
                "category": "defense",
                "def_target": 0,
                "def_comp": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "batted_pass": 0,
                "player": {
                    "id": "1b8414b5-3db8-4e89-8bcc-7ac7f7d0b931",
                    "name": "Jimmie Ward",
                    "jersey": "01",
                    "position": "DB",
                    "sr_id": "sr:player:829883"
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
                "description": "J.Jacobs rushed up the middle to LV 47 for 1 yards.",
                "sequence": 0,
                "direction": "up the middle",
                "yards": 1,
                "result": "tackled",
                "start_location": {
                    "alias": "LV",
                    "yardline": 46
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 47
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
                "description": "Tackled by J.Ward at LV 47.",
                "sequence": 1,
                "start_location": {
                    "alias": "LV",
                    "yardline": 47
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 47
                },
                "players": [{
                    "id": "1b8414b5-3db8-4e89-8bcc-7ac7f7d0b931",
                    "name": "Jimmie Ward",
                    "jersey": "01",
                    "position": "DB",
                    "sr_id": "sr:player:829883",
                    "role": "tackle"
                }]
            }],
            "quarter": {
                "id": "c45b69d8-4bb6-468f-a7b9-b6dfc688ba74",
                "number": 4,
                "sequence": 4
            }
        }, {
            "type": "play",
            "id": "d9526da0-8a2e-11ed-9c65-6f281153d3a0",
            "sequence": 1672616974783.0,
            "clock": "5:13",
            "home_points": 24,
            "away_points": 27,
            "play_type": "pass",
            "wall_clock": "2023-01-01T23:49:25+00:00",
            "description": "J.Stidham pass short middle complete to SF 42. Catch made by F.Moreau at SF 42. Gain of 14 yards. Tackled by J.Ward at SF 39.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T23:49:34+00:00",
            "updated_at": "2023-01-01T23:50:52+00:00",
            "start_situation": {
                "clock": "5:13",
                "down": 2,
                "yfd": 9,
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
                    "yardline": 47
                }
            },
            "end_situation": {
                "clock": "4:33",
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
                    "yardline": 39
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 1,
                "yards": 14,
                "att_yards": 11,
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
                "yards_after_catch": 3,
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
                    "id": "1b8414b5-3db8-4e89-8bcc-7ac7f7d0b931",
                    "name": "Jimmie Ward",
                    "jersey": "01",
                    "position": "DB",
                    "sr_id": "sr:player:829883"
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
                "description": "J.Stidham pass short middle complete to SF 42.",
                "sequence": 0,
                "direction": "short middle",
                "yards": 14,
                "start_location": {
                    "alias": "LV",
                    "yardline": 47
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 42
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
                "description": "Catch made by F.Moreau at SF 42. Gain of 14 yards.",
                "sequence": 1,
                "yards": 14,
                "result": "tackled",
                "start_location": {
                    "alias": "SF",
                    "yardline": 42
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 39
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
                "category": "tackle",
                "description": "Tackled by J.Ward at SF 39.",
                "sequence": 2,
                "start_location": {
                    "alias": "SF",
                    "yardline": 39
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 39
                },
                "players": [{
                    "id": "1b8414b5-3db8-4e89-8bcc-7ac7f7d0b931",
                    "name": "Jimmie Ward",
                    "jersey": "01",
                    "position": "DB",
                    "sr_id": "sr:player:829883",
                    "role": "tackle"
                }]
            }, {
                "category": "first_down",
                "sequence": 3,
                "result": "pass",
                "start_location": {
                    "alias": "SF",
                    "yardline": 39
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 39
                },
                "players": []
            }],
            "quarter": {
                "id": "c45b69d8-4bb6-468f-a7b9-b6dfc688ba74",
                "number": 4,
                "sequence": 4
            }
        }, {
            "type": "play",
            "id": "f6a1c900-8a2e-11ed-9c65-6f281153d3a0",
            "sequence": 1672617012811.0,
            "clock": "4:33",
            "home_points": 24,
            "away_points": 27,
            "play_type": "pass",
            "wall_clock": "2023-01-01T23:50:05+00:00",
            "description": "J.Stidham steps back to pass. J.Stidham pass incomplete short right intended for.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T23:50:12+00:00",
            "updated_at": "2023-01-01T23:51:21+00:00",
            "start_situation": {
                "clock": "4:33",
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
                    "yardline": 39
                }
            },
            "end_situation": {
                "clock": "4:29",
                "down": 2,
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
                    "yardline": 39
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 0,
                "att_yards": 4,
                "firstdown": 0,
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
            }],
            "details": [{
                "category": "pass",
                "description": "J.Stidham steps back to pass.",
                "sequence": 0,
                "start_location": {
                    "alias": "SF",
                    "yardline": 39
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 39
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
                "category": "pass_incompletion",
                "description": "J.Stidham pass incomplete short right intended for.",
                "sequence": 1,
                "direction": "short right",
                "start_location": {
                    "alias": "SF",
                    "yardline": 39
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 35
                },
                "players": [{
                    "id": "582fe465-135a-4901-beef-60aebce99067",
                    "name": "Jarrett Stidham",
                    "jersey": "03",
                    "position": "QB",
                    "sr_id": "sr:player:1232264",
                    "role": "pass"
                }]
            }],
            "quarter": {
                "id": "c45b69d8-4bb6-468f-a7b9-b6dfc688ba74",
                "number": 4,
                "sequence": 4
            }
        }, {
            "type": "play",
            "id": "10787860-8a2f-11ed-9c65-6f281153d3a0",
            "sequence": 1672617064306.0,
            "clock": "4:29",
            "home_points": 24,
            "away_points": 27,
            "play_type": "penalty",
            "wall_clock": "2023-01-01T23:50:58+00:00",
            "description": "PENALTY on LV-J.Eluemunor, False Start, 5 yards, accepted. No Play.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T23:51:04+00:00",
            "updated_at": "2023-01-01T23:51:04+00:00",
            "start_situation": {
                "clock": "4:29",
                "down": 2,
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
                    "yardline": 39
                }
            },
            "end_situation": {
                "clock": "4:29",
                "down": 2,
                "yfd": 15,
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
                    "yardline": 44
                }
            },
            "statistics": [{
                "stat_type": "penalty",
                "penalty": 1,
                "yards": 5,
                "player": {
                    "id": "df94ce97-af26-4f12-be2d-14779270e670",
                    "name": "Jermaine Eluemunor",
                    "jersey": "72",
                    "position": "OL",
                    "sr_id": "sr:player:1130097"
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
                "category": "penalty",
                "description": "PENALTY on LV-J.Eluemunor, False Start, 5 yards, accepted.",
                "sequence": 0,
                "start_location": {
                    "alias": "SF",
                    "yardline": 39
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 44
                },
                "penalty": {
                    "description": "False Start",
                    "result": "accepted",
                    "yards": 5,
                    "team": {
                        "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                        "name": "Raiders",
                        "market": "Las Vegas",
                        "alias": "LV",
                        "sr_id": "sr:competitor:4390"
                    }
                },
                "players": [{
                    "id": "df94ce97-af26-4f12-be2d-14779270e670",
                    "name": "Jermaine Eluemunor",
                    "jersey": "72",
                    "position": "OL",
                    "sr_id": "sr:player:1130097",
                    "role": "penalty"
                }]
            }, {
                "category": "no_play",
                "description": "No Play.",
                "sequence": 1,
                "start_location": {
                    "alias": "SF",
                    "yardline": 44
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 44
                },
                "players": []
            }],
            "quarter": {
                "id": "c45b69d8-4bb6-468f-a7b9-b6dfc688ba74",
                "number": 4,
                "sequence": 4
            }
        }, {
            "type": "play",
            "id": "2773a620-8a2f-11ed-9c65-6f281153d3a0",
            "sequence": 1672617109838.0,
            "clock": "4:29",
            "home_points": 24,
            "away_points": 27,
            "play_type": "pass",
            "wall_clock": "2023-01-01T23:51:37+00:00",
            "description": "J.Stidham pass short left complete to SF 41. Catch made by J.Jacobs at SF 41. Gain of 5 yards. Tackled by J.Ward at SF 39.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T23:51:49+00:00",
            "updated_at": "2023-01-01T23:54:06+00:00",
            "start_situation": {
                "clock": "4:29",
                "down": 2,
                "yfd": 15,
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
                    "yardline": 44
                }
            },
            "end_situation": {
                "clock": "4:09",
                "down": 3,
                "yfd": 9,
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
                    "yardline": 38
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 1,
                "yards": 5,
                "att_yards": 3,
                "firstdown": 0,
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
                "firstdown": 0,
                "target": 1,
                "reception": 1,
                "yards": 5,
                "yards_after_catch": 2,
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
                    "id": "1b8414b5-3db8-4e89-8bcc-7ac7f7d0b931",
                    "name": "Jimmie Ward",
                    "jersey": "01",
                    "position": "DB",
                    "sr_id": "sr:player:829883"
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
                "category": "pass_completion",
                "description": "J.Stidham pass short left complete to SF 41.",
                "sequence": 0,
                "direction": "short left",
                "yards": 5,
                "start_location": {
                    "alias": "SF",
                    "yardline": 44
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 41
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
                "description": "Catch made by J.Jacobs at SF 41. Gain of 5 yards.",
                "sequence": 1,
                "yards": 5,
                "result": "tackled",
                "start_location": {
                    "alias": "SF",
                    "yardline": 41
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 39
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
                "description": "Tackled by J.Ward at SF 39.",
                "sequence": 2,
                "start_location": {
                    "alias": "SF",
                    "yardline": 39
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 39
                },
                "players": [{
                    "id": "1b8414b5-3db8-4e89-8bcc-7ac7f7d0b931",
                    "name": "Jimmie Ward",
                    "jersey": "01",
                    "position": "DB",
                    "sr_id": "sr:player:829883",
                    "role": "tackle"
                }]
            }],
            "quarter": {
                "id": "c45b69d8-4bb6-468f-a7b9-b6dfc688ba74",
                "number": 4,
                "sequence": 4
            }
        }, {
            "type": "play",
            "id": "42e0fb10-8a2f-11ed-9c65-6f281153d3a0",
            "sequence": 1672617191342.0,
            "clock": "4:09",
            "home_points": 24,
            "away_points": 27,
            "play_type": "pass",
            "wall_clock": "2023-01-01T23:53:03+00:00",
            "description": "J.Stidham steps back to pass. J.Stidham pass incomplete intended for M.Hollins.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T23:53:11+00:00",
            "updated_at": "2023-01-01T23:55:19+00:00",
            "start_situation": {
                "clock": "4:09",
                "down": 3,
                "yfd": 9,
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
                    "yardline": 39
                }
            },
            "end_situation": {
                "clock": "4:13",
                "down": 4,
                "yfd": 9,
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
                    "yardline": 39
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 0,
                "att_yards": 0,
                "firstdown": 0,
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
                "firstdown": 0,
                "target": 1,
                "inside_20": 0,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "93cb5790-1012-4c42-bccb-5748c27ba7d6",
                    "name": "Mack Hollins",
                    "jersey": "10",
                    "position": "WR",
                    "sr_id": "sr:player:1129973"
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
                "qb_hit": 1,
                "def_target": 0,
                "def_comp": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "batted_pass": 0,
                "player": {
                    "id": "987c5e68-21d5-4bcb-a5f3-2e09cc512374",
                    "name": "Nick Bosa",
                    "jersey": "97",
                    "position": "DE",
                    "sr_id": "sr:player:1218376"
                },
                "team": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }, {
                "stat_type": "down_conversion",
                "down": 3,
                "attempt": 1,
                "complete": 0,
                "team": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390"
                }
            }],
            "details": [{
                "category": "pass",
                "description": "J.Stidham steps back to pass.",
                "sequence": 0,
                "start_location": {
                    "alias": "SF",
                    "yardline": 39
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 39
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
                "category": "pass_incompletion",
                "description": "J.Stidham pass incomplete intended for M.Hollins.",
                "sequence": 1,
                "start_location": {
                    "alias": "SF",
                    "yardline": 39
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 39
                },
                "players": [{
                    "id": "93cb5790-1012-4c42-bccb-5748c27ba7d6",
                    "name": "Mack Hollins",
                    "jersey": "10",
                    "position": "WR",
                    "sr_id": "sr:player:1129973",
                    "role": "receive"
                }, {
                    "id": "582fe465-135a-4901-beef-60aebce99067",
                    "name": "Jarrett Stidham",
                    "jersey": "03",
                    "position": "QB",
                    "sr_id": "sr:player:1232264",
                    "role": "pass"
                }, {
                    "id": "987c5e68-21d5-4bcb-a5f3-2e09cc512374",
                    "name": "Nick Bosa",
                    "jersey": "97",
                    "position": "DE",
                    "sr_id": "sr:player:1218376",
                    "role": "hit"
                }]
            }, {
                "category": "third_down_conversion",
                "sequence": 2,
                "result": "missed",
                "start_location": {
                    "alias": "SF",
                    "yardline": 39
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 39
                },
                "players": []
            }],
            "quarter": {
                "id": "c45b69d8-4bb6-468f-a7b9-b6dfc688ba74",
                "number": 4,
                "sequence": 4
            }
        }, {
            "type": "play",
            "id": "73607270-8a2f-11ed-9c65-6f281153d3a0",
            "sequence": 1672617245511.0,
            "clock": "4:13",
            "home_points": 27,
            "away_points": 27,
            "play_type": "field_goal",
            "scoring_play": true,
            "wall_clock": "2023-01-01T23:53:59+00:00",
            "description": "D.Carlson 57 yard field goal attempt is good, Center-T.Sieg, Holder-A.Cole.",
            "scoring_description": "D.Carlson 57 yard field goal attempt is good, Center-T.Sieg, Holder-A.Cole.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T23:54:05+00:00",
            "updated_at": "2023-01-01T23:54:23+00:00",
            "start_situation": {
                "clock": "4:13",
                "down": 4,
                "yfd": 9,
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
                    "yardline": 38
                }
            },
            "end_situation": {
                "clock": "4:08",
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
            "score": {
                "sequence": 16,
                "clock": "4:08",
                "points": 3,
                "home_points": 27,
                "away_points": 27
            },
            "statistics": [{
                "stat_type": "field_goal",
                "attempt": 1,
                "att_yards": 57,
                "yards": 57,
                "missed": 0,
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
                "category": "field_goal",
                "description": "D.Carlson 57 yard field goal attempt is good, Center-T.Sieg, Holder-A.Cole.",
                "sequence": 0,
                "yards": 57,
                "result": "good",
                "start_location": {
                    "alias": "SF",
                    "yardline": 47
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 46
                },
                "players": [{
                    "id": "7bb70550-c28a-4e47-9a13-cc0c0fef8b38",
                    "name": "Daniel Carlson",
                    "jersey": "02",
                    "position": "K",
                    "sr_id": "sr:player:1226876",
                    "role": "kick"
                }, {
                    "id": "36f93677-a95b-4362-ac5f-6722f5c05b6d",
                    "name": "AJ Cole",
                    "jersey": "06",
                    "position": "P",
                    "sr_id": "sr:player:1206824",
                    "role": "hold"
                }, {
                    "id": "378df3b9-0a5c-4d68-a173-79bc0df07a66",
                    "name": "Trent Sieg",
                    "jersey": "47",
                    "position": "LS",
                    "sr_id": "sr:player:1182210",
                    "role": "snap"
                }]
            }],
            "quarter": {
                "id": "c45b69d8-4bb6-468f-a7b9-b6dfc688ba74",
                "number": 4,
                "sequence": 4
            }
        }]
    }, {
        "id": "4de466b0-e1c4-485d-a994-cf41c889a2b1",
        "sequence": 19,
        "start_reason": "Kickoff",
        "end_reason": "Touchdown",
        "play_count": 5,
        "duration": "1:51",
        "first_downs": 3,
        "gain": 75,
        "penalty_yards": 0,
        "inside_20": true,
        "scoring_drive": true,
        "quarter": {
            "id": "c45b69d8-4bb6-468f-a7b9-b6dfc688ba74",
            "number": 4,
            "sequence": 4
        },
        "team": {
            "id": "f0e724b0-4cbf-495a-be47-013907608da9",
            "name": "49ers",
            "market": "San Francisco",
            "alias": "SF",
            "sr_id": "sr:competitor:4389"
        },
        "plays": [{
            "type": "play",
            "id": "9e48a390-8a2f-11ed-9c65-6f281153d3a0",
            "sequence": 1672617328734.0,
            "clock": "4:08",
            "home_points": 27,
            "away_points": 27,
            "play_type": "kickoff",
            "wall_clock": "2023-01-01T23:55:21+00:00",
            "description": "D.Carlson kicks 65 yards from LV 35 to the SF End Zone. Touchback.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T23:55:28+00:00",
            "updated_at": "2023-01-01T23:55:29+00:00",
            "start_situation": {
                "clock": "4:08",
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
            "end_situation": {
                "clock": "4:08",
                "down": 1,
                "yfd": 10,
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
            }, {
                "stat_type": "return",
                "touchback": 1,
                "category": "kick_return",
                "team": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }],
            "details": [{
                "category": "kick_off",
                "description": "D.Carlson kicks 65 yards from LV 35 to the SF End Zone.",
                "sequence": 0,
                "yards": 65,
                "result": "touchback",
                "start_location": {
                    "alias": "LV",
                    "yardline": 35
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 0
                },
                "players": [{
                    "id": "7bb70550-c28a-4e47-9a13-cc0c0fef8b38",
                    "name": "Daniel Carlson",
                    "jersey": "02",
                    "position": "K",
                    "sr_id": "sr:player:1226876",
                    "role": "kick"
                }]
            }, {
                "category": "touchback",
                "description": "Touchback.",
                "sequence": 1,
                "result": "touchback",
                "start_location": {
                    "alias": "SF",
                    "yardline": 0
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 0
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
                "id": "c45b69d8-4bb6-468f-a7b9-b6dfc688ba74",
                "number": 4,
                "sequence": 4
            }
        }, {
            "type": "play",
            "id": "c5362770-8a2f-11ed-9c65-6f281153d3a0",
            "sequence": 1672617374431.0,
            "clock": "4:08",
            "home_points": 27,
            "away_points": 27,
            "play_type": "pass",
            "wall_clock": "2023-01-01T23:56:09+00:00",
            "description": "B.Purdy steps back to pass. B.Purdy pass incomplete short right intended for R.McCloud.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T23:56:14+00:00",
            "updated_at": "2023-01-01T23:57:51+00:00",
            "start_situation": {
                "clock": "4:08",
                "down": 1,
                "yfd": 10,
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
                    "yardline": 25
                }
            },
            "end_situation": {
                "clock": "4:02",
                "down": 2,
                "yfd": 10,
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
                    "yardline": 25
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 0,
                "att_yards": 10,
                "firstdown": 0,
                "inside_20": 0,
                "goaltogo": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "on_target_throw": 0,
                "batted_pass": 0,
                "player": {
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461"
                },
                "team": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }, {
                "stat_type": "receive",
                "firstdown": 0,
                "target": 1,
                "inside_20": 0,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "f7ff7599-a175-4a0c-b887-3ae9e596fc64",
                    "name": "Ray-Ray McCloud III",
                    "jersey": "03",
                    "position": "WR",
                    "sr_id": "sr:player:1218938"
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
                "qb_hit": 1,
                "def_target": 0,
                "def_comp": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "batted_pass": 0,
                "player": {
                    "id": "3ae55cda-ad32-46c5-bde7-470755f37f3a",
                    "name": "Maxx Crosby",
                    "jersey": "98",
                    "position": "DE",
                    "sr_id": "sr:player:1189114"
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
                "category": "pass",
                "description": "B.Purdy steps back to pass.",
                "sequence": 0,
                "start_location": {
                    "alias": "SF",
                    "yardline": 25
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 25
                },
                "players": [{
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461",
                    "role": "pass"
                }]
            }, {
                "category": "pass_incompletion",
                "description": "B.Purdy pass incomplete short right intended for R.McCloud.",
                "sequence": 1,
                "direction": "short right",
                "start_location": {
                    "alias": "SF",
                    "yardline": 25
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 35
                },
                "players": [{
                    "id": "3ae55cda-ad32-46c5-bde7-470755f37f3a",
                    "name": "Maxx Crosby",
                    "jersey": "98",
                    "position": "DE",
                    "sr_id": "sr:player:1189114",
                    "role": "hit"
                }, {
                    "id": "f7ff7599-a175-4a0c-b887-3ae9e596fc64",
                    "name": "Ray-Ray McCloud III",
                    "jersey": "03",
                    "position": "WR",
                    "sr_id": "sr:player:1218938",
                    "role": "receive"
                }, {
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461",
                    "role": "pass"
                }]
            }],
            "quarter": {
                "id": "c45b69d8-4bb6-468f-a7b9-b6dfc688ba74",
                "number": 4,
                "sequence": 4
            }
        }, {
            "type": "play",
            "id": "e088c870-8a2f-11ed-9c65-6f281153d3a0",
            "sequence": 1672617422885.0,
            "clock": "4:02",
            "home_points": 27,
            "away_points": 27,
            "play_type": "pass",
            "wall_clock": "2023-01-01T23:56:52+00:00",
            "description": "B.Purdy pass short middle complete to SF 38. Catch made by B.Aiyuk at SF 38. Gain of 23 yards. Tackled by A.Robertson at SF 48.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T23:57:02+00:00",
            "updated_at": "2023-01-01T23:58:22+00:00",
            "start_situation": {
                "clock": "4:02",
                "down": 2,
                "yfd": 10,
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
                    "yardline": 25
                }
            },
            "end_situation": {
                "clock": "3:20",
                "down": 1,
                "yfd": 10,
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
                    "yardline": 48
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 1,
                "yards": 23,
                "att_yards": 13,
                "firstdown": 1,
                "inside_20": 0,
                "goaltogo": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "on_target_throw": 0,
                "batted_pass": 0,
                "player": {
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461"
                },
                "team": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }, {
                "stat_type": "receive",
                "firstdown": 1,
                "target": 1,
                "reception": 1,
                "yards": 23,
                "yards_after_catch": 10,
                "inside_20": 0,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "c90471cc-fa60-4416-9388-5aebb5d877eb",
                    "name": "Brandon Aiyuk",
                    "jersey": "11",
                    "position": "WR",
                    "sr_id": "sr:player:2040579"
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
                    "id": "23525664-b547-413b-9221-b09091b90edf",
                    "name": "Amik Robertson",
                    "jersey": "21",
                    "position": "CB",
                    "sr_id": "sr:player:2040257"
                },
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
                "team": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }],
            "details": [{
                "category": "pass_completion",
                "description": "B.Purdy pass short middle complete to SF 38.",
                "sequence": 0,
                "direction": "short middle",
                "yards": 23,
                "start_location": {
                    "alias": "SF",
                    "yardline": 25
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 38
                },
                "players": [{
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461",
                    "role": "pass"
                }]
            }, {
                "category": "pass_reception",
                "description": "Catch made by B.Aiyuk at SF 38. Gain of 23 yards.",
                "sequence": 1,
                "yards": 23,
                "result": "tackled",
                "start_location": {
                    "alias": "SF",
                    "yardline": 38
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 48
                },
                "players": [{
                    "id": "c90471cc-fa60-4416-9388-5aebb5d877eb",
                    "name": "Brandon Aiyuk",
                    "jersey": "11",
                    "position": "WR",
                    "sr_id": "sr:player:2040579",
                    "role": "catch"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by A.Robertson at SF 48.",
                "sequence": 2,
                "start_location": {
                    "alias": "SF",
                    "yardline": 48
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 48
                },
                "players": [{
                    "id": "23525664-b547-413b-9221-b09091b90edf",
                    "name": "Amik Robertson",
                    "jersey": "21",
                    "position": "CB",
                    "sr_id": "sr:player:2040257",
                    "role": "tackle"
                }]
            }, {
                "category": "first_down",
                "sequence": 3,
                "result": "pass",
                "start_location": {
                    "alias": "SF",
                    "yardline": 48
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 48
                },
                "players": []
            }],
            "quarter": {
                "id": "c45b69d8-4bb6-468f-a7b9-b6dfc688ba74",
                "number": 4,
                "sequence": 4
            }
        }, {
            "type": "play",
            "id": "fda0c020-8a2f-11ed-9c65-6f281153d3a0",
            "sequence": 1672617459947.0,
            "clock": "3:20",
            "home_points": 27,
            "away_points": 27,
            "play_type": "pass",
            "wall_clock": "2023-01-01T23:57:35+00:00",
            "description": "B.Purdy steps back to pass. B.Purdy pass incomplete short left intended for G.Kittle.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T23:57:39+00:00",
            "updated_at": "2023-01-01T23:58:46+00:00",
            "start_situation": {
                "clock": "3:20",
                "down": 1,
                "yfd": 10,
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
                    "yardline": 48
                }
            },
            "end_situation": {
                "clock": "3:15",
                "down": 2,
                "yfd": 10,
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
                    "yardline": 48
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 0,
                "att_yards": 0,
                "firstdown": 0,
                "inside_20": 0,
                "goaltogo": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "on_target_throw": 0,
                "batted_pass": 0,
                "player": {
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461"
                },
                "team": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }, {
                "stat_type": "receive",
                "firstdown": 0,
                "target": 1,
                "inside_20": 0,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "2ada91b0-036e-454f-83c3-6d939ff584a9",
                    "name": "George Kittle",
                    "jersey": "85",
                    "position": "TE",
                    "sr_id": "sr:player:1130029"
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
                "category": "pass",
                "description": "B.Purdy steps back to pass.",
                "sequence": 0,
                "start_location": {
                    "alias": "SF",
                    "yardline": 48
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 48
                },
                "players": [{
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461",
                    "role": "pass"
                }]
            }, {
                "category": "pass_incompletion",
                "description": "B.Purdy pass incomplete short left intended for G.Kittle.",
                "sequence": 1,
                "direction": "short left",
                "start_location": {
                    "alias": "SF",
                    "yardline": 48
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 48
                },
                "players": [{
                    "id": "2ada91b0-036e-454f-83c3-6d939ff584a9",
                    "name": "George Kittle",
                    "jersey": "85",
                    "position": "TE",
                    "sr_id": "sr:player:1130029",
                    "role": "receive"
                }, {
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461",
                    "role": "pass"
                }]
            }],
            "quarter": {
                "id": "c45b69d8-4bb6-468f-a7b9-b6dfc688ba74",
                "number": 4,
                "sequence": 4
            }
        }, {
            "type": "play",
            "id": "13a95080-8a30-11ed-9c65-6f281153d3a0",
            "sequence": 1672617517340.0,
            "clock": "3:15",
            "home_points": 27,
            "away_points": 27,
            "play_type": "pass",
            "wall_clock": "2023-01-01T23:58:18+00:00",
            "description": "B.Purdy pass short left complete to SF 43. Catch made by C.McCaffrey at SF 43. Gain of 38 yards. Tackled by T.Hall; R.Teamer at LV 14.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T23:58:37+00:00",
            "updated_at": "2023-01-02T00:04:24+00:00",
            "start_situation": {
                "clock": "3:15",
                "down": 2,
                "yfd": 10,
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
                    "yardline": 48
                }
            },
            "end_situation": {
                "clock": "3:15",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 14
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 1,
                "yards": 38,
                "att_yards": -5,
                "firstdown": 1,
                "inside_20": 0,
                "goaltogo": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "on_target_throw": 0,
                "batted_pass": 0,
                "player": {
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461"
                },
                "team": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }, {
                "stat_type": "receive",
                "firstdown": 1,
                "target": 1,
                "reception": 1,
                "yards": 38,
                "yards_after_catch": 43,
                "inside_20": 0,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "f96db0af-5e25-42d1-a07a-49b4e065b364",
                    "name": "Christian McCaffrey",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1129507"
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
                    "id": "74761bca-f09c-4a06-8dd4-5f3cf2a2b897",
                    "name": "Tyler Hall",
                    "jersey": "37",
                    "position": "CB",
                    "sr_id": "sr:player:1205992"
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
                    "id": "dba7bc1b-c414-404a-8845-4b0245df64a9",
                    "name": "Roderic Teamer",
                    "jersey": "33",
                    "position": "SAF",
                    "sr_id": "sr:player:1194798"
                },
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
                "team": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                }
            }],
            "details": [{
                "category": "pass_completion",
                "description": "B.Purdy pass short left complete to SF 43.",
                "sequence": 0,
                "direction": "short left",
                "yards": 38,
                "start_location": {
                    "alias": "SF",
                    "yardline": 48
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 43
                },
                "players": [{
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461",
                    "role": "pass"
                }]
            }, {
                "category": "pass_reception",
                "description": "Catch made by C.McCaffrey at SF 43. Gain of 38 yards.",
                "sequence": 1,
                "yards": 38,
                "result": "tackled",
                "start_location": {
                    "alias": "SF",
                    "yardline": 43
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 14
                },
                "players": [{
                    "id": "f96db0af-5e25-42d1-a07a-49b4e065b364",
                    "name": "Christian McCaffrey",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1129507",
                    "role": "catch"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by T.Hall; R.Teamer at LV 14.",
                "sequence": 2,
                "start_location": {
                    "alias": "LV",
                    "yardline": 14
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 14
                },
                "players": [{
                    "id": "74761bca-f09c-4a06-8dd4-5f3cf2a2b897",
                    "name": "Tyler Hall",
                    "jersey": "37",
                    "position": "CB",
                    "sr_id": "sr:player:1205992",
                    "role": "ast_tackle"
                }, {
                    "id": "dba7bc1b-c414-404a-8845-4b0245df64a9",
                    "name": "Roderic Teamer",
                    "jersey": "33",
                    "position": "SAF",
                    "sr_id": "sr:player:1194798",
                    "role": "ast_tackle"
                }]
            }, {
                "category": "first_down",
                "sequence": 3,
                "result": "pass",
                "start_location": {
                    "alias": "LV",
                    "yardline": 14
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 14
                },
                "players": []
            }],
            "quarter": {
                "id": "c45b69d8-4bb6-468f-a7b9-b6dfc688ba74",
                "number": 4,
                "sequence": 4
            }
        }, {
            "type": "play",
            "id": "474263f0-8a30-11ed-9c65-6f281153d3a0",
            "sequence": 1672617598704.0,
            "clock": "2:23",
            "home_points": 27,
            "away_points": 33,
            "play_type": "rush",
            "scoring_play": true,
            "wall_clock": "2023-01-01T23:59:10+00:00",
            "description": "J.Mason rushed left end to LV End Zone for 14 yards. J.Mason for 14 yards, TOUCHDOWN.",
            "scoring_description": "J.Mason rushed left end to LV End Zone for 14 yards. J.Mason for 14 yards, TOUCHDOWN.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T23:59:58+00:00",
            "updated_at": "2023-01-02T00:04:25+00:00",
            "start_situation": {
                "clock": "2:23",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 14
                }
            },
            "end_situation": {
                "clock": "2:17",
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
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 15
                }
            },
            "score": {
                "sequence": 18,
                "clock": "2:17",
                "points": 7,
                "home_points": 27,
                "away_points": 33,
                "points-after-play": {
                    "id": "664e8a80-8a30-11ed-9c65-6f281153d3a0",
                    "sequence": 1672617602630.0,
                    "type": "extra_point"
                }
            },
            "statistics": [{
                "stat_type": "rush",
                "attempt": 1,
                "yards": 14,
                "touchdown": 1,
                "firstdown": 1,
                "inside_20": 1,
                "goaltogo": 0,
                "broken_tackles": 0,
                "kneel_down": 0,
                "scramble": 0,
                "player": {
                    "id": "af9f7390-ca80-11ec-97ae-e1573849d1a6",
                    "name": "Jordan Mason",
                    "jersey": "24",
                    "position": "RB",
                    "sr_id": "sr:player:1481066"
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
                "category": "rush",
                "player": {
                    "id": "af9f7390-ca80-11ec-97ae-e1573849d1a6",
                    "name": "Jordan Mason",
                    "jersey": "24",
                    "position": "RB",
                    "sr_id": "sr:player:1481066"
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
                "description": "J.Mason rushed left end to LV End Zone for 14 yards.",
                "sequence": 0,
                "direction": "left end",
                "yards": 14,
                "result": "touchdown",
                "start_location": {
                    "alias": "LV",
                    "yardline": 14
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 0
                },
                "players": [{
                    "id": "af9f7390-ca80-11ec-97ae-e1573849d1a6",
                    "name": "Jordan Mason",
                    "jersey": "24",
                    "position": "RB",
                    "sr_id": "sr:player:1481066",
                    "role": "rush"
                }]
            }, {
                "category": "touchdown",
                "description": "J.Mason for 14 yards, TOUCHDOWN.",
                "sequence": 1,
                "yards": 14,
                "result": "touchdown",
                "start_location": {
                    "alias": "LV",
                    "yardline": 0
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 0
                },
                "players": [{
                    "id": "af9f7390-ca80-11ec-97ae-e1573849d1a6",
                    "name": "Jordan Mason",
                    "jersey": "24",
                    "position": "RB",
                    "sr_id": "sr:player:1481066",
                    "role": "rush"
                }]
            }],
            "quarter": {
                "id": "c45b69d8-4bb6-468f-a7b9-b6dfc688ba74",
                "number": 4,
                "sequence": 4
            }
        }, {
            "type": "play",
            "id": "664e8a80-8a30-11ed-9c65-6f281153d3a0",
            "sequence": 1672617602630.0,
            "clock": "2:17",
            "home_points": 27,
            "away_points": 34,
            "play_type": "extra_point",
            "scoring_play": true,
            "wall_clock": "2023-01-02T00:00:00+00:00",
            "description": "R.Gould extra point is good.",
            "scoring_description": "J.Mason rushed left end to LV End Zone for 14 yards. J.Mason for 14 yards, TOUCHDOWN.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-02T00:00:02+00:00",
            "updated_at": "2023-01-02T00:04:25+00:00",
            "start_situation": {
                "clock": "2:17",
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
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 15
                }
            },
            "end_situation": {
                "clock": "2:17",
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
            "statistics": [{
                "stat_type": "extra_point",
                "attempt": 1,
                "made": 1,
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
            }],
            "details": [{
                "category": "extra_point_attempt",
                "description": "R.Gould extra point is good.",
                "sequence": 0,
                "result": "good",
                "start_location": {
                    "alias": "LV",
                    "yardline": 15
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 15
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
                "id": "c45b69d8-4bb6-468f-a7b9-b6dfc688ba74",
                "number": 4,
                "sequence": 4
            }
        }]
    }, {
        "id": "cb85649d-6580-4910-b25d-3b5715f5296e",
        "sequence": 20,
        "start_reason": "Kickoff",
        "end_reason": "Touchdown",
        "play_count": 3,
        "duration": "1:06",
        "first_downs": 4,
        "gain": 67,
        "penalty_yards": 8,
        "inside_20": true,
        "scoring_drive": true,
        "quarter": {
            "id": "c45b69d8-4bb6-468f-a7b9-b6dfc688ba74",
            "number": 4,
            "sequence": 4
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
            "id": "6a97a5e0-8a30-11ed-9c65-6f281153d3a0",
            "sequence": 1672617695714.0,
            "clock": "2:17",
            "home_points": 27,
            "away_points": 34,
            "play_type": "kickoff",
            "wall_clock": "2023-01-02T00:01:28+00:00",
            "description": "R.Gould kicks 65 yards from SF 35 to the LV End Zone. Touchback.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-02T00:01:35+00:00",
            "updated_at": "2023-01-02T00:01:36+00:00",
            "start_situation": {
                "clock": "2:17",
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
                "clock": "2:17",
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
                "id": "c45b69d8-4bb6-468f-a7b9-b6dfc688ba74",
                "number": 4,
                "sequence": 4
            }
        }, {
            "type": "play",
            "id": "a018da40-8a30-11ed-9c65-6f281153d3a0",
            "sequence": 1672617748306.0,
            "clock": "2:17",
            "home_points": 27,
            "away_points": 34,
            "play_type": "pass",
            "wall_clock": "2023-01-02T00:02:19+00:00",
            "description": "J.Stidham pass short middle complete to LV 40. Catch made by M.Hollins at LV 40. Gain of 21 yards. Tackled by T.Hufanga at LV 46.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-02T00:02:28+00:00",
            "updated_at": "2023-01-02T00:04:06+00:00",
            "start_situation": {
                "clock": "2:17",
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
                "clock": "2:17",
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
                    "yardline": 46
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 1,
                "yards": 21,
                "att_yards": 15,
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
                "yards": 21,
                "yards_after_catch": 6,
                "inside_20": 0,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "93cb5790-1012-4c42-bccb-5748c27ba7d6",
                    "name": "Mack Hollins",
                    "jersey": "10",
                    "position": "WR",
                    "sr_id": "sr:player:1129973"
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
                "qb_hit": 1,
                "def_target": 0,
                "def_comp": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "batted_pass": 0,
                "player": {
                    "id": "987c5e68-21d5-4bcb-a5f3-2e09cc512374",
                    "name": "Nick Bosa",
                    "jersey": "97",
                    "position": "DE",
                    "sr_id": "sr:player:1218376"
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
                    "id": "a1a2f797-77ac-4f13-8456-50a10a7fd61a",
                    "name": "Talanoa Hufanga",
                    "jersey": "29",
                    "position": "SAF",
                    "sr_id": "sr:player:1437360"
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
                "description": "J.Stidham pass short middle complete to LV 40.",
                "sequence": 0,
                "direction": "short middle",
                "yards": 21,
                "start_location": {
                    "alias": "LV",
                    "yardline": 25
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 40
                },
                "players": [{
                    "id": "582fe465-135a-4901-beef-60aebce99067",
                    "name": "Jarrett Stidham",
                    "jersey": "03",
                    "position": "QB",
                    "sr_id": "sr:player:1232264",
                    "role": "pass"
                }, {
                    "id": "987c5e68-21d5-4bcb-a5f3-2e09cc512374",
                    "name": "Nick Bosa",
                    "jersey": "97",
                    "position": "DE",
                    "sr_id": "sr:player:1218376",
                    "role": "hit"
                }]
            }, {
                "category": "pass_reception",
                "description": "Catch made by M.Hollins at LV 40. Gain of 21 yards.",
                "sequence": 1,
                "yards": 21,
                "result": "tackled",
                "start_location": {
                    "alias": "LV",
                    "yardline": 40
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 46
                },
                "players": [{
                    "id": "93cb5790-1012-4c42-bccb-5748c27ba7d6",
                    "name": "Mack Hollins",
                    "jersey": "10",
                    "position": "WR",
                    "sr_id": "sr:player:1129973",
                    "role": "catch"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by T.Hufanga at LV 46.",
                "sequence": 2,
                "start_location": {
                    "alias": "LV",
                    "yardline": 46
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 46
                },
                "players": [{
                    "id": "a1a2f797-77ac-4f13-8456-50a10a7fd61a",
                    "name": "Talanoa Hufanga",
                    "jersey": "29",
                    "position": "SAF",
                    "sr_id": "sr:player:1437360",
                    "role": "tackle"
                }]
            }, {
                "category": "first_down",
                "sequence": 3,
                "result": "pass",
                "start_location": {
                    "alias": "LV",
                    "yardline": 46
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 46
                },
                "players": []
            }],
            "quarter": {
                "id": "c45b69d8-4bb6-468f-a7b9-b6dfc688ba74",
                "number": 4,
                "sequence": 4
            }
        }, {
            "type": "play",
            "id": "04aed270-8a31-11ed-9c65-6f281153d3a0",
            "sequence": 1672617967877.0,
            "clock": "2:00",
            "home_points": 27,
            "away_points": 34,
            "play_type": "pass",
            "wall_clock": "2023-01-02T00:05:50+00:00",
            "description": "J.Stidham steps back to pass. J.Stidham pass incomplete short right intended for LV. PENALTY on LV-D.Parham, Offensive Holding, 10 yards, accepted. No Play.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-02T00:06:07+00:00",
            "updated_at": "2023-01-02T00:07:15+00:00",
            "start_situation": {
                "clock": "2:00",
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
                    "yardline": 46
                }
            },
            "end_situation": {
                "clock": "1:53",
                "down": 1,
                "yfd": 20,
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
                    "yardline": 36
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "nullified": true,
                "attempt": 1,
                "complete": 0,
                "att_yards": 0,
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
                "nullified": true,
                "target": 1,
                "inside_20": 0,
                "goaltogo": 0,
                "catchable": 0,
                "team": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390"
                }
            }, {
                "stat_type": "penalty",
                "penalty": 1,
                "yards": 10,
                "player": {
                    "id": "6d374e1c-cb16-41b1-bab5-d6e203e884dd",
                    "name": "Dylan Parham",
                    "jersey": "66",
                    "position": "G",
                    "sr_id": "sr:player:1254160"
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
                "nullified": true,
                "qb_hit": 1,
                "def_target": 0,
                "def_comp": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "batted_pass": 0,
                "player": {
                    "id": "92c77d16-f8bf-4716-bcde-6328838f4e65",
                    "name": "Jordan Willis",
                    "jersey": "75",
                    "position": "DE",
                    "sr_id": "sr:player:1129809"
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
                "category": "pass",
                "description": "J.Stidham steps back to pass.",
                "sequence": 0,
                "start_location": {
                    "alias": "LV",
                    "yardline": 46
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 46
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
                "category": "pass_incompletion",
                "description": "J.Stidham pass incomplete short right intended for LV.",
                "sequence": 1,
                "direction": "short right",
                "start_location": {
                    "alias": "LV",
                    "yardline": 46
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 46
                },
                "players": [{
                    "id": "582fe465-135a-4901-beef-60aebce99067",
                    "name": "Jarrett Stidham",
                    "jersey": "03",
                    "position": "QB",
                    "sr_id": "sr:player:1232264",
                    "role": "pass"
                }, {
                    "id": "92c77d16-f8bf-4716-bcde-6328838f4e65",
                    "name": "Jordan Willis",
                    "jersey": "75",
                    "position": "DE",
                    "sr_id": "sr:player:1129809",
                    "role": "hit"
                }]
            }, {
                "category": "penalty",
                "description": "PENALTY on LV-D.Parham, Offensive Holding, 10 yards, accepted.",
                "sequence": 2,
                "start_location": {
                    "alias": "LV",
                    "yardline": 46
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 36
                },
                "penalty": {
                    "description": "Offensive Holding",
                    "result": "accepted",
                    "yards": 10,
                    "team": {
                        "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                        "name": "Raiders",
                        "market": "Las Vegas",
                        "alias": "LV",
                        "sr_id": "sr:competitor:4390"
                    }
                },
                "players": [{
                    "id": "6d374e1c-cb16-41b1-bab5-d6e203e884dd",
                    "name": "Dylan Parham",
                    "jersey": "66",
                    "position": "G",
                    "sr_id": "sr:player:1254160",
                    "role": "penalty"
                }]
            }, {
                "category": "no_play",
                "description": "No Play.",
                "sequence": 3,
                "start_location": {
                    "alias": "LV",
                    "yardline": 36
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 36
                },
                "players": []
            }],
            "quarter": {
                "id": "c45b69d8-4bb6-468f-a7b9-b6dfc688ba74",
                "number": 4,
                "sequence": 4
            }
        }, {
            "type": "play",
            "id": "42d24320-8a31-11ed-9c65-6f281153d3a0",
            "sequence": 1672618018724.0,
            "clock": "1:53",
            "home_points": 27,
            "away_points": 34,
            "play_type": "pass",
            "wall_clock": "2023-01-02T00:06:46+00:00",
            "description": "J.Stidham pass deep right complete to SF 19. Catch made by D.Adams at SF 19. Gain of 45 yards. Tackled by A.Al-Shaair at SF 19. The Replay Official reviewed the pass completion and the play was upheld.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-02T00:06:58+00:00",
            "updated_at": "2023-01-02T00:09:40+00:00",
            "start_situation": {
                "clock": "1:53",
                "down": 1,
                "yfd": 20,
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
                    "yardline": 36
                }
            },
            "end_situation": {
                "clock": "1:19",
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
                    "yardline": 19
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 1,
                "yards": 45,
                "att_yards": 45,
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
                "yards": 45,
                "yards_after_catch": 0,
                "inside_20": 0,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "e7d6ae25-bf15-4660-8b37-c37716551de3",
                    "name": "Davante Adams",
                    "jersey": "17",
                    "position": "WR",
                    "sr_id": "sr:player:831457"
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
                "description": "J.Stidham pass deep right complete to SF 19.",
                "sequence": 0,
                "direction": "deep right",
                "yards": 45,
                "start_location": {
                    "alias": "LV",
                    "yardline": 36
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 19
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
                "description": "Catch made by D.Adams at SF 19. Gain of 45 yards.",
                "sequence": 1,
                "yards": 45,
                "result": "tackled",
                "start_location": {
                    "alias": "SF",
                    "yardline": 19
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 19
                },
                "players": [{
                    "id": "e7d6ae25-bf15-4660-8b37-c37716551de3",
                    "name": "Davante Adams",
                    "jersey": "17",
                    "position": "WR",
                    "sr_id": "sr:player:831457",
                    "role": "catch"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by A.Al-Shaair at SF 19.",
                "sequence": 2,
                "start_location": {
                    "alias": "SF",
                    "yardline": 19
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 19
                },
                "players": [{
                    "id": "e9348fc5-273d-4ac3-9760-462f37c025dc",
                    "name": "Azeez Al-Shaair",
                    "jersey": "51",
                    "position": "LB",
                    "sr_id": "sr:player:1204432",
                    "role": "tackle"
                }]
            }, {
                "category": "review",
                "description": "The Replay Official reviewed the pass completion and the play was upheld.",
                "sequence": 3,
                "start_location": {
                    "alias": "SF",
                    "yardline": 19
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 19
                },
                "review": {
                    "result": "upheld",
                    "type": "pass completion"
                },
                "players": []
            }, {
                "category": "first_down",
                "sequence": 4,
                "result": "pass",
                "start_location": {
                    "alias": "SF",
                    "yardline": 19
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 19
                },
                "players": []
            }],
            "quarter": {
                "id": "c45b69d8-4bb6-468f-a7b9-b6dfc688ba74",
                "number": 4,
                "sequence": 4
            }
        }, {
            "type": "play",
            "id": "a4e7f910-8a31-11ed-9c65-6f281153d3a0",
            "sequence": 1672618200802.0,
            "clock": "1:19",
            "home_points": 27,
            "away_points": 34,
            "play_type": "pass",
            "wall_clock": "2023-01-02T00:09:35+00:00",
            "description": "J.Stidham steps back to pass. J.Stidham pass incomplete deep middle intended for D.Waller. PENALTY on SF-F.Warner, Defensive Pass Interference, 18 yards, accepted. No Play.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-02T00:10:00+00:00",
            "updated_at": "2023-01-02T00:12:47+00:00",
            "start_situation": {
                "clock": "1:19",
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
                    "yardline": 19
                }
            },
            "end_situation": {
                "clock": "1:14",
                "down": 1,
                "yfd": 1,
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
                    "yardline": 1
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "nullified": true,
                "attempt": 1,
                "complete": 0,
                "att_yards": 0,
                "inside_20": 1,
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
                "nullified": true,
                "target": 1,
                "inside_20": 1,
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
                "stat_type": "penalty",
                "penalty": 1,
                "yards": 18,
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
            }, {
                "stat_type": "first_down",
                "category": "penalty",
                "team": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390"
                }
            }],
            "details": [{
                "category": "pass",
                "description": "J.Stidham steps back to pass.",
                "sequence": 0,
                "start_location": {
                    "alias": "SF",
                    "yardline": 19
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 19
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
                "category": "pass_incompletion",
                "description": "J.Stidham pass incomplete deep middle intended for D.Waller.",
                "sequence": 1,
                "direction": "deep middle",
                "start_location": {
                    "alias": "SF",
                    "yardline": 19
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 19
                },
                "players": [{
                    "id": "14c97c9f-26e8-4944-9299-f90de6aeada3",
                    "name": "Darren Waller",
                    "jersey": "83",
                    "position": "TE",
                    "sr_id": "sr:player:835255",
                    "role": "receive"
                }, {
                    "id": "582fe465-135a-4901-beef-60aebce99067",
                    "name": "Jarrett Stidham",
                    "jersey": "03",
                    "position": "QB",
                    "sr_id": "sr:player:1232264",
                    "role": "pass"
                }]
            }, {
                "category": "penalty",
                "description": "PENALTY on SF-F.Warner, Defensive Pass Interference, 18 yards, accepted.",
                "sequence": 2,
                "start_location": {
                    "alias": "SF",
                    "yardline": 19
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 1
                },
                "penalty": {
                    "description": "Defensive Pass Interference",
                    "result": "accepted",
                    "yards": 18,
                    "team": {
                        "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                        "name": "49ers",
                        "market": "San Francisco",
                        "alias": "SF",
                        "sr_id": "sr:competitor:4389"
                    }
                },
                "players": [{
                    "id": "75a74283-5ab6-49d4-bf2f-e6fcaf91ec36",
                    "name": "Fred Warner",
                    "jersey": "54",
                    "position": "LB",
                    "sr_id": "sr:player:1198502",
                    "role": "penalty"
                }]
            }, {
                "category": "no_play",
                "description": "No Play.",
                "sequence": 3,
                "start_location": {
                    "alias": "SF",
                    "yardline": 1
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 1
                },
                "players": []
            }, {
                "category": "first_down",
                "sequence": 4,
                "result": "penalty",
                "start_location": {
                    "alias": "SF",
                    "yardline": 1
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 1
                },
                "players": []
            }],
            "quarter": {
                "id": "c45b69d8-4bb6-468f-a7b9-b6dfc688ba74",
                "number": 4,
                "sequence": 4
            }
        }, {
            "type": "play",
            "id": "d56acbd0-8a31-11ed-9c65-6f281153d3a0",
            "sequence": 1672618268467.0,
            "clock": "1:14",
            "home_points": 33,
            "away_points": 34,
            "play_type": "rush",
            "scoring_play": true,
            "goaltogo": true,
            "wall_clock": "2023-01-02T00:10:31+00:00",
            "description": "J.Jacobs rushed left guard to SF End Zone for 1 yards. J.Jacobs for 1 yards, TOUCHDOWN.",
            "scoring_description": "J.Jacobs rushed left guard to SF End Zone for 1 yards. J.Jacobs for 1 yards, TOUCHDOWN.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-02T00:11:08+00:00",
            "updated_at": "2023-01-02T00:12:47+00:00",
            "start_situation": {
                "clock": "1:14",
                "down": 1,
                "yfd": 1,
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
                    "yardline": 1
                }
            },
            "end_situation": {
                "clock": "1:11",
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
                "sequence": 20,
                "clock": "1:11",
                "points": 7,
                "home_points": 33,
                "away_points": 34,
                "points-after-play": {
                    "id": "f73ec4f0-8a31-11ed-9c65-6f281153d3a0",
                    "sequence": 1672618276146.0,
                    "type": "extra_point"
                }
            },
            "statistics": [{
                "stat_type": "rush",
                "attempt": 1,
                "yards": 1,
                "touchdown": 1,
                "firstdown": 1,
                "inside_20": 1,
                "goaltogo": 1,
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
                "stat_type": "first_down",
                "category": "rush",
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
            }],
            "details": [{
                "category": "rush",
                "description": "J.Jacobs rushed left guard to SF End Zone for 1 yards.",
                "sequence": 0,
                "direction": "left guard",
                "yards": 1,
                "result": "touchdown",
                "start_location": {
                    "alias": "SF",
                    "yardline": 1
                },
                "end_location": {
                    "alias": "SF",
                    "yardline": 0
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
                "category": "touchdown",
                "description": "J.Jacobs for 1 yards, TOUCHDOWN.",
                "sequence": 1,
                "yards": 1,
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
                    "id": "61694ab9-b099-408e-b48d-6a643dd069ec",
                    "name": "Josh Jacobs",
                    "jersey": "28",
                    "position": "RB",
                    "sr_id": "sr:player:1216962",
                    "role": "rush"
                }]
            }],
            "quarter": {
                "id": "c45b69d8-4bb6-468f-a7b9-b6dfc688ba74",
                "number": 4,
                "sequence": 4
            }
        }, {
            "type": "play",
            "id": "f73ec4f0-8a31-11ed-9c65-6f281153d3a0",
            "sequence": 1672618276146.0,
            "clock": "1:11",
            "home_points": 34,
            "away_points": 34,
            "play_type": "extra_point",
            "scoring_play": true,
            "wall_clock": "2023-01-02T00:11:13+00:00",
            "description": "D.Carlson extra point is good.",
            "scoring_description": "J.Jacobs rushed left guard to SF End Zone for 1 yards. J.Jacobs for 1 yards, TOUCHDOWN.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-02T00:11:16+00:00",
            "updated_at": "2023-01-02T00:12:47+00:00",
            "start_situation": {
                "clock": "1:11",
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
                "clock": "1:11",
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
                "id": "c45b69d8-4bb6-468f-a7b9-b6dfc688ba74",
                "number": 4,
                "sequence": 4
            }
        }]
    }, {
        "id": "3a6ca9bc-bbfc-4404-a19f-3aa5c61a4591",
        "sequence": 23,
        "start_reason": "Interception",
        "end_reason": "Field Goal",
        "play_count": 2,
        "duration": "7:39",
        "first_downs": 0,
        "gain": -2,
        "penalty_yards": 0,
        "inside_20": true,
        "scoring_drive": true,
        "overtime": {
            "id": "b993f8b2-ebce-4a0d-ae01-531481c49a67",
            "number": 1,
            "sequence": 5
        },
        "team": {
            "id": "f0e724b0-4cbf-495a-be47-013907608da9",
            "name": "49ers",
            "market": "San Francisco",
            "alias": "SF",
            "sr_id": "sr:competitor:4389"
        },
        "plays": [{
            "type": "play",
            "id": "3cd88a30-8a34-11ed-9c65-6f281153d3a0",
            "sequence": 1672619312937.0,
            "clock": "7:39",
            "home_points": 34,
            "away_points": 34,
            "play_type": "rush",
            "goaltogo": true,
            "wall_clock": "2023-01-02T00:28:19+00:00",
            "description": "B.Purdy kneels at the LV 5.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-02T00:28:32+00:00",
            "updated_at": "2023-01-02T00:31:24+00:00",
            "start_situation": {
                "clock": "7:39",
                "down": 1,
                "yfd": 3,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 3
                }
            },
            "end_situation": {
                "clock": "6:57",
                "down": 2,
                "yfd": 5,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 5
                }
            },
            "statistics": [{
                "stat_type": "rush",
                "attempt": 1,
                "yards": -2,
                "firstdown": 0,
                "inside_20": 1,
                "goaltogo": 0,
                "broken_tackles": 0,
                "kneel_down": 1,
                "scramble": 0,
                "player": {
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461"
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
                "category": "kneel",
                "description": "B.Purdy kneels at the LV 5.",
                "sequence": 0,
                "start_location": {
                    "alias": "LV",
                    "yardline": 3
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 5
                },
                "players": [{
                    "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                    "name": "Brock Purdy",
                    "jersey": "13",
                    "position": "QB",
                    "sr_id": "sr:player:1420461",
                    "role": "pass"
                }]
            }],
            "overtime": {
                "id": "b993f8b2-ebce-4a0d-ae01-531481c49a67",
                "number": 1,
                "sequence": 5
            }
        }, {
            "type": "play",
            "id": "6d38e0d0-8a34-11ed-9c65-6f281153d3a0",
            "sequence": 1672619349159.0,
            "clock": "6:57",
            "home_points": 34,
            "away_points": 37,
            "play_type": "field_goal",
            "scoring_play": true,
            "goaltogo": true,
            "wall_clock": "2023-01-02T00:29:02+00:00",
            "description": "R.Gould 23 yard field goal attempt is good, Center-T.Pepper, Holder-M.Wishnowsky.",
            "scoring_description": "R.Gould 23 yard field goal attempt is good, Center-T.Pepper, Holder-M.Wishnowsky.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-02T00:29:09+00:00",
            "updated_at": "2023-01-02T00:31:24+00:00",
            "start_situation": {
                "clock": "6:57",
                "down": 2,
                "yfd": 5,
                "possession": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "49ers",
                    "market": "San Francisco",
                    "alias": "SF",
                    "sr_id": "sr:competitor:4389"
                },
                "location": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Raiders",
                    "market": "Las Vegas",
                    "alias": "LV",
                    "sr_id": "sr:competitor:4390",
                    "yardline": 5
                }
            },
            "end_situation": {
                "clock": "00:00",
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
            "score": {
                "sequence": 21,
                "clock": "00:00",
                "points": 3,
                "home_points": 34,
                "away_points": 37
            },
            "statistics": [{
                "stat_type": "field_goal",
                "attempt": 1,
                "att_yards": 23,
                "yards": 23,
                "missed": 0,
                "made": 1,
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
            }],
            "details": [{
                "category": "field_goal",
                "description": "R.Gould 23 yard field goal attempt is good, Center-T.Pepper, Holder-M.Wishnowsky.",
                "sequence": 0,
                "yards": 23,
                "result": "good",
                "start_location": {
                    "alias": "LV",
                    "yardline": 13
                },
                "end_location": {
                    "alias": "LV",
                    "yardline": 11
                },
                "players": [{
                    "id": "abd73d50-ce60-47f1-b37f-2f9a05b0d7b9",
                    "name": "Robbie Gould",
                    "jersey": "09",
                    "position": "K",
                    "sr_id": "sr:player:830975",
                    "role": "kick"
                }, {
                    "id": "e8e8a5fe-00d1-4ffc-9401-9e5cb254afea",
                    "name": "Mitch Wishnowsky",
                    "jersey": "18",
                    "position": "P",
                    "sr_id": "sr:player:1221966",
                    "role": "hold"
                }, {
                    "id": "0c727216-dadf-41d5-80e9-154ba9261663",
                    "name": "Taybor Pepper",
                    "jersey": "46",
                    "position": "LS",
                    "sr_id": "sr:player:1098114",
                    "role": "snap"
                }]
            }],
            "overtime": {
                "id": "b993f8b2-ebce-4a0d-ae01-531481c49a67",
                "number": 1,
                "sequence": 5
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
    }, {
        "type": "play",
        "id": "f21aede0-8a19-11ed-9c65-6f281153d3a0",
        "sequence": 1672608020314.0,
        "clock": "7:09",
        "home_points": 7,
        "away_points": 6,
        "play_type": "pass",
        "scoring_play": true,
        "goaltogo": true,
        "wall_clock": "2023-01-01T21:19:52+00:00",
        "description": "B.Purdy pass complete to LV End Zone. Catch made by B.Aiyuk at LV End Zone. Gain of 2 yards. B.Aiyuk for 2 yards, TOUCHDOWN.",
        "scoring_description": "B.Purdy pass complete to LV End Zone. Catch made by B.Aiyuk at LV End Zone. Gain of 2 yards. B.Aiyuk for 2 yards, TOUCHDOWN.",
        "fake_punt": false,
        "fake_field_goal": false,
        "screen_pass": false,
        "play_action": false,
        "run_pass_option": false,
        "created_at": "2023-01-01T21:20:20+00:00",
        "updated_at": "2023-01-01T21:23:40+00:00",
        "start_situation": {
            "clock": "7:09",
            "down": 2,
            "yfd": 2,
            "possession": {
                "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                "name": "49ers",
                "market": "San Francisco",
                "alias": "SF",
                "sr_id": "sr:competitor:4389"
            },
            "location": {
                "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                "name": "Raiders",
                "market": "Las Vegas",
                "alias": "LV",
                "sr_id": "sr:competitor:4390",
                "yardline": 2
            }
        },
        "end_situation": {
            "clock": "7:09",
            "down": 2,
            "yfd": 2,
            "possession": {
                "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                "name": "49ers",
                "market": "San Francisco",
                "alias": "SF",
                "sr_id": "sr:competitor:4389"
            },
            "location": {
                "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                "name": "Raiders",
                "market": "Las Vegas",
                "alias": "LV",
                "sr_id": "sr:competitor:4390",
                "yardline": 2
            }
        },
        "score": {
            "sequence": 4,
            "clock": "7:09",
            "points": 7,
            "home_points": 7,
            "away_points": 6,
            "points-after-play": {
                "id": "197871a0-8a1a-11ed-9c65-6f281153d3a0",
                "sequence": 1672608025269.0,
                "type": "extra_point"
            }
        },
        "statistics": [{
            "stat_type": "pass",
            "attempt": 1,
            "complete": 1,
            "yards": 2,
            "att_yards": 2,
            "firstdown": 1,
            "touchdown": 1,
            "inside_20": 1,
            "goaltogo": 1,
            "blitz": 0,
            "hurry": 0,
            "knockdown": 0,
            "on_target_throw": 0,
            "batted_pass": 0,
            "player": {
                "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                "name": "Brock Purdy",
                "jersey": "13",
                "position": "QB",
                "sr_id": "sr:player:1420461"
            },
            "team": {
                "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                "name": "49ers",
                "market": "San Francisco",
                "alias": "SF",
                "sr_id": "sr:competitor:4389"
            }
        }, {
            "stat_type": "receive",
            "firstdown": 1,
            "touchdown": 1,
            "target": 1,
            "reception": 1,
            "yards": 2,
            "yards_after_catch": 0,
            "inside_20": 1,
            "goaltogo": 1,
            "catchable": 0,
            "player": {
                "id": "c90471cc-fa60-4416-9388-5aebb5d877eb",
                "name": "Brandon Aiyuk",
                "jersey": "11",
                "position": "WR",
                "sr_id": "sr:player:2040579"
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
            "player": {
                "id": "c90471cc-fa60-4416-9388-5aebb5d877eb",
                "name": "Brandon Aiyuk",
                "jersey": "11",
                "position": "WR",
                "sr_id": "sr:player:2040579"
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
            "category": "pass_completion",
            "description": "B.Purdy pass complete to LV End Zone.",
            "sequence": 0,
            "yards": 2,
            "start_location": {
                "alias": "LV",
                "yardline": 2
            },
            "end_location": {
                "alias": "LV",
                "yardline": 0
            },
            "players": [{
                "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                "name": "Brock Purdy",
                "jersey": "13",
                "position": "QB",
                "sr_id": "sr:player:1420461",
                "role": "pass"
            }]
        }, {
            "category": "pass_reception",
            "description": "Catch made by B.Aiyuk at LV End Zone. Gain of 2 yards.",
            "sequence": 1,
            "yards": 2,
            "result": "touchdown",
            "start_location": {
                "alias": "LV",
                "yardline": 0
            },
            "end_location": {
                "alias": "LV",
                "yardline": 0
            },
            "players": [{
                "id": "c90471cc-fa60-4416-9388-5aebb5d877eb",
                "name": "Brandon Aiyuk",
                "jersey": "11",
                "position": "WR",
                "sr_id": "sr:player:2040579",
                "role": "catch"
            }]
        }, {
            "category": "touchdown",
            "description": "B.Aiyuk for 2 yards, TOUCHDOWN.",
            "sequence": 2,
            "yards": 2,
            "result": "touchdown",
            "start_location": {
                "alias": "LV",
                "yardline": 0
            },
            "end_location": {
                "alias": "LV",
                "yardline": 0
            },
            "players": [{
                "id": "c90471cc-fa60-4416-9388-5aebb5d877eb",
                "name": "Brandon Aiyuk",
                "jersey": "11",
                "position": "WR",
                "sr_id": "sr:player:2040579",
                "role": "catch"
            }]
        }],
        "quarter": {
            "id": "47804644-a799-46ed-b958-0f8c49647fb4",
            "number": 1,
            "sequence": 1
        }
    }, {
        "type": "play",
        "id": "197871a0-8a1a-11ed-9c65-6f281153d3a0",
        "sequence": 1672608025269.0,
        "clock": "7:06",
        "home_points": 7,
        "away_points": 7,
        "play_type": "extra_point",
        "scoring_play": true,
        "wall_clock": "2023-01-01T21:20:24+00:00",
        "description": "R.Gould extra point is good.",
        "scoring_description": "B.Purdy pass complete to LV End Zone. Catch made by B.Aiyuk at LV End Zone. Gain of 2 yards. B.Aiyuk for 2 yards, TOUCHDOWN.",
        "fake_punt": false,
        "fake_field_goal": false,
        "screen_pass": false,
        "play_action": false,
        "run_pass_option": false,
        "created_at": "2023-01-01T21:20:25+00:00",
        "updated_at": "2023-01-01T21:23:40+00:00",
        "start_situation": {
            "clock": "7:06",
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
                "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                "name": "Raiders",
                "market": "Las Vegas",
                "alias": "LV",
                "sr_id": "sr:competitor:4390",
                "yardline": 15
            }
        },
        "end_situation": {
            "clock": "7:06",
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
        "statistics": [{
            "stat_type": "extra_point",
            "attempt": 1,
            "made": 1,
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
        }],
        "details": [{
            "category": "extra_point_attempt",
            "description": "R.Gould extra point is good.",
            "sequence": 0,
            "result": "good",
            "start_location": {
                "alias": "LV",
                "yardline": 15
            },
            "end_location": {
                "alias": "LV",
                "yardline": 15
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
        "id": "ae1894b0-8a1b-11ed-9c65-6f281153d3a0",
        "sequence": 1672608746743.0,
        "clock": "1:49",
        "home_points": 10,
        "away_points": 7,
        "play_type": "field_goal",
        "scoring_play": true,
        "goaltogo": true,
        "wall_clock": "2023-01-01T21:32:19+00:00",
        "description": "D.Carlson 20 yard field goal attempt is good, Center-T.Sieg, Holder-A.Cole.",
        "scoring_description": "D.Carlson 20 yard field goal attempt is good, Center-T.Sieg, Holder-A.Cole.",
        "fake_punt": false,
        "fake_field_goal": false,
        "screen_pass": false,
        "play_action": false,
        "run_pass_option": false,
        "created_at": "2023-01-01T21:32:26+00:00",
        "updated_at": "2023-01-01T22:07:58+00:00",
        "start_situation": {
            "clock": "1:49",
            "down": 4,
            "yfd": 1,
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
                "yardline": 1
            }
        },
        "end_situation": {
            "clock": "1:45",
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
        "score": {
            "sequence": 5,
            "clock": "1:45",
            "points": 3,
            "home_points": 10,
            "away_points": 7
        },
        "statistics": [{
            "stat_type": "field_goal",
            "attempt": 1,
            "att_yards": 20,
            "yards": 20,
            "missed": 0,
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
            "category": "field_goal",
            "description": "D.Carlson 20 yard field goal attempt is good, Center-T.Sieg, Holder-A.Cole.",
            "sequence": 0,
            "yards": 20,
            "result": "good",
            "start_location": {
                "alias": "SF",
                "yardline": 10
            },
            "end_location": {
                "alias": "SF",
                "yardline": 9
            },
            "players": [{
                "id": "7bb70550-c28a-4e47-9a13-cc0c0fef8b38",
                "name": "Daniel Carlson",
                "jersey": "02",
                "position": "K",
                "sr_id": "sr:player:1226876",
                "role": "kick"
            }, {
                "id": "36f93677-a95b-4362-ac5f-6722f5c05b6d",
                "name": "AJ Cole",
                "jersey": "06",
                "position": "P",
                "sr_id": "sr:player:1206824",
                "role": "hold"
            }, {
                "id": "378df3b9-0a5c-4d68-a173-79bc0df07a66",
                "name": "Trent Sieg",
                "jersey": "47",
                "position": "LS",
                "sr_id": "sr:player:1182210",
                "role": "snap"
            }]
        }],
        "quarter": {
            "id": "47804644-a799-46ed-b958-0f8c49647fb4",
            "number": 1,
            "sequence": 1
        }
    }, {
        "type": "play",
        "id": "69072000-8a1e-11ed-9c65-6f281153d3a0",
        "sequence": 1672609937214.0,
        "clock": "9:45",
        "home_points": 10,
        "away_points": 13,
        "play_type": "pass",
        "scoring_play": true,
        "goaltogo": true,
        "wall_clock": "2023-01-01T21:51:41+00:00",
        "description": "B.Purdy pass short left complete to LV End Zone. Catch made by G.Kittle at LV End Zone. Gain of 2 yards. G.Kittle for 2 yards, TOUCHDOWN.",
        "scoring_description": "B.Purdy pass short left complete to LV End Zone. Catch made by G.Kittle at LV End Zone. Gain of 2 yards. G.Kittle for 2 yards, TOUCHDOWN.",
        "fake_punt": false,
        "fake_field_goal": false,
        "screen_pass": false,
        "play_action": false,
        "run_pass_option": false,
        "created_at": "2023-01-01T21:52:17+00:00",
        "updated_at": "2023-01-01T22:15:44+00:00",
        "start_situation": {
            "clock": "9:45",
            "down": 3,
            "yfd": 2,
            "possession": {
                "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                "name": "49ers",
                "market": "San Francisco",
                "alias": "SF",
                "sr_id": "sr:competitor:4389"
            },
            "location": {
                "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                "name": "Raiders",
                "market": "Las Vegas",
                "alias": "LV",
                "sr_id": "sr:competitor:4390",
                "yardline": 2
            }
        },
        "end_situation": {
            "clock": "9:38",
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
                "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                "name": "Raiders",
                "market": "Las Vegas",
                "alias": "LV",
                "sr_id": "sr:competitor:4390",
                "yardline": 15
            }
        },
        "score": {
            "sequence": 7,
            "clock": "9:38",
            "points": 7,
            "home_points": 10,
            "away_points": 13,
            "points-after-play": {
                "id": "8fdf9540-8a1e-11ed-9c65-6f281153d3a0",
                "sequence": 1672609942226.0,
                "type": "extra_point"
            }
        },
        "statistics": [{
            "stat_type": "pass",
            "attempt": 1,
            "complete": 1,
            "yards": 2,
            "att_yards": 2,
            "firstdown": 1,
            "touchdown": 1,
            "inside_20": 1,
            "goaltogo": 1,
            "blitz": 0,
            "hurry": 0,
            "knockdown": 0,
            "on_target_throw": 0,
            "batted_pass": 0,
            "player": {
                "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                "name": "Brock Purdy",
                "jersey": "13",
                "position": "QB",
                "sr_id": "sr:player:1420461"
            },
            "team": {
                "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                "name": "49ers",
                "market": "San Francisco",
                "alias": "SF",
                "sr_id": "sr:competitor:4389"
            }
        }, {
            "stat_type": "receive",
            "firstdown": 1,
            "touchdown": 1,
            "target": 1,
            "reception": 1,
            "yards": 2,
            "yards_after_catch": 0,
            "inside_20": 1,
            "goaltogo": 1,
            "catchable": 0,
            "player": {
                "id": "2ada91b0-036e-454f-83c3-6d939ff584a9",
                "name": "George Kittle",
                "jersey": "85",
                "position": "TE",
                "sr_id": "sr:player:1130029"
            },
            "team": {
                "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                "name": "49ers",
                "market": "San Francisco",
                "alias": "SF",
                "sr_id": "sr:competitor:4389"
            }
        }, {
            "stat_type": "down_conversion",
            "down": 3,
            "attempt": 1,
            "complete": 1,
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
            "player": {
                "id": "2ada91b0-036e-454f-83c3-6d939ff584a9",
                "name": "George Kittle",
                "jersey": "85",
                "position": "TE",
                "sr_id": "sr:player:1130029"
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
            "category": "pass_completion",
            "description": "B.Purdy pass short left complete to LV End Zone.",
            "sequence": 0,
            "direction": "short left",
            "yards": 2,
            "start_location": {
                "alias": "LV",
                "yardline": 2
            },
            "end_location": {
                "alias": "LV",
                "yardline": 0
            },
            "players": [{
                "id": "d5aef708-ad61-4ab8-a637-62ff96e92040",
                "name": "Brock Purdy",
                "jersey": "13",
                "position": "QB",
                "sr_id": "sr:player:1420461",
                "role": "pass"
            }]
        }, {
            "category": "pass_reception",
            "description": "Catch made by G.Kittle at LV End Zone. Gain of 2 yards.",
            "sequence": 1,
            "yards": 2,
            "result": "touchdown",
            "start_location": {
                "alias": "LV",
                "yardline": 0
            },
            "end_location": {
                "alias": "LV",
                "yardline": 0
            },
            "players": [{
                "id": "2ada91b0-036e-454f-83c3-6d939ff584a9",
                "name": "George Kittle",
                "jersey": "85",
                "position": "TE",
                "sr_id": "sr:player:1130029",
                "role": "catch"
            }]
        }, {
            "category": "touchdown",
            "description": "G.Kittle for 2 yards, TOUCHDOWN.",
            "sequence": 2,
            "yards": 2,
            "result": "touchdown",
            "start_location": {
                "alias": "LV",
                "yardline": 0
            },
            "end_location": {
                "alias": "LV",
                "yardline": 0
            },
            "players": [{
                "id": "2ada91b0-036e-454f-83c3-6d939ff584a9",
                "name": "George Kittle",
                "jersey": "85",
                "position": "TE",
                "sr_id": "sr:player:1130029",
                "role": "catch"
            }]
        }, {
            "category": "third_down_conversion",
            "sequence": 3,
            "result": "good",
            "start_location": {
                "alias": "LV",
                "yardline": 0
            },
            "end_location": {
                "alias": "LV",
                "yardline": 0
            },
            "players": []
        }],
        "quarter": {
            "id": "6c9fadba-e23e-4987-94d2-9b71423d3d4d",
            "number": 2,
            "sequence": 2
        }
    }, {
        "type": "play",
        "id": "8fdf9540-8a1e-11ed-9c65-6f281153d3a0",
        "sequence": 1672609942226.0,
        "clock": "9:38",
        "home_points": 10,
        "away_points": 14,
        "play_type": "extra_point",
        "scoring_play": true,
        "wall_clock": "2023-01-01T21:52:20+00:00",
        "description": "R.Gould extra point is good.",
        "scoring_description": "B.Purdy pass short left complete to LV End Zone. Catch made by G.Kittle at LV End Zone. Gain of 2 yards. G.Kittle for 2 yards, TOUCHDOWN.",
        "fake_punt": false,
        "fake_field_goal": false,
        "screen_pass": false,
        "play_action": false,
        "run_pass_option": false,
        "created_at": "2023-01-01T21:52:22+00:00",
        "updated_at": "2023-01-01T22:15:44+00:00",
        "start_situation": {
            "clock": "9:38",
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
                "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                "name": "Raiders",
                "market": "Las Vegas",
                "alias": "LV",
                "sr_id": "sr:competitor:4390",
                "yardline": 15
            }
        },
        "end_situation": {
            "clock": "9:38",
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
        "statistics": [{
            "stat_type": "extra_point",
            "attempt": 1,
            "made": 1,
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
        }],
        "details": [{
            "category": "extra_point_attempt",
            "description": "R.Gould extra point is good.",
            "sequence": 0,
            "result": "good",
            "start_location": {
                "alias": "LV",
                "yardline": 15
            },
            "end_location": {
                "alias": "LV",
                "yardline": 15
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
            "id": "6c9fadba-e23e-4987-94d2-9b71423d3d4d",
            "number": 2,
            "sequence": 2
        }
    }, {
        "type": "play",
        "id": "96862bd0-8a22-11ed-9c65-6f281153d3a0",
        "sequence": 1672611776384.0,
        "clock": "00:15",
        "home_points": 16,
        "away_points": 14,
        "play_type": "pass",
        "scoring_play": true,
        "goaltogo": true,
        "wall_clock": "2023-01-01T22:21:32+00:00",
        "description": "J.Stidham pass short left complete to SF End Zone. Catch made by D.Adams at SF End Zone. Gain of 4 yards. D.Adams for 4 yards, TOUCHDOWN.",
        "scoring_description": "J.Stidham pass short left complete to SF End Zone. Catch made by D.Adams at SF End Zone. Gain of 4 yards. D.Adams for 4 yards, TOUCHDOWN.",
        "fake_punt": false,
        "fake_field_goal": false,
        "screen_pass": false,
        "play_action": false,
        "run_pass_option": false,
        "created_at": "2023-01-01T22:22:56+00:00",
        "updated_at": "2023-01-01T22:29:33+00:00",
        "start_situation": {
            "clock": "00:15",
            "down": 1,
            "yfd": 4,
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
                "yardline": 4
            }
        },
        "end_situation": {
            "clock": "00:10",
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
            "sequence": 9,
            "clock": "00:10",
            "points": 7,
            "home_points": 16,
            "away_points": 14,
            "points-after-play": {
                "id": "d7f45ab0-8a22-11ed-9c65-6f281153d3a0",
                "sequence": 1672611783102.0,
                "type": "extra_point"
            }
        },
        "statistics": [{
            "stat_type": "pass",
            "attempt": 1,
            "complete": 1,
            "yards": 4,
            "att_yards": 4,
            "firstdown": 1,
            "touchdown": 1,
            "inside_20": 1,
            "goaltogo": 1,
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
            "yards": 4,
            "yards_after_catch": 0,
            "inside_20": 1,
            "goaltogo": 1,
            "catchable": 0,
            "player": {
                "id": "e7d6ae25-bf15-4660-8b37-c37716551de3",
                "name": "Davante Adams",
                "jersey": "17",
                "position": "WR",
                "sr_id": "sr:player:831457"
            },
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
                "id": "e7d6ae25-bf15-4660-8b37-c37716551de3",
                "name": "Davante Adams",
                "jersey": "17",
                "position": "WR",
                "sr_id": "sr:player:831457"
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
            "description": "J.Stidham pass short left complete to SF End Zone.",
            "sequence": 0,
            "direction": "short left",
            "yards": 4,
            "start_location": {
                "alias": "SF",
                "yardline": 4
            },
            "end_location": {
                "alias": "SF",
                "yardline": 0
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
            "description": "Catch made by D.Adams at SF End Zone. Gain of 4 yards.",
            "sequence": 1,
            "yards": 4,
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
                "id": "e7d6ae25-bf15-4660-8b37-c37716551de3",
                "name": "Davante Adams",
                "jersey": "17",
                "position": "WR",
                "sr_id": "sr:player:831457",
                "role": "catch"
            }]
        }, {
            "category": "touchdown",
            "description": "D.Adams for 4 yards, TOUCHDOWN.",
            "sequence": 2,
            "yards": 4,
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
                "id": "e7d6ae25-bf15-4660-8b37-c37716551de3",
                "name": "Davante Adams",
                "jersey": "17",
                "position": "WR",
                "sr_id": "sr:player:831457",
                "role": "catch"
            }]
        }],
        "quarter": {
            "id": "6c9fadba-e23e-4987-94d2-9b71423d3d4d",
            "number": 2,
            "sequence": 2
        }
    }, {
        "type": "play",
        "id": "d7f45ab0-8a22-11ed-9c65-6f281153d3a0",
        "sequence": 1672611783102.0,
        "clock": "00:10",
        "home_points": 17,
        "away_points": 14,
        "play_type": "extra_point",
        "scoring_play": true,
        "wall_clock": "2023-01-01T22:23:01+00:00",
        "description": "D.Carlson extra point is good.",
        "scoring_description": "J.Stidham pass short left complete to SF End Zone. Catch made by D.Adams at SF End Zone. Gain of 4 yards. D.Adams for 4 yards, TOUCHDOWN.",
        "fake_punt": false,
        "fake_field_goal": false,
        "screen_pass": false,
        "play_action": false,
        "run_pass_option": false,
        "created_at": "2023-01-01T22:23:03+00:00",
        "updated_at": "2023-01-01T22:29:33+00:00",
        "start_situation": {
            "clock": "00:10",
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
            "clock": "00:10",
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
            "id": "6c9fadba-e23e-4987-94d2-9b71423d3d4d",
            "number": 2,
            "sequence": 2
        }
    }, {
        "type": "play",
        "id": "608dced0-8a26-11ed-9c65-6f281153d3a0",
        "sequence": 1672613382844.0,
        "clock": "10:34",
        "home_points": 23,
        "away_points": 14,
        "play_type": "pass",
        "scoring_play": true,
        "wall_clock": "2023-01-01T22:48:57+00:00",
        "description": "J.Stidham pass deep left complete to SF 35. Catch made by D.Adams at SF 35. Gain of 60 yards. D.Adams for 60 yards, TOUCHDOWN. PENALTY on SF-C.Ward, Illegal Contact, 5 yards, declined.",
        "scoring_description": "J.Stidham pass deep left complete to SF 35. Catch made by D.Adams at SF 35. Gain of 60 yards. D.Adams for 60 yards, TOUCHDOWN. PENALTY on SF-C.Ward, Illegal Contact, 5 yards, declined.",
        "fake_punt": false,
        "fake_field_goal": false,
        "screen_pass": false,
        "play_action": false,
        "run_pass_option": false,
        "created_at": "2023-01-01T22:49:42+00:00",
        "updated_at": "2023-01-01T22:52:23+00:00",
        "start_situation": {
            "clock": "10:34",
            "down": 3,
            "yfd": 4,
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
                "yardline": 40
            }
        },
        "end_situation": {
            "clock": "10:22",
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
            "sequence": 11,
            "clock": "10:22",
            "points": 7,
            "home_points": 23,
            "away_points": 14,
            "points-after-play": {
                "id": "960b0b90-8a26-11ed-9c65-6f281153d3a0",
                "sequence": 1672613421560.0,
                "type": "extra_point"
            }
        },
        "statistics": [{
            "stat_type": "pass",
            "attempt": 1,
            "complete": 1,
            "yards": 60,
            "att_yards": 25,
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
            "yards": 60,
            "yards_after_catch": 35,
            "inside_20": 0,
            "goaltogo": 0,
            "catchable": 0,
            "player": {
                "id": "e7d6ae25-bf15-4660-8b37-c37716551de3",
                "name": "Davante Adams",
                "jersey": "17",
                "position": "WR",
                "sr_id": "sr:player:831457"
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
            "qb_hit": 1,
            "def_target": 0,
            "def_comp": 0,
            "blitz": 0,
            "hurry": 0,
            "knockdown": 0,
            "batted_pass": 0,
            "player": {
                "id": "a1a2f797-77ac-4f13-8456-50a10a7fd61a",
                "name": "Talanoa Hufanga",
                "jersey": "29",
                "position": "SAF",
                "sr_id": "sr:player:1437360"
            },
            "team": {
                "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                "name": "49ers",
                "market": "San Francisco",
                "alias": "SF",
                "sr_id": "sr:competitor:4389"
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
                "id": "e7d6ae25-bf15-4660-8b37-c37716551de3",
                "name": "Davante Adams",
                "jersey": "17",
                "position": "WR",
                "sr_id": "sr:player:831457"
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
            "description": "J.Stidham pass deep left complete to SF 35.",
            "sequence": 0,
            "direction": "deep left",
            "yards": 60,
            "start_location": {
                "alias": "LV",
                "yardline": 40
            },
            "end_location": {
                "alias": "SF",
                "yardline": 35
            },
            "players": [{
                "id": "582fe465-135a-4901-beef-60aebce99067",
                "name": "Jarrett Stidham",
                "jersey": "03",
                "position": "QB",
                "sr_id": "sr:player:1232264",
                "role": "pass"
            }, {
                "id": "a1a2f797-77ac-4f13-8456-50a10a7fd61a",
                "name": "Talanoa Hufanga",
                "jersey": "29",
                "position": "SAF",
                "sr_id": "sr:player:1437360",
                "role": "hit"
            }]
        }, {
            "category": "pass_reception",
            "description": "Catch made by D.Adams at SF 35. Gain of 60 yards.",
            "sequence": 1,
            "yards": 60,
            "result": "touchdown",
            "start_location": {
                "alias": "SF",
                "yardline": 35
            },
            "end_location": {
                "alias": "SF",
                "yardline": 0
            },
            "players": [{
                "id": "e7d6ae25-bf15-4660-8b37-c37716551de3",
                "name": "Davante Adams",
                "jersey": "17",
                "position": "WR",
                "sr_id": "sr:player:831457",
                "role": "catch"
            }]
        }, {
            "category": "touchdown",
            "description": "D.Adams for 60 yards, TOUCHDOWN.",
            "sequence": 2,
            "yards": 60,
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
                "id": "e7d6ae25-bf15-4660-8b37-c37716551de3",
                "name": "Davante Adams",
                "jersey": "17",
                "position": "WR",
                "sr_id": "sr:player:831457",
                "role": "catch"
            }]
        }, {
            "category": "penalty",
            "description": "PENALTY on SF-C.Ward, Illegal Contact, 5 yards, declined.",
            "sequence": 3,
            "start_location": {
                "alias": "LV",
                "yardline": 40
            },
            "end_location": {
                "alias": "LV",
                "yardline": 40
            },
            "penalty": {
                "description": "Illegal Contact",
                "result": "declined",
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
                "id": "04f6abef-834f-470e-9c15-8c0cc62fde4e",
                "name": "Charvarius Ward",
                "jersey": "07",
                "position": "CB",
                "sr_id": "sr:player:1183160",
                "role": "penalty"
            }]
        }, {
            "category": "third_down_conversion",
            "sequence": 4,
            "result": "good",
            "start_location": {
                "alias": "LV",
                "yardline": 45
            },
            "end_location": {
                "alias": "LV",
                "yardline": 45
            },
            "players": []
        }],
        "quarter": {
            "id": "6d257af9-0e2a-4233-8f0e-bb961745455d",
            "number": 3,
            "sequence": 3
        }
    }, {
        "type": "play",
        "id": "960b0b90-8a26-11ed-9c65-6f281153d3a0",
        "sequence": 1672613421560.0,
        "clock": "10:22",
        "home_points": 24,
        "away_points": 14,
        "play_type": "extra_point",
        "scoring_play": true,
        "wall_clock": "2023-01-01T22:50:19+00:00",
        "description": "D.Carlson extra point is good.",
        "scoring_description": "J.Stidham pass deep left complete to SF 35. Catch made by D.Adams at SF 35. Gain of 60 yards. D.Adams for 60 yards, TOUCHDOWN. PENALTY on SF-C.Ward, Illegal Contact, 5 yards, declined.",
        "fake_punt": false,
        "fake_field_goal": false,
        "screen_pass": false,
        "play_action": false,
        "run_pass_option": false,
        "created_at": "2023-01-01T22:50:21+00:00",
        "updated_at": "2023-01-01T22:50:22+00:00",
        "start_situation": {
            "clock": "10:22",
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
            "clock": "10:22",
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
            "id": "6d257af9-0e2a-4233-8f0e-bb961745455d",
            "number": 3,
            "sequence": 3
        }
    }, {
        "type": "play",
        "id": "fd7da160-8a27-11ed-9c65-6f281153d3a0",
        "sequence": 1672614061519.0,
        "clock": "5:29",
        "home_points": 24,
        "away_points": 20,
        "play_type": "rush",
        "scoring_play": true,
        "wall_clock": "2023-01-01T23:00:19+00:00",
        "description": "C.McCaffrey rushed right end to LV End Zone for 14 yards. C.McCaffrey for 14 yards, TOUCHDOWN.",
        "scoring_description": "C.McCaffrey rushed right end to LV End Zone for 14 yards. C.McCaffrey for 14 yards, TOUCHDOWN.",
        "fake_punt": false,
        "fake_field_goal": false,
        "screen_pass": false,
        "play_action": false,
        "run_pass_option": false,
        "created_at": "2023-01-01T23:01:01+00:00",
        "updated_at": "2023-01-01T23:04:11+00:00",
        "start_situation": {
            "clock": "5:29",
            "down": 1,
            "yfd": 10,
            "possession": {
                "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                "name": "49ers",
                "market": "San Francisco",
                "alias": "SF",
                "sr_id": "sr:competitor:4389"
            },
            "location": {
                "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                "name": "Raiders",
                "market": "Las Vegas",
                "alias": "LV",
                "sr_id": "sr:competitor:4390",
                "yardline": 14
            }
        },
        "end_situation": {
            "clock": "5:22",
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
                "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                "name": "Raiders",
                "market": "Las Vegas",
                "alias": "LV",
                "sr_id": "sr:competitor:4390",
                "yardline": 15
            }
        },
        "score": {
            "sequence": 13,
            "clock": "5:22",
            "points": 7,
            "home_points": 24,
            "away_points": 20,
            "points-after-play": {
                "id": "29e6a620-8a28-11ed-9c65-6f281153d3a0",
                "sequence": 1672614065254.0,
                "type": "extra_point"
            }
        },
        "statistics": [{
            "stat_type": "rush",
            "attempt": 1,
            "yards": 14,
            "touchdown": 1,
            "firstdown": 1,
            "inside_20": 1,
            "goaltogo": 0,
            "broken_tackles": 0,
            "kneel_down": 0,
            "scramble": 0,
            "player": {
                "id": "f96db0af-5e25-42d1-a07a-49b4e065b364",
                "name": "Christian McCaffrey",
                "jersey": "23",
                "position": "RB",
                "sr_id": "sr:player:1129507"
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
            "category": "rush",
            "player": {
                "id": "f96db0af-5e25-42d1-a07a-49b4e065b364",
                "name": "Christian McCaffrey",
                "jersey": "23",
                "position": "RB",
                "sr_id": "sr:player:1129507"
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
            "description": "C.McCaffrey rushed right end to LV End Zone for 14 yards.",
            "sequence": 0,
            "direction": "right end",
            "yards": 14,
            "result": "touchdown",
            "start_location": {
                "alias": "LV",
                "yardline": 14
            },
            "end_location": {
                "alias": "LV",
                "yardline": 0
            },
            "players": [{
                "id": "f96db0af-5e25-42d1-a07a-49b4e065b364",
                "name": "Christian McCaffrey",
                "jersey": "23",
                "position": "RB",
                "sr_id": "sr:player:1129507",
                "role": "rush"
            }]
        }, {
            "category": "touchdown",
            "description": "C.McCaffrey for 14 yards, TOUCHDOWN.",
            "sequence": 1,
            "yards": 14,
            "result": "touchdown",
            "start_location": {
                "alias": "LV",
                "yardline": 0
            },
            "end_location": {
                "alias": "LV",
                "yardline": 0
            },
            "players": [{
                "id": "f96db0af-5e25-42d1-a07a-49b4e065b364",
                "name": "Christian McCaffrey",
                "jersey": "23",
                "position": "RB",
                "sr_id": "sr:player:1129507",
                "role": "rush"
            }]
        }],
        "quarter": {
            "id": "6d257af9-0e2a-4233-8f0e-bb961745455d",
            "number": 3,
            "sequence": 3
        }
    }, {
        "type": "play",
        "id": "29e6a620-8a28-11ed-9c65-6f281153d3a0",
        "sequence": 1672614065254.0,
        "clock": "5:22",
        "home_points": 24,
        "away_points": 21,
        "play_type": "extra_point",
        "scoring_play": true,
        "wall_clock": "2023-01-01T23:01:03+00:00",
        "description": "R.Gould extra point is good.",
        "scoring_description": "C.McCaffrey rushed right end to LV End Zone for 14 yards. C.McCaffrey for 14 yards, TOUCHDOWN.",
        "fake_punt": false,
        "fake_field_goal": false,
        "screen_pass": false,
        "play_action": false,
        "run_pass_option": false,
        "created_at": "2023-01-01T23:01:05+00:00",
        "updated_at": "2023-01-01T23:04:11+00:00",
        "start_situation": {
            "clock": "5:22",
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
                "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                "name": "Raiders",
                "market": "Las Vegas",
                "alias": "LV",
                "sr_id": "sr:competitor:4390",
                "yardline": 15
            }
        },
        "end_situation": {
            "clock": "5:22",
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
        "statistics": [{
            "stat_type": "extra_point",
            "attempt": 1,
            "made": 1,
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
        }],
        "details": [{
            "category": "extra_point_attempt",
            "description": "R.Gould extra point is good.",
            "sequence": 0,
            "result": "good",
            "start_location": {
                "alias": "LV",
                "yardline": 15
            },
            "end_location": {
                "alias": "LV",
                "yardline": 15
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
            "id": "6d257af9-0e2a-4233-8f0e-bb961745455d",
            "number": 3,
            "sequence": 3
        }
    }, {
        "type": "play",
        "id": "03833d00-8a2c-11ed-9c65-6f281153d3a0",
        "sequence": 1672615750296.0,
        "clock": "12:39",
        "home_points": 24,
        "away_points": 24,
        "play_type": "field_goal",
        "scoring_play": true,
        "wall_clock": "2023-01-01T23:29:06+00:00",
        "description": "R.Gould 43 yard field goal attempt is good, Center-T.Pepper, Holder-M.Wishnowsky.",
        "scoring_description": "R.Gould 43 yard field goal attempt is good, Center-T.Pepper, Holder-M.Wishnowsky.",
        "fake_punt": false,
        "fake_field_goal": false,
        "screen_pass": false,
        "play_action": false,
        "run_pass_option": false,
        "created_at": "2023-01-01T23:29:10+00:00",
        "updated_at": "2023-01-01T23:29:11+00:00",
        "start_situation": {
            "clock": "12:39",
            "down": 4,
            "yfd": 7,
            "possession": {
                "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                "name": "49ers",
                "market": "San Francisco",
                "alias": "SF",
                "sr_id": "sr:competitor:4389"
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
            "clock": "12:34",
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
        "score": {
            "sequence": 14,
            "clock": "12:34",
            "points": 3,
            "home_points": 24,
            "away_points": 24
        },
        "statistics": [{
            "stat_type": "field_goal",
            "attempt": 1,
            "att_yards": 43,
            "yards": 43,
            "missed": 0,
            "made": 1,
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
        }],
        "details": [{
            "category": "field_goal",
            "description": "R.Gould 43 yard field goal attempt is good, Center-T.Pepper, Holder-M.Wishnowsky.",
            "sequence": 0,
            "yards": 43,
            "result": "good",
            "start_location": {
                "alias": "LV",
                "yardline": 33
            },
            "end_location": {
                "alias": "LV",
                "yardline": 33
            },
            "players": [{
                "id": "abd73d50-ce60-47f1-b37f-2f9a05b0d7b9",
                "name": "Robbie Gould",
                "jersey": "09",
                "position": "K",
                "sr_id": "sr:player:830975",
                "role": "kick"
            }, {
                "id": "e8e8a5fe-00d1-4ffc-9401-9e5cb254afea",
                "name": "Mitch Wishnowsky",
                "jersey": "18",
                "position": "P",
                "sr_id": "sr:player:1221966",
                "role": "hold"
            }, {
                "id": "0c727216-dadf-41d5-80e9-154ba9261663",
                "name": "Taybor Pepper",
                "jersey": "46",
                "position": "LS",
                "sr_id": "sr:player:1098114",
                "role": "snap"
            }]
        }],
        "quarter": {
            "id": "c45b69d8-4bb6-468f-a7b9-b6dfc688ba74",
            "number": 4,
            "sequence": 4
        }
    }, {
        "type": "play",
        "id": "62802f50-8a2e-11ed-9c65-6f281153d3a0",
        "sequence": 1672616754644.0,
        "clock": "6:48",
        "home_points": 24,
        "away_points": 27,
        "play_type": "field_goal",
        "scoring_play": true,
        "wall_clock": "2023-01-01T23:45:51+00:00",
        "description": "R.Gould 24 yard field goal attempt is good, Center-T.Pepper, Holder-M.Wishnowsky.",
        "scoring_description": "R.Gould 24 yard field goal attempt is good, Center-T.Pepper, Holder-M.Wishnowsky.",
        "fake_punt": false,
        "fake_field_goal": false,
        "screen_pass": false,
        "play_action": false,
        "run_pass_option": false,
        "created_at": "2023-01-01T23:45:54+00:00",
        "updated_at": "2023-01-01T23:52:34+00:00",
        "start_situation": {
            "clock": "6:48",
            "down": 4,
            "yfd": 4,
            "possession": {
                "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                "name": "49ers",
                "market": "San Francisco",
                "alias": "SF",
                "sr_id": "sr:competitor:4389"
            },
            "location": {
                "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                "name": "Raiders",
                "market": "Las Vegas",
                "alias": "LV",
                "sr_id": "sr:competitor:4390",
                "yardline": 6
            }
        },
        "end_situation": {
            "clock": "6:44",
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
        "score": {
            "sequence": 15,
            "clock": "6:44",
            "points": 3,
            "home_points": 24,
            "away_points": 27
        },
        "statistics": [{
            "stat_type": "field_goal",
            "attempt": 1,
            "att_yards": 24,
            "yards": 24,
            "missed": 0,
            "made": 1,
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
        }],
        "details": [{
            "category": "field_goal",
            "description": "R.Gould 24 yard field goal attempt is good, Center-T.Pepper, Holder-M.Wishnowsky.",
            "sequence": 0,
            "yards": 24,
            "result": "good",
            "start_location": {
                "alias": "LV",
                "yardline": 14
            },
            "end_location": {
                "alias": "LV",
                "yardline": 14
            },
            "players": [{
                "id": "abd73d50-ce60-47f1-b37f-2f9a05b0d7b9",
                "name": "Robbie Gould",
                "jersey": "09",
                "position": "K",
                "sr_id": "sr:player:830975",
                "role": "kick"
            }, {
                "id": "e8e8a5fe-00d1-4ffc-9401-9e5cb254afea",
                "name": "Mitch Wishnowsky",
                "jersey": "18",
                "position": "P",
                "sr_id": "sr:player:1221966",
                "role": "hold"
            }, {
                "id": "0c727216-dadf-41d5-80e9-154ba9261663",
                "name": "Taybor Pepper",
                "jersey": "46",
                "position": "LS",
                "sr_id": "sr:player:1098114",
                "role": "snap"
            }]
        }],
        "quarter": {
            "id": "c45b69d8-4bb6-468f-a7b9-b6dfc688ba74",
            "number": 4,
            "sequence": 4
        }
    }, {
        "type": "play",
        "id": "73607270-8a2f-11ed-9c65-6f281153d3a0",
        "sequence": 1672617245511.0,
        "clock": "4:13",
        "home_points": 27,
        "away_points": 27,
        "play_type": "field_goal",
        "scoring_play": true,
        "wall_clock": "2023-01-01T23:53:59+00:00",
        "description": "D.Carlson 57 yard field goal attempt is good, Center-T.Sieg, Holder-A.Cole.",
        "scoring_description": "D.Carlson 57 yard field goal attempt is good, Center-T.Sieg, Holder-A.Cole.",
        "fake_punt": false,
        "fake_field_goal": false,
        "screen_pass": false,
        "play_action": false,
        "run_pass_option": false,
        "created_at": "2023-01-01T23:54:05+00:00",
        "updated_at": "2023-01-01T23:54:23+00:00",
        "start_situation": {
            "clock": "4:13",
            "down": 4,
            "yfd": 9,
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
                "yardline": 38
            }
        },
        "end_situation": {
            "clock": "4:08",
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
        "score": {
            "sequence": 16,
            "clock": "4:08",
            "points": 3,
            "home_points": 27,
            "away_points": 27
        },
        "statistics": [{
            "stat_type": "field_goal",
            "attempt": 1,
            "att_yards": 57,
            "yards": 57,
            "missed": 0,
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
            "category": "field_goal",
            "description": "D.Carlson 57 yard field goal attempt is good, Center-T.Sieg, Holder-A.Cole.",
            "sequence": 0,
            "yards": 57,
            "result": "good",
            "start_location": {
                "alias": "SF",
                "yardline": 47
            },
            "end_location": {
                "alias": "SF",
                "yardline": 46
            },
            "players": [{
                "id": "7bb70550-c28a-4e47-9a13-cc0c0fef8b38",
                "name": "Daniel Carlson",
                "jersey": "02",
                "position": "K",
                "sr_id": "sr:player:1226876",
                "role": "kick"
            }, {
                "id": "36f93677-a95b-4362-ac5f-6722f5c05b6d",
                "name": "AJ Cole",
                "jersey": "06",
                "position": "P",
                "sr_id": "sr:player:1206824",
                "role": "hold"
            }, {
                "id": "378df3b9-0a5c-4d68-a173-79bc0df07a66",
                "name": "Trent Sieg",
                "jersey": "47",
                "position": "LS",
                "sr_id": "sr:player:1182210",
                "role": "snap"
            }]
        }],
        "quarter": {
            "id": "c45b69d8-4bb6-468f-a7b9-b6dfc688ba74",
            "number": 4,
            "sequence": 4
        }
    }, {
        "type": "play",
        "id": "474263f0-8a30-11ed-9c65-6f281153d3a0",
        "sequence": 1672617598704.0,
        "clock": "2:23",
        "home_points": 27,
        "away_points": 33,
        "play_type": "rush",
        "scoring_play": true,
        "wall_clock": "2023-01-01T23:59:10+00:00",
        "description": "J.Mason rushed left end to LV End Zone for 14 yards. J.Mason for 14 yards, TOUCHDOWN.",
        "scoring_description": "J.Mason rushed left end to LV End Zone for 14 yards. J.Mason for 14 yards, TOUCHDOWN.",
        "fake_punt": false,
        "fake_field_goal": false,
        "screen_pass": false,
        "play_action": false,
        "run_pass_option": false,
        "created_at": "2023-01-01T23:59:58+00:00",
        "updated_at": "2023-01-02T00:04:25+00:00",
        "start_situation": {
            "clock": "2:23",
            "down": 1,
            "yfd": 10,
            "possession": {
                "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                "name": "49ers",
                "market": "San Francisco",
                "alias": "SF",
                "sr_id": "sr:competitor:4389"
            },
            "location": {
                "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                "name": "Raiders",
                "market": "Las Vegas",
                "alias": "LV",
                "sr_id": "sr:competitor:4390",
                "yardline": 14
            }
        },
        "end_situation": {
            "clock": "2:17",
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
                "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                "name": "Raiders",
                "market": "Las Vegas",
                "alias": "LV",
                "sr_id": "sr:competitor:4390",
                "yardline": 15
            }
        },
        "score": {
            "sequence": 18,
            "clock": "2:17",
            "points": 7,
            "home_points": 27,
            "away_points": 33,
            "points-after-play": {
                "id": "664e8a80-8a30-11ed-9c65-6f281153d3a0",
                "sequence": 1672617602630.0,
                "type": "extra_point"
            }
        },
        "statistics": [{
            "stat_type": "rush",
            "attempt": 1,
            "yards": 14,
            "touchdown": 1,
            "firstdown": 1,
            "inside_20": 1,
            "goaltogo": 0,
            "broken_tackles": 0,
            "kneel_down": 0,
            "scramble": 0,
            "player": {
                "id": "af9f7390-ca80-11ec-97ae-e1573849d1a6",
                "name": "Jordan Mason",
                "jersey": "24",
                "position": "RB",
                "sr_id": "sr:player:1481066"
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
            "category": "rush",
            "player": {
                "id": "af9f7390-ca80-11ec-97ae-e1573849d1a6",
                "name": "Jordan Mason",
                "jersey": "24",
                "position": "RB",
                "sr_id": "sr:player:1481066"
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
            "description": "J.Mason rushed left end to LV End Zone for 14 yards.",
            "sequence": 0,
            "direction": "left end",
            "yards": 14,
            "result": "touchdown",
            "start_location": {
                "alias": "LV",
                "yardline": 14
            },
            "end_location": {
                "alias": "LV",
                "yardline": 0
            },
            "players": [{
                "id": "af9f7390-ca80-11ec-97ae-e1573849d1a6",
                "name": "Jordan Mason",
                "jersey": "24",
                "position": "RB",
                "sr_id": "sr:player:1481066",
                "role": "rush"
            }]
        }, {
            "category": "touchdown",
            "description": "J.Mason for 14 yards, TOUCHDOWN.",
            "sequence": 1,
            "yards": 14,
            "result": "touchdown",
            "start_location": {
                "alias": "LV",
                "yardline": 0
            },
            "end_location": {
                "alias": "LV",
                "yardline": 0
            },
            "players": [{
                "id": "af9f7390-ca80-11ec-97ae-e1573849d1a6",
                "name": "Jordan Mason",
                "jersey": "24",
                "position": "RB",
                "sr_id": "sr:player:1481066",
                "role": "rush"
            }]
        }],
        "quarter": {
            "id": "c45b69d8-4bb6-468f-a7b9-b6dfc688ba74",
            "number": 4,
            "sequence": 4
        }
    }, {
        "type": "play",
        "id": "664e8a80-8a30-11ed-9c65-6f281153d3a0",
        "sequence": 1672617602630.0,
        "clock": "2:17",
        "home_points": 27,
        "away_points": 34,
        "play_type": "extra_point",
        "scoring_play": true,
        "wall_clock": "2023-01-02T00:00:00+00:00",
        "description": "R.Gould extra point is good.",
        "scoring_description": "J.Mason rushed left end to LV End Zone for 14 yards. J.Mason for 14 yards, TOUCHDOWN.",
        "fake_punt": false,
        "fake_field_goal": false,
        "screen_pass": false,
        "play_action": false,
        "run_pass_option": false,
        "created_at": "2023-01-02T00:00:02+00:00",
        "updated_at": "2023-01-02T00:04:25+00:00",
        "start_situation": {
            "clock": "2:17",
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
                "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                "name": "Raiders",
                "market": "Las Vegas",
                "alias": "LV",
                "sr_id": "sr:competitor:4390",
                "yardline": 15
            }
        },
        "end_situation": {
            "clock": "2:17",
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
        "statistics": [{
            "stat_type": "extra_point",
            "attempt": 1,
            "made": 1,
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
        }],
        "details": [{
            "category": "extra_point_attempt",
            "description": "R.Gould extra point is good.",
            "sequence": 0,
            "result": "good",
            "start_location": {
                "alias": "LV",
                "yardline": 15
            },
            "end_location": {
                "alias": "LV",
                "yardline": 15
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
            "id": "c45b69d8-4bb6-468f-a7b9-b6dfc688ba74",
            "number": 4,
            "sequence": 4
        }
    }, {
        "type": "play",
        "id": "d56acbd0-8a31-11ed-9c65-6f281153d3a0",
        "sequence": 1672618268467.0,
        "clock": "1:14",
        "home_points": 33,
        "away_points": 34,
        "play_type": "rush",
        "scoring_play": true,
        "goaltogo": true,
        "wall_clock": "2023-01-02T00:10:31+00:00",
        "description": "J.Jacobs rushed left guard to SF End Zone for 1 yards. J.Jacobs for 1 yards, TOUCHDOWN.",
        "scoring_description": "J.Jacobs rushed left guard to SF End Zone for 1 yards. J.Jacobs for 1 yards, TOUCHDOWN.",
        "fake_punt": false,
        "fake_field_goal": false,
        "screen_pass": false,
        "play_action": false,
        "run_pass_option": false,
        "created_at": "2023-01-02T00:11:08+00:00",
        "updated_at": "2023-01-02T00:12:47+00:00",
        "start_situation": {
            "clock": "1:14",
            "down": 1,
            "yfd": 1,
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
                "yardline": 1
            }
        },
        "end_situation": {
            "clock": "1:11",
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
            "sequence": 20,
            "clock": "1:11",
            "points": 7,
            "home_points": 33,
            "away_points": 34,
            "points-after-play": {
                "id": "f73ec4f0-8a31-11ed-9c65-6f281153d3a0",
                "sequence": 1672618276146.0,
                "type": "extra_point"
            }
        },
        "statistics": [{
            "stat_type": "rush",
            "attempt": 1,
            "yards": 1,
            "touchdown": 1,
            "firstdown": 1,
            "inside_20": 1,
            "goaltogo": 1,
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
            "stat_type": "first_down",
            "category": "rush",
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
        }],
        "details": [{
            "category": "rush",
            "description": "J.Jacobs rushed left guard to SF End Zone for 1 yards.",
            "sequence": 0,
            "direction": "left guard",
            "yards": 1,
            "result": "touchdown",
            "start_location": {
                "alias": "SF",
                "yardline": 1
            },
            "end_location": {
                "alias": "SF",
                "yardline": 0
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
            "category": "touchdown",
            "description": "J.Jacobs for 1 yards, TOUCHDOWN.",
            "sequence": 1,
            "yards": 1,
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
                "id": "61694ab9-b099-408e-b48d-6a643dd069ec",
                "name": "Josh Jacobs",
                "jersey": "28",
                "position": "RB",
                "sr_id": "sr:player:1216962",
                "role": "rush"
            }]
        }],
        "quarter": {
            "id": "c45b69d8-4bb6-468f-a7b9-b6dfc688ba74",
            "number": 4,
            "sequence": 4
        }
    }, {
        "type": "play",
        "id": "f73ec4f0-8a31-11ed-9c65-6f281153d3a0",
        "sequence": 1672618276146.0,
        "clock": "1:11",
        "home_points": 34,
        "away_points": 34,
        "play_type": "extra_point",
        "scoring_play": true,
        "wall_clock": "2023-01-02T00:11:13+00:00",
        "description": "D.Carlson extra point is good.",
        "scoring_description": "J.Jacobs rushed left guard to SF End Zone for 1 yards. J.Jacobs for 1 yards, TOUCHDOWN.",
        "fake_punt": false,
        "fake_field_goal": false,
        "screen_pass": false,
        "play_action": false,
        "run_pass_option": false,
        "created_at": "2023-01-02T00:11:16+00:00",
        "updated_at": "2023-01-02T00:12:47+00:00",
        "start_situation": {
            "clock": "1:11",
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
            "clock": "1:11",
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
            "id": "c45b69d8-4bb6-468f-a7b9-b6dfc688ba74",
            "number": 4,
            "sequence": 4
        }
    }, {
        "type": "play",
        "id": "6d38e0d0-8a34-11ed-9c65-6f281153d3a0",
        "sequence": 1672619349159.0,
        "clock": "6:57",
        "home_points": 34,
        "away_points": 37,
        "play_type": "field_goal",
        "scoring_play": true,
        "goaltogo": true,
        "wall_clock": "2023-01-02T00:29:02+00:00",
        "description": "R.Gould 23 yard field goal attempt is good, Center-T.Pepper, Holder-M.Wishnowsky.",
        "scoring_description": "R.Gould 23 yard field goal attempt is good, Center-T.Pepper, Holder-M.Wishnowsky.",
        "fake_punt": false,
        "fake_field_goal": false,
        "screen_pass": false,
        "play_action": false,
        "run_pass_option": false,
        "created_at": "2023-01-02T00:29:09+00:00",
        "updated_at": "2023-01-02T00:31:24+00:00",
        "start_situation": {
            "clock": "6:57",
            "down": 2,
            "yfd": 5,
            "possession": {
                "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                "name": "49ers",
                "market": "San Francisco",
                "alias": "SF",
                "sr_id": "sr:competitor:4389"
            },
            "location": {
                "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                "name": "Raiders",
                "market": "Las Vegas",
                "alias": "LV",
                "sr_id": "sr:competitor:4390",
                "yardline": 5
            }
        },
        "end_situation": {
            "clock": "00:00",
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
        "score": {
            "sequence": 21,
            "clock": "00:00",
            "points": 3,
            "home_points": 34,
            "away_points": 37
        },
        "statistics": [{
            "stat_type": "field_goal",
            "attempt": 1,
            "att_yards": 23,
            "yards": 23,
            "missed": 0,
            "made": 1,
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
        }],
        "details": [{
            "category": "field_goal",
            "description": "R.Gould 23 yard field goal attempt is good, Center-T.Pepper, Holder-M.Wishnowsky.",
            "sequence": 0,
            "yards": 23,
            "result": "good",
            "start_location": {
                "alias": "LV",
                "yardline": 13
            },
            "end_location": {
                "alias": "LV",
                "yardline": 11
            },
            "players": [{
                "id": "abd73d50-ce60-47f1-b37f-2f9a05b0d7b9",
                "name": "Robbie Gould",
                "jersey": "09",
                "position": "K",
                "sr_id": "sr:player:830975",
                "role": "kick"
            }, {
                "id": "e8e8a5fe-00d1-4ffc-9401-9e5cb254afea",
                "name": "Mitch Wishnowsky",
                "jersey": "18",
                "position": "P",
                "sr_id": "sr:player:1221966",
                "role": "hold"
            }, {
                "id": "0c727216-dadf-41d5-80e9-154ba9261663",
                "name": "Taybor Pepper",
                "jersey": "46",
                "position": "LS",
                "sr_id": "sr:player:1098114",
                "role": "snap"
            }]
        }],
        "overtime": {
            "id": "b993f8b2-ebce-4a0d-ae01-531481c49a67",
            "number": 1,
            "sequence": 5
        }
    }],
    "_comment": "Generation started @ 2023-01-02 00:42:33 UTC ended @ 2023-01-02 00:42:34 UTC"
}

export default overtime;