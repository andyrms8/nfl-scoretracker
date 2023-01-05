const hardcoded_game_in_progress_late =
{
    "id": "1be368b9-7379-4d76-b954-9d3e7eefc1c1",
    "status": "inprogress",
    "scheduled": "2023-01-01T18:00:00+00:00",
    "entry_mode": "LDE",
    "clock": "1:16",
    "quarter": 4,
    "sr_id": "sr:match:33623639",
    "game_type": "regular",
    "weather": {
        "condition": "Sunny",
        "humidity": 73,
        "temp": 53,
        "wind": {
            "speed": 2,
            "direction": "WNW"
        }
    },
    "coin_toss": [{
        "home": {
            "outcome": "won",
            "decision": "defer",
            "direction": "north"
        },
        "away": {
            "outcome": "lost",
            "decision": "receive",
            "direction": "north"
        },
        "quarter": 1
    }, {
        "home": {
            "outcome": "won",
            "decision": "receive",
            "direction": "south"
        },
        "away": {
            "outcome": "lost",
            "decision": "kick",
            "direction": "south"
        },
        "quarter": 3
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
            "id": "e43310b1-cb82-4df9-8be5-e9b39637031b",
            "name": "Gillette Stadium",
            "city": "Foxborough",
            "state": "MA",
            "country": "USA",
            "zip": "02035",
            "address": "One Patriot Place",
            "capacity": 66829,
            "surface": "artificial",
            "roof_type": "outdoor",
            "sr_id": "sr:venue:2379",
            "location": {
                "lat": "42.090944",
                "lng": "-71.264344"
            }
        },
        "home": {
            "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
            "name": "Patriots",
            "market": "New England",
            "alias": "NE",
            "sr_id": "sr:competitor:4424",
            "used_timeouts": 2,
            "remaining_timeouts": 1,
            "points": 23,
            "used_challenges": 0,
            "remaining_challenges": 2
        },
        "away": {
            "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
            "name": "Dolphins",
            "market": "Miami",
            "alias": "MIA",
            "sr_id": "sr:competitor:4287",
            "used_timeouts": 3,
            "remaining_timeouts": 0,
            "points": 14,
            "used_challenges": 1,
            "remaining_challenges": 1
        }
    },
    "situation": {
        "clock": "1:16",
        "down": 1,
        "yfd": 8,
        "possession": {
            "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
            "name": "Dolphins",
            "market": "Miami",
            "alias": "MIA",
            "sr_id": "sr:competitor:4287"
        },
        "location": {
            "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
            "name": "Patriots",
            "market": "New England",
            "alias": "NE",
            "sr_id": "sr:competitor:4424",
            "yardline": 8
        }
    },
    "last_event": {
        "type": "event",
        "id": "b4345490-8a18-11ed-9308-3ba3ec8cbdcb",
        "sequence": 1672607411759.0,
        "clock": "1:16",
        "event_type": "timeout",
        "description": "Timeout #2 by NE.",
        "created_at": "2023-01-01T21:10:11+00:00",
        "updated_at": "2023-01-01T21:10:13+00:00",
        "wall_clock": "2023-01-01T21:10:27+00:00"
    },
    "scoring": [{
        "period_type": "quarter",
        "id": "7c4dbc34-d225-4a5f-b90f-a44695d5c4c4",
        "number": 1,
        "sequence": 1,
        "home_points": 7,
        "away_points": 0
    }, {
        "period_type": "quarter",
        "id": "ae302c16-4827-415c-b24a-ec63d06191aa",
        "number": 2,
        "sequence": 2,
        "home_points": 0,
        "away_points": 7
    }, {
        "period_type": "quarter",
        "id": "7c0b12fb-58f6-4b1a-a982-6833c3a3eb58",
        "number": 3,
        "sequence": 3,
        "home_points": 9,
        "away_points": 7
    }, {
        "period_type": "quarter",
        "id": "54502be7-4079-4c4e-9b3f-84935363049c",
        "number": 4,
        "sequence": 4,
        "home_points": 7,
        "away_points": 0
    }],
    "scoring_drives": [{
        "id": "7bafec5c-7bb2-4c3d-b19e-054fee31e1ce",
        "sequence": 2,
        "start_reason": "Punt",
        "end_reason": "Touchdown",
        "play_count": 10,
        "duration": "4:18",
        "first_downs": 5,
        "gain": 67,
        "penalty_yards": 14,
        "inside_20": true,
        "scoring_drive": true,
        "quarter": {
            "id": "7c4dbc34-d225-4a5f-b90f-a44695d5c4c4",
            "number": 1,
            "sequence": 1
        },
        "team": {
            "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
            "name": "Patriots",
            "market": "New England",
            "alias": "NE",
            "sr_id": "sr:competitor:4424"
        },
        "plays": [{
            "type": "play",
            "id": "b2894600-89ff-11ed-9760-5be375bc3cb3",
            "sequence": 1672596682468.0,
            "clock": "11:33",
            "home_points": 0,
            "away_points": 0,
            "play_type": "pass",
            "wall_clock": "2023-01-01T18:11:32+00:00",
            "description": "M.Jones steps back to pass. M.Jones pass incomplete short left intended for J.Meyers (A.Van Ginkel).",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T18:11:22+00:00",
            "updated_at": "2023-01-01T18:14:03+00:00",
            "start_situation": {
                "clock": "11:33",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 19
                }
            },
            "end_situation": {
                "clock": "11:30",
                "down": 2,
                "yfd": 10,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 19
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
                    "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                    "name": "Mac Jones",
                    "jersey": "10",
                    "position": "QB",
                    "sr_id": "sr:player:1235378"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }, {
                "stat_type": "receive",
                "firstdown": 0,
                "target": 1,
                "inside_20": 0,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "73e194d1-a4b7-4de4-b1c2-3c24ef502918",
                    "name": "Jakobi Meyers",
                    "jersey": "16",
                    "position": "WR",
                    "sr_id": "sr:player:1209970"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
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
                    "id": "7b47d190-168b-44bc-bb91-a688fe28f768",
                    "name": "Andrew Van Ginkel",
                    "jersey": "43",
                    "position": "LB",
                    "sr_id": "sr:player:1233538"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }],
            "details": [{
                "category": "pass",
                "description": "M.Jones steps back to pass.",
                "sequence": 0,
                "start_location": {
                    "alias": "NE",
                    "yardline": 19
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 15
                },
                "players": [{
                    "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                    "name": "Mac Jones",
                    "jersey": "10",
                    "position": "QB",
                    "sr_id": "sr:player:1235378",
                    "role": "pass"
                }]
            }, {
                "category": "pass_incompletion",
                "description": "M.Jones pass incomplete short left intended for J.Meyers (A.Van Ginkel).",
                "sequence": 1,
                "direction": "short left",
                "start_location": {
                    "alias": "NE",
                    "yardline": 15
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 15
                },
                "players": [{
                    "id": "7b47d190-168b-44bc-bb91-a688fe28f768",
                    "name": "Andrew Van Ginkel",
                    "jersey": "43",
                    "position": "LB",
                    "sr_id": "sr:player:1233538",
                    "role": "defend"
                }, {
                    "id": "73e194d1-a4b7-4de4-b1c2-3c24ef502918",
                    "name": "Jakobi Meyers",
                    "jersey": "16",
                    "position": "WR",
                    "sr_id": "sr:player:1209970",
                    "role": "receive"
                }, {
                    "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                    "name": "Mac Jones",
                    "jersey": "10",
                    "position": "QB",
                    "sr_id": "sr:player:1235378",
                    "role": "pass"
                }]
            }],
            "quarter": {
                "id": "7c4dbc34-d225-4a5f-b90f-a44695d5c4c4",
                "number": 1,
                "sequence": 1
            }
        }, {
            "type": "play",
            "id": "bdb624d0-89ff-11ed-9760-5be375bc3cb3",
            "sequence": 1672596718019.0,
            "clock": "11:30",
            "home_points": 0,
            "away_points": 0,
            "play_type": "rush",
            "wall_clock": "2023-01-01T18:12:09+00:00",
            "description": "R.Stevenson rushed right guard to NE 24 for 5 yards. Tackled by E.Roberts at NE 24.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T18:11:58+00:00",
            "updated_at": "2023-01-01T18:24:57+00:00",
            "start_situation": {
                "clock": "11:30",
                "down": 2,
                "yfd": 10,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 19
                }
            },
            "end_situation": {
                "clock": "10:52",
                "down": 3,
                "yfd": 5,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
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
                "scramble": 0,
                "player": {
                    "id": "6260e78a-64e2-4f7e-9bf8-39948a17a370",
                    "name": "Rhamondre Stevenson",
                    "jersey": "38",
                    "position": "RB",
                    "sr_id": "sr:player:1693603"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
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
                    "id": "f6d7cf0f-72d2-473f-a44b-4a253587ca0f",
                    "name": "Elandon Roberts",
                    "jersey": "52",
                    "position": "LB",
                    "sr_id": "sr:player:1074034"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }],
            "details": [{
                "category": "rush",
                "description": "R.Stevenson rushed right guard to NE 24 for 5 yards.",
                "sequence": 0,
                "direction": "right guard",
                "yards": 5,
                "result": "tackled",
                "start_location": {
                    "alias": "NE",
                    "yardline": 19
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 24
                },
                "players": [{
                    "id": "6260e78a-64e2-4f7e-9bf8-39948a17a370",
                    "name": "Rhamondre Stevenson",
                    "jersey": "38",
                    "position": "RB",
                    "sr_id": "sr:player:1693603",
                    "role": "rush"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by E.Roberts at NE 24.",
                "sequence": 1,
                "start_location": {
                    "alias": "NE",
                    "yardline": 24
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 24
                },
                "players": [{
                    "id": "f6d7cf0f-72d2-473f-a44b-4a253587ca0f",
                    "name": "Elandon Roberts",
                    "jersey": "52",
                    "position": "LB",
                    "sr_id": "sr:player:1074034",
                    "role": "tackle"
                }]
            }],
            "quarter": {
                "id": "7c4dbc34-d225-4a5f-b90f-a44695d5c4c4",
                "number": 1,
                "sequence": 1
            }
        }, {
            "type": "play",
            "id": "d2dd7cf0-89ff-11ed-9760-5be375bc3cb3",
            "sequence": 1672596786127.0,
            "clock": "10:52",
            "home_points": 0,
            "away_points": 0,
            "play_type": "pass",
            "wall_clock": "2023-01-01T18:12:48+00:00",
            "description": "M.Jones steps back to pass. M.Jones pass incomplete short right intended for N.Agholor. PENALTY on MIA-K.Crossen, Defensive Pass Interference, 9 yards, accepted. No Play.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T18:13:06+00:00",
            "updated_at": "2023-01-01T18:14:47+00:00",
            "start_situation": {
                "clock": "10:52",
                "down": 3,
                "yfd": 5,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 24
                }
            },
            "end_situation": {
                "clock": "10:47",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 33
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
                    "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                    "name": "Mac Jones",
                    "jersey": "10",
                    "position": "QB",
                    "sr_id": "sr:player:1235378"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }, {
                "stat_type": "receive",
                "nullified": true,
                "target": 1,
                "inside_20": 0,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "cfb0ff68-51cb-4dad-ba81-f9e019a93a91",
                    "name": "Nelson Agholor",
                    "jersey": "15",
                    "position": "WR",
                    "sr_id": "sr:player:834539"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }, {
                "stat_type": "penalty",
                "penalty": 1,
                "yards": 9,
                "player": {
                    "id": "ce0badde-28c3-45ce-a6f4-e2f82ef129f8",
                    "name": "Keion Crossen",
                    "jersey": "27",
                    "position": "DB",
                    "sr_id": "sr:player:1189988"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }, {
                "stat_type": "first_down",
                "category": "penalty",
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }],
            "details": [{
                "category": "pass",
                "description": "M.Jones steps back to pass.",
                "sequence": 0,
                "start_location": {
                    "alias": "NE",
                    "yardline": 24
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 24
                },
                "players": [{
                    "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                    "name": "Mac Jones",
                    "jersey": "10",
                    "position": "QB",
                    "sr_id": "sr:player:1235378",
                    "role": "pass"
                }]
            }, {
                "category": "pass_incompletion",
                "description": "M.Jones pass incomplete short right intended for N.Agholor.",
                "sequence": 1,
                "direction": "short right",
                "start_location": {
                    "alias": "NE",
                    "yardline": 24
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 24
                },
                "players": [{
                    "id": "cfb0ff68-51cb-4dad-ba81-f9e019a93a91",
                    "name": "Nelson Agholor",
                    "jersey": "15",
                    "position": "WR",
                    "sr_id": "sr:player:834539",
                    "role": "receive"
                }, {
                    "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                    "name": "Mac Jones",
                    "jersey": "10",
                    "position": "QB",
                    "sr_id": "sr:player:1235378",
                    "role": "pass"
                }]
            }, {
                "category": "penalty",
                "description": "PENALTY on MIA-K.Crossen, Defensive Pass Interference, 9 yards, accepted.",
                "sequence": 2,
                "start_location": {
                    "alias": "NE",
                    "yardline": 24
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 33
                },
                "penalty": {
                    "description": "Defensive Pass Interference",
                    "result": "accepted",
                    "yards": 9,
                    "team": {
                        "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                        "name": "Dolphins",
                        "market": "Miami",
                        "alias": "MIA",
                        "sr_id": "sr:competitor:4287"
                    }
                },
                "players": [{
                    "id": "ce0badde-28c3-45ce-a6f4-e2f82ef129f8",
                    "name": "Keion Crossen",
                    "jersey": "27",
                    "position": "DB",
                    "sr_id": "sr:player:1189988",
                    "role": "penalty"
                }]
            }, {
                "category": "no_play",
                "description": "No Play.",
                "sequence": 3,
                "start_location": {
                    "alias": "NE",
                    "yardline": 33
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 33
                },
                "players": []
            }, {
                "category": "first_down",
                "sequence": 4,
                "result": "penalty",
                "start_location": {
                    "alias": "NE",
                    "yardline": 33
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 33
                },
                "players": []
            }],
            "quarter": {
                "id": "7c4dbc34-d225-4a5f-b90f-a44695d5c4c4",
                "number": 1,
                "sequence": 1
            }
        }, {
            "type": "play",
            "id": "fb9dec10-89ff-11ed-9760-5be375bc3cb3",
            "sequence": 1672596803025.0,
            "clock": "10:47",
            "home_points": 0,
            "away_points": 0,
            "play_type": "pass",
            "wall_clock": "2023-01-01T18:13:33+00:00",
            "description": "M.Jones pass short right complete to NE 34. Catch made by H.Henry at NE 34. Gain of 2 yards. Pushed out of bounds by J.Baker at NE 35.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T18:13:23+00:00",
            "updated_at": "2023-01-01T18:15:42+00:00",
            "start_situation": {
                "clock": "10:47",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 33
                }
            },
            "end_situation": {
                "clock": "10:19",
                "down": 2,
                "yfd": 8,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 35
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 1,
                "yards": 2,
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
                    "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                    "name": "Mac Jones",
                    "jersey": "10",
                    "position": "QB",
                    "sr_id": "sr:player:1235378"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }, {
                "stat_type": "receive",
                "firstdown": 0,
                "target": 1,
                "reception": 1,
                "yards": 2,
                "yards_after_catch": 1,
                "inside_20": 0,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "705899da-3c20-4bc3-b5d0-2e6e40655131",
                    "name": "Hunter Henry",
                    "jersey": "85",
                    "position": "TE",
                    "sr_id": "sr:player:987633"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
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
                    "id": "53e7c80e-8bf9-4ab2-ab3e-80cb556ea784",
                    "name": "Jerome Baker",
                    "jersey": "55",
                    "position": "LB",
                    "sr_id": "sr:player:1217510"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }],
            "details": [{
                "category": "pass_completion",
                "description": "M.Jones pass short right complete to NE 34.",
                "sequence": 0,
                "direction": "short right",
                "yards": 2,
                "start_location": {
                    "alias": "NE",
                    "yardline": 33
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 34
                },
                "players": [{
                    "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                    "name": "Mac Jones",
                    "jersey": "10",
                    "position": "QB",
                    "sr_id": "sr:player:1235378",
                    "role": "pass"
                }]
            }, {
                "category": "pass_reception",
                "description": "Catch made by H.Henry at NE 34. Gain of 2 yards.",
                "sequence": 1,
                "yards": 2,
                "result": "pushed out of bounds",
                "start_location": {
                    "alias": "NE",
                    "yardline": 34
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 35
                },
                "players": [{
                    "id": "705899da-3c20-4bc3-b5d0-2e6e40655131",
                    "name": "Hunter Henry",
                    "jersey": "85",
                    "position": "TE",
                    "sr_id": "sr:player:987633",
                    "role": "catch"
                }]
            }, {
                "category": "pushed_out_of_bounds",
                "description": "Pushed out of bounds by J.Baker at NE 35.",
                "sequence": 2,
                "start_location": {
                    "alias": "NE",
                    "yardline": 35
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 35
                },
                "players": [{
                    "id": "53e7c80e-8bf9-4ab2-ab3e-80cb556ea784",
                    "name": "Jerome Baker",
                    "jersey": "55",
                    "position": "LB",
                    "sr_id": "sr:player:1217510",
                    "role": "tackle"
                }]
            }],
            "quarter": {
                "id": "7c4dbc34-d225-4a5f-b90f-a44695d5c4c4",
                "number": 1,
                "sequence": 1
            }
        }, {
            "type": "play",
            "id": "05ae5e60-8a00-11ed-9760-5be375bc3cb3",
            "sequence": 1672596863897.0,
            "clock": "10:19",
            "home_points": 0,
            "away_points": 0,
            "play_type": "pass",
            "wall_clock": "2023-01-01T18:14:11+00:00",
            "description": "M.Jones pass deep right complete to MIA 42. Catch made by T.Thornton at MIA 42. Gain of 24 yards. MIA ran out of bounds. Miami challenged the pass completion and the play was upheld. Timeout #1 by MIA.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T18:14:23+00:00",
            "updated_at": "2023-01-01T18:25:39+00:00",
            "start_situation": {
                "clock": "10:19",
                "down": 2,
                "yfd": 8,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 35
                }
            },
            "end_situation": {
                "clock": "10:09",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 41
                }
            },
            "statistics": [{
                "stat_type": "timeout",
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }, {
                "stat_type": "pass",
                "attempt": 1,
                "complete": 1,
                "yards": 24,
                "att_yards": 23,
                "firstdown": 1,
                "inside_20": 0,
                "goaltogo": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "on_target_throw": 0,
                "batted_pass": 0,
                "player": {
                    "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                    "name": "Mac Jones",
                    "jersey": "10",
                    "position": "QB",
                    "sr_id": "sr:player:1235378"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }, {
                "stat_type": "receive",
                "firstdown": 1,
                "target": 1,
                "reception": 1,
                "yards": 24,
                "yards_after_catch": 1,
                "inside_20": 0,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "74cda487-2026-42e0-ae32-77f3502cfb11",
                    "name": "Tyquan Thornton",
                    "jersey": "11",
                    "position": "WR",
                    "sr_id": "sr:player:1435193"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }, {
                "stat_type": "defense",
                "qb_hit": 1,
                "category": "defense",
                "def_target": 0,
                "def_comp": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "batted_pass": 0,
                "player": {
                    "id": "7b47d190-168b-44bc-bb91-a688fe28f768",
                    "name": "Andrew Van Ginkel",
                    "jersey": "43",
                    "position": "LB",
                    "sr_id": "sr:player:1233538"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }, {
                "stat_type": "first_down",
                "category": "pass",
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }],
            "details": [{
                "category": "pass_completion",
                "description": "M.Jones pass deep right complete to MIA 42.",
                "sequence": 0,
                "direction": "deep right",
                "yards": 24,
                "start_location": {
                    "alias": "NE",
                    "yardline": 35
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 42
                },
                "players": [{
                    "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                    "name": "Mac Jones",
                    "jersey": "10",
                    "position": "QB",
                    "sr_id": "sr:player:1235378",
                    "role": "pass"
                }, {
                    "id": "7b47d190-168b-44bc-bb91-a688fe28f768",
                    "name": "Andrew Van Ginkel",
                    "jersey": "43",
                    "position": "LB",
                    "sr_id": "sr:player:1233538",
                    "role": "hit"
                }]
            }, {
                "category": "pass_reception",
                "description": "Catch made by T.Thornton at MIA 42. Gain of 24 yards.",
                "sequence": 1,
                "yards": 24,
                "result": "pushed out of bounds",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 42
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 41
                },
                "players": [{
                    "id": "74cda487-2026-42e0-ae32-77f3502cfb11",
                    "name": "Tyquan Thornton",
                    "jersey": "11",
                    "position": "WR",
                    "sr_id": "sr:player:1435193",
                    "role": "catch"
                }]
            }, {
                "category": "ran_out_of_bounds",
                "description": "MIA ran out of bounds.",
                "sequence": 2,
                "start_location": {
                    "alias": "MIA",
                    "yardline": 41
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 41
                },
                "players": []
            }, {
                "category": "review",
                "description": "Miami challenged the pass completion and the play was upheld.",
                "sequence": 3,
                "start_location": {
                    "alias": "MIA",
                    "yardline": 41
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 41
                },
                "review": {
                    "result": "upheld",
                    "type": "pass completion",
                    "team": {
                        "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                        "name": "Dolphins",
                        "market": "Miami",
                        "alias": "MIA",
                        "sr_id": "sr:competitor:4287"
                    }
                },
                "players": []
            }, {
                "category": "first_down",
                "sequence": 4,
                "result": "pass",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 41
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 41
                },
                "players": []
            }, {
                "category": "team_timeout",
                "description": "Timeout #1 by MIA.",
                "sequence": 5,
                "start_location": {
                    "alias": "MIA",
                    "yardline": 41
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 41
                },
                "players": []
            }],
            "quarter": {
                "id": "7c4dbc34-d225-4a5f-b90f-a44695d5c4c4",
                "number": 1,
                "sequence": 1
            }
        }, {
            "type": "play",
            "id": "97a66150-8a00-11ed-9760-5be375bc3cb3",
            "sequence": 1672597070060.0,
            "clock": "10:09",
            "home_points": 0,
            "away_points": 0,
            "play_type": "pass",
            "wall_clock": "2023-01-01T18:17:56+00:00",
            "description": "M.Jones pass short right complete to MIA 29. Catch made by J.Meyers at MIA 29. Gain of 17 yards. Tackled by K.Crossen, J.Holland at MIA 24.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T18:17:50+00:00",
            "updated_at": "2023-01-01T18:21:34+00:00",
            "start_situation": {
                "clock": "10:09",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 41
                }
            },
            "end_situation": {
                "clock": "9:31",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 24
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 1,
                "yards": 17,
                "att_yards": 12,
                "firstdown": 1,
                "inside_20": 0,
                "goaltogo": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "on_target_throw": 0,
                "batted_pass": 0,
                "player": {
                    "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                    "name": "Mac Jones",
                    "jersey": "10",
                    "position": "QB",
                    "sr_id": "sr:player:1235378"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }, {
                "stat_type": "receive",
                "firstdown": 1,
                "target": 1,
                "reception": 1,
                "yards": 17,
                "yards_after_catch": 5,
                "inside_20": 0,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "73e194d1-a4b7-4de4-b1c2-3c24ef502918",
                    "name": "Jakobi Meyers",
                    "jersey": "16",
                    "position": "WR",
                    "sr_id": "sr:player:1209970"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
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
                    "id": "30915dd4-f19f-48cd-8425-f2cf29246b66",
                    "name": "Jevon Holland",
                    "jersey": "08",
                    "position": "SAF",
                    "sr_id": "sr:player:2197804"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
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
                    "id": "ce0badde-28c3-45ce-a6f4-e2f82ef129f8",
                    "name": "Keion Crossen",
                    "jersey": "27",
                    "position": "DB",
                    "sr_id": "sr:player:1189988"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
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
                    "id": "2e0122de-812b-44fa-8bf9-084695be95e3",
                    "name": "Jaelan Phillips",
                    "jersey": "15",
                    "position": "LB",
                    "sr_id": "sr:player:2198134"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }, {
                "stat_type": "first_down",
                "category": "pass",
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }],
            "details": [{
                "category": "pass_completion",
                "description": "M.Jones pass short right complete to MIA 29.",
                "sequence": 0,
                "direction": "short right",
                "yards": 17,
                "start_location": {
                    "alias": "MIA",
                    "yardline": 41
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 29
                },
                "players": [{
                    "id": "2e0122de-812b-44fa-8bf9-084695be95e3",
                    "name": "Jaelan Phillips",
                    "jersey": "15",
                    "position": "LB",
                    "sr_id": "sr:player:2198134",
                    "role": "hit"
                }, {
                    "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                    "name": "Mac Jones",
                    "jersey": "10",
                    "position": "QB",
                    "sr_id": "sr:player:1235378",
                    "role": "pass"
                }]
            }, {
                "category": "pass_reception",
                "description": "Catch made by J.Meyers at MIA 29. Gain of 17 yards.",
                "sequence": 1,
                "yards": 17,
                "result": "tackled",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 29
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 24
                },
                "players": [{
                    "id": "73e194d1-a4b7-4de4-b1c2-3c24ef502918",
                    "name": "Jakobi Meyers",
                    "jersey": "16",
                    "position": "WR",
                    "sr_id": "sr:player:1209970",
                    "role": "catch"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by K.Crossen, J.Holland at MIA 24.",
                "sequence": 2,
                "start_location": {
                    "alias": "MIA",
                    "yardline": 24
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 24
                },
                "players": [{
                    "id": "30915dd4-f19f-48cd-8425-f2cf29246b66",
                    "name": "Jevon Holland",
                    "jersey": "08",
                    "position": "SAF",
                    "sr_id": "sr:player:2197804",
                    "role": "ast_tackle"
                }, {
                    "id": "ce0badde-28c3-45ce-a6f4-e2f82ef129f8",
                    "name": "Keion Crossen",
                    "jersey": "27",
                    "position": "DB",
                    "sr_id": "sr:player:1189988",
                    "role": "tackle"
                }]
            }, {
                "category": "first_down",
                "sequence": 3,
                "result": "pass",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 24
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 24
                },
                "players": []
            }],
            "quarter": {
                "id": "7c4dbc34-d225-4a5f-b90f-a44695d5c4c4",
                "number": 1,
                "sequence": 1
            }
        }, {
            "type": "play",
            "id": "a4d24470-8a00-11ed-9760-5be375bc3cb3",
            "sequence": 1672597111107.0,
            "clock": "9:31",
            "home_points": 0,
            "away_points": 0,
            "play_type": "rush",
            "wall_clock": "2023-01-01T18:18:35+00:00",
            "description": "D.Harris rushed right end to MIA 16 for 8 yards. Tackled by J.Holland at MIA 16.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T18:18:31+00:00",
            "updated_at": "2023-01-01T18:22:01+00:00",
            "start_situation": {
                "clock": "9:31",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 24
                }
            },
            "end_situation": {
                "clock": "8:48",
                "down": 2,
                "yfd": 2,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 16
                }
            },
            "statistics": [{
                "stat_type": "rush",
                "attempt": 1,
                "yards": 8,
                "firstdown": 0,
                "inside_20": 0,
                "goaltogo": 0,
                "broken_tackles": 0,
                "kneel_down": 0,
                "scramble": 0,
                "player": {
                    "id": "59482736-ce42-4058-b68e-0f9f66eac2d9",
                    "name": "Damien Harris",
                    "jersey": "37",
                    "position": "RB",
                    "sr_id": "sr:player:1216208"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
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
                    "id": "30915dd4-f19f-48cd-8425-f2cf29246b66",
                    "name": "Jevon Holland",
                    "jersey": "08",
                    "position": "SAF",
                    "sr_id": "sr:player:2197804"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }],
            "details": [{
                "category": "rush",
                "description": "D.Harris rushed right end to MIA 16 for 8 yards.",
                "sequence": 0,
                "direction": "right end",
                "yards": 8,
                "result": "tackled",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 24
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 16
                },
                "players": [{
                    "id": "59482736-ce42-4058-b68e-0f9f66eac2d9",
                    "name": "Damien Harris",
                    "jersey": "37",
                    "position": "RB",
                    "sr_id": "sr:player:1216208",
                    "role": "rush"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by J.Holland at MIA 16.",
                "sequence": 1,
                "start_location": {
                    "alias": "MIA",
                    "yardline": 16
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 16
                },
                "players": [{
                    "id": "30915dd4-f19f-48cd-8425-f2cf29246b66",
                    "name": "Jevon Holland",
                    "jersey": "08",
                    "position": "SAF",
                    "sr_id": "sr:player:2197804",
                    "role": "tackle"
                }]
            }],
            "quarter": {
                "id": "7c4dbc34-d225-4a5f-b90f-a44695d5c4c4",
                "number": 1,
                "sequence": 1
            }
        }, {
            "type": "play",
            "id": "bd0a8610-8a00-11ed-9760-5be375bc3cb3",
            "sequence": 1672597149732.0,
            "clock": "8:48",
            "home_points": 0,
            "away_points": 0,
            "play_type": "pass",
            "wall_clock": "2023-01-01T18:19:21+00:00",
            "description": "M.Jones steps back to pass. M.Jones pass incomplete deep right intended for J.Meyers.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T18:19:09+00:00",
            "updated_at": "2023-01-01T18:27:18+00:00",
            "start_situation": {
                "clock": "8:48",
                "down": 2,
                "yfd": 2,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 16
                }
            },
            "end_situation": {
                "clock": "8:44",
                "down": 3,
                "yfd": 2,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 16
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 0,
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
                    "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                    "name": "Mac Jones",
                    "jersey": "10",
                    "position": "QB",
                    "sr_id": "sr:player:1235378"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }, {
                "stat_type": "receive",
                "firstdown": 0,
                "target": 1,
                "inside_20": 1,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "73e194d1-a4b7-4de4-b1c2-3c24ef502918",
                    "name": "Jakobi Meyers",
                    "jersey": "16",
                    "position": "WR",
                    "sr_id": "sr:player:1209970"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }],
            "details": [{
                "category": "pass",
                "description": "M.Jones steps back to pass.",
                "sequence": 0,
                "start_location": {
                    "alias": "MIA",
                    "yardline": 16
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 0
                },
                "players": [{
                    "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                    "name": "Mac Jones",
                    "jersey": "10",
                    "position": "QB",
                    "sr_id": "sr:player:1235378",
                    "role": "pass"
                }]
            }, {
                "category": "pass_incompletion",
                "description": "M.Jones pass incomplete deep right intended for J.Meyers.",
                "sequence": 1,
                "direction": "deep right",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 0
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 0
                },
                "players": [{
                    "id": "73e194d1-a4b7-4de4-b1c2-3c24ef502918",
                    "name": "Jakobi Meyers",
                    "jersey": "16",
                    "position": "WR",
                    "sr_id": "sr:player:1209970",
                    "role": "receive"
                }, {
                    "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                    "name": "Mac Jones",
                    "jersey": "10",
                    "position": "QB",
                    "sr_id": "sr:player:1235378",
                    "role": "pass"
                }]
            }],
            "quarter": {
                "id": "7c4dbc34-d225-4a5f-b90f-a44695d5c4c4",
                "number": 1,
                "sequence": 1
            }
        }, {
            "type": "play",
            "id": "d43157b0-8a00-11ed-9760-5be375bc3cb3",
            "sequence": 1672597226847.0,
            "clock": "8:44",
            "home_points": 0,
            "away_points": 0,
            "play_type": "pass",
            "wall_clock": "2023-01-01T18:20:04+00:00",
            "description": "M.Jones steps back to pass. M.Jones pass incomplete deep left intended for J.Meyers. PENALTY on MIA-K.Kohou, Defensive Holding, 5 yards, accepted. No Play.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T18:20:26+00:00",
            "updated_at": "2023-01-01T18:27:18+00:00",
            "start_situation": {
                "clock": "8:44",
                "down": 3,
                "yfd": 2,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 16
                }
            },
            "end_situation": {
                "clock": "8:38",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 11
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
                    "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                    "name": "Mac Jones",
                    "jersey": "10",
                    "position": "QB",
                    "sr_id": "sr:player:1235378"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }, {
                "stat_type": "receive",
                "nullified": true,
                "target": 1,
                "inside_20": 1,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "73e194d1-a4b7-4de4-b1c2-3c24ef502918",
                    "name": "Jakobi Meyers",
                    "jersey": "16",
                    "position": "WR",
                    "sr_id": "sr:player:1209970"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }, {
                "stat_type": "penalty",
                "penalty": 1,
                "yards": 5,
                "player": {
                    "id": "97debc10-d3b9-11ec-96a0-c3471a31202c",
                    "name": "Kader Kohou",
                    "jersey": "28",
                    "position": "CB",
                    "sr_id": "sr:player:2351605"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }, {
                "stat_type": "first_down",
                "category": "penalty",
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }],
            "details": [{
                "category": "pass",
                "description": "M.Jones steps back to pass.",
                "sequence": 0,
                "start_location": {
                    "alias": "MIA",
                    "yardline": 16
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 16
                },
                "players": [{
                    "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                    "name": "Mac Jones",
                    "jersey": "10",
                    "position": "QB",
                    "sr_id": "sr:player:1235378",
                    "role": "pass"
                }]
            }, {
                "category": "pass_incompletion",
                "description": "M.Jones pass incomplete deep left intended for J.Meyers.",
                "sequence": 1,
                "direction": "deep left",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 16
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 16
                },
                "players": [{
                    "id": "73e194d1-a4b7-4de4-b1c2-3c24ef502918",
                    "name": "Jakobi Meyers",
                    "jersey": "16",
                    "position": "WR",
                    "sr_id": "sr:player:1209970",
                    "role": "receive"
                }, {
                    "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                    "name": "Mac Jones",
                    "jersey": "10",
                    "position": "QB",
                    "sr_id": "sr:player:1235378",
                    "role": "pass"
                }]
            }, {
                "category": "penalty",
                "description": "PENALTY on MIA-K.Kohou, Defensive Holding, 5 yards, accepted.",
                "sequence": 2,
                "start_location": {
                    "alias": "MIA",
                    "yardline": 16
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 11
                },
                "penalty": {
                    "description": "Defensive Holding",
                    "result": "accepted",
                    "yards": 5,
                    "team": {
                        "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                        "name": "Dolphins",
                        "market": "Miami",
                        "alias": "MIA",
                        "sr_id": "sr:competitor:4287"
                    }
                },
                "players": [{
                    "id": "97debc10-d3b9-11ec-96a0-c3471a31202c",
                    "name": "Kader Kohou",
                    "jersey": "28",
                    "position": "CB",
                    "sr_id": "sr:player:2351605",
                    "role": "penalty"
                }]
            }, {
                "category": "no_play",
                "description": "No Play.",
                "sequence": 3,
                "start_location": {
                    "alias": "MIA",
                    "yardline": 11
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 11
                },
                "players": []
            }, {
                "category": "first_down",
                "sequence": 4,
                "result": "penalty",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 11
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 11
                },
                "players": []
            }],
            "quarter": {
                "id": "7c4dbc34-d225-4a5f-b90f-a44695d5c4c4",
                "number": 1,
                "sequence": 1
            }
        }, {
            "type": "play",
            "id": "02a48450-8a01-11ed-9760-5be375bc3cb3",
            "sequence": 1672597265173.0,
            "clock": "8:38",
            "home_points": 0,
            "away_points": 0,
            "play_type": "rush",
            "wall_clock": "2023-01-01T18:21:15+00:00",
            "description": "R.Stevenson rushed up the middle to MIA 8 for 3 yards. Tackled by C.Wilkins, J.Jenkins at MIA 8.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T18:21:05+00:00",
            "updated_at": "2023-01-01T18:27:18+00:00",
            "start_situation": {
                "clock": "8:38",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 11
                }
            },
            "end_situation": {
                "clock": "7:55",
                "down": 2,
                "yfd": 7,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 8
                }
            },
            "statistics": [{
                "stat_type": "rush",
                "attempt": 1,
                "yards": 3,
                "firstdown": 0,
                "inside_20": 1,
                "goaltogo": 0,
                "broken_tackles": 0,
                "kneel_down": 0,
                "scramble": 0,
                "player": {
                    "id": "6260e78a-64e2-4f7e-9bf8-39948a17a370",
                    "name": "Rhamondre Stevenson",
                    "jersey": "38",
                    "position": "RB",
                    "sr_id": "sr:player:1693603"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
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
                    "id": "6c640668-de81-49c4-a0da-e367e1747923",
                    "name": "Christian Wilkins",
                    "jersey": "94",
                    "position": "DT",
                    "sr_id": "sr:player:1218538"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
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
                    "id": "60d48e85-931c-45dc-b62f-024503a2e09b",
                    "name": "John Jenkins",
                    "jersey": "77",
                    "position": "DT",
                    "sr_id": "sr:player:831473"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }],
            "details": [{
                "category": "rush",
                "description": "R.Stevenson rushed up the middle to MIA 8 for 3 yards.",
                "sequence": 0,
                "direction": "up the middle",
                "yards": 3,
                "result": "tackled",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 11
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 8
                },
                "players": [{
                    "id": "6260e78a-64e2-4f7e-9bf8-39948a17a370",
                    "name": "Rhamondre Stevenson",
                    "jersey": "38",
                    "position": "RB",
                    "sr_id": "sr:player:1693603",
                    "role": "rush"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by C.Wilkins, J.Jenkins at MIA 8.",
                "sequence": 1,
                "start_location": {
                    "alias": "MIA",
                    "yardline": 8
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 8
                },
                "players": [{
                    "id": "6c640668-de81-49c4-a0da-e367e1747923",
                    "name": "Christian Wilkins",
                    "jersey": "94",
                    "position": "DT",
                    "sr_id": "sr:player:1218538",
                    "role": "tackle"
                }, {
                    "id": "60d48e85-931c-45dc-b62f-024503a2e09b",
                    "name": "John Jenkins",
                    "jersey": "77",
                    "position": "DT",
                    "sr_id": "sr:player:831473",
                    "role": "ast_tackle"
                }]
            }],
            "quarter": {
                "id": "7c4dbc34-d225-4a5f-b90f-a44695d5c4c4",
                "number": 1,
                "sequence": 1
            }
        }, {
            "type": "play",
            "id": "31753a40-8a01-11ed-9760-5be375bc3cb3",
            "sequence": 1672597369825.0,
            "clock": "7:55",
            "home_points": 0,
            "away_points": 0,
            "play_type": "rush",
            "wall_clock": "2023-01-01T18:23:00+00:00",
            "description": "R.Stevenson rushed left guard to MIA 7 for 1 yards. Tackled by A.Van Ginkel; Z.Sieler at MIA 7.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T18:22:49+00:00",
            "updated_at": "2023-01-01T18:27:18+00:00",
            "start_situation": {
                "clock": "7:55",
                "down": 2,
                "yfd": 7,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 8
                }
            },
            "end_situation": {
                "clock": "7:20",
                "down": 3,
                "yfd": 6,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 7
                }
            },
            "statistics": [{
                "stat_type": "rush",
                "attempt": 1,
                "yards": 1,
                "firstdown": 0,
                "inside_20": 1,
                "goaltogo": 0,
                "broken_tackles": 0,
                "kneel_down": 0,
                "scramble": 0,
                "player": {
                    "id": "6260e78a-64e2-4f7e-9bf8-39948a17a370",
                    "name": "Rhamondre Stevenson",
                    "jersey": "38",
                    "position": "RB",
                    "sr_id": "sr:player:1693603"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
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
                    "id": "c85c0efc-3391-4a8e-b8a4-370b32fd09ce",
                    "name": "Zach Sieler",
                    "jersey": "92",
                    "position": "DT",
                    "sr_id": "sr:player:1474790"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
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
                    "id": "7b47d190-168b-44bc-bb91-a688fe28f768",
                    "name": "Andrew Van Ginkel",
                    "jersey": "43",
                    "position": "LB",
                    "sr_id": "sr:player:1233538"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }],
            "details": [{
                "category": "rush",
                "description": "R.Stevenson rushed left guard to MIA 7 for 1 yards.",
                "sequence": 0,
                "direction": "left guard",
                "yards": 1,
                "result": "tackled",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 8
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 7
                },
                "players": [{
                    "id": "6260e78a-64e2-4f7e-9bf8-39948a17a370",
                    "name": "Rhamondre Stevenson",
                    "jersey": "38",
                    "position": "RB",
                    "sr_id": "sr:player:1693603",
                    "role": "rush"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by A.Van Ginkel; Z.Sieler at MIA 7.",
                "sequence": 1,
                "start_location": {
                    "alias": "MIA",
                    "yardline": 7
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 7
                },
                "players": [{
                    "id": "7b47d190-168b-44bc-bb91-a688fe28f768",
                    "name": "Andrew Van Ginkel",
                    "jersey": "43",
                    "position": "LB",
                    "sr_id": "sr:player:1233538",
                    "role": "ast_tackle"
                }, {
                    "id": "c85c0efc-3391-4a8e-b8a4-370b32fd09ce",
                    "name": "Zach Sieler",
                    "jersey": "92",
                    "position": "DT",
                    "sr_id": "sr:player:1474790",
                    "role": "ast_tackle"
                }]
            }],
            "quarter": {
                "id": "7c4dbc34-d225-4a5f-b90f-a44695d5c4c4",
                "number": 1,
                "sequence": 1
            }
        }, {
            "type": "play",
            "id": "57637690-8a01-11ed-9760-5be375bc3cb3",
            "sequence": 1672597442262.0,
            "clock": "7:20",
            "home_points": 6,
            "away_points": 0,
            "play_type": "pass",
            "scoring_play": true,
            "wall_clock": "2023-01-01T18:23:36+00:00",
            "description": "M.Jones pass short left complete to MIA End Zone. Catch made by T.Thornton at MIA End Zone. Gain of 7 yards. T.Thornton for 7 yards, TOUCHDOWN.",
            "scoring_description": "M.Jones pass short left complete to MIA End Zone. Catch made by T.Thornton at MIA End Zone. Gain of 7 yards. T.Thornton for 7 yards, TOUCHDOWN.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T18:24:02+00:00",
            "updated_at": "2023-01-01T18:27:18+00:00",
            "start_situation": {
                "clock": "7:20",
                "down": 3,
                "yfd": 6,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 7
                }
            },
            "end_situation": {
                "clock": "7:15",
                "down": 0,
                "yfd": 0,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 15
                }
            },
            "score": {
                "sequence": 2,
                "clock": "7:15",
                "points": 7,
                "home_points": 6,
                "away_points": 0,
                "points-after-play": {
                    "id": "82e41720-8a01-11ed-9760-5be375bc3cb3",
                    "sequence": 1672597447034.0,
                    "type": "extra_point"
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 1,
                "yards": 7,
                "att_yards": 7,
                "firstdown": 1,
                "touchdown": 1,
                "inside_20": 1,
                "goaltogo": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "on_target_throw": 0,
                "batted_pass": 0,
                "player": {
                    "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                    "name": "Mac Jones",
                    "jersey": "10",
                    "position": "QB",
                    "sr_id": "sr:player:1235378"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }, {
                "stat_type": "receive",
                "firstdown": 1,
                "touchdown": 1,
                "target": 1,
                "reception": 1,
                "yards": 7,
                "yards_after_catch": 0,
                "inside_20": 1,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "74cda487-2026-42e0-ae32-77f3502cfb11",
                    "name": "Tyquan Thornton",
                    "jersey": "11",
                    "position": "WR",
                    "sr_id": "sr:player:1435193"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }, {
                "stat_type": "down_conversion",
                "down": 3,
                "attempt": 1,
                "complete": 1,
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }, {
                "stat_type": "first_down",
                "category": "pass",
                "player": {
                    "id": "74cda487-2026-42e0-ae32-77f3502cfb11",
                    "name": "Tyquan Thornton",
                    "jersey": "11",
                    "position": "WR",
                    "sr_id": "sr:player:1435193"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }],
            "details": [{
                "category": "pass_completion",
                "description": "M.Jones pass short left complete to MIA End Zone.",
                "sequence": 0,
                "direction": "short left",
                "yards": 7,
                "start_location": {
                    "alias": "MIA",
                    "yardline": 7
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 0
                },
                "players": [{
                    "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                    "name": "Mac Jones",
                    "jersey": "10",
                    "position": "QB",
                    "sr_id": "sr:player:1235378",
                    "role": "pass"
                }]
            }, {
                "category": "pass_reception",
                "description": "Catch made by T.Thornton at MIA End Zone. Gain of 7 yards.",
                "sequence": 1,
                "yards": 7,
                "result": "touchdown",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 0
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 0
                },
                "players": [{
                    "id": "74cda487-2026-42e0-ae32-77f3502cfb11",
                    "name": "Tyquan Thornton",
                    "jersey": "11",
                    "position": "WR",
                    "sr_id": "sr:player:1435193",
                    "role": "catch"
                }]
            }, {
                "category": "touchdown",
                "description": "T.Thornton for 7 yards, TOUCHDOWN.",
                "sequence": 2,
                "yards": 7,
                "result": "touchdown",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 0
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 0
                },
                "players": [{
                    "id": "74cda487-2026-42e0-ae32-77f3502cfb11",
                    "name": "Tyquan Thornton",
                    "jersey": "11",
                    "position": "WR",
                    "sr_id": "sr:player:1435193",
                    "role": "catch"
                }]
            }, {
                "category": "third_down_conversion",
                "sequence": 3,
                "result": "good",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 7
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 7
                },
                "players": []
            }],
            "quarter": {
                "id": "7c4dbc34-d225-4a5f-b90f-a44695d5c4c4",
                "number": 1,
                "sequence": 1
            }
        }, {
            "type": "play",
            "id": "82e41720-8a01-11ed-9760-5be375bc3cb3",
            "sequence": 1672597447034.0,
            "clock": "7:15",
            "home_points": 7,
            "away_points": 0,
            "play_type": "extra_point",
            "scoring_play": true,
            "wall_clock": "2023-01-01T18:24:22+00:00",
            "description": "N.Folk extra point is good.",
            "scoring_description": "M.Jones pass short left complete to MIA End Zone. Catch made by T.Thornton at MIA End Zone. Gain of 7 yards. T.Thornton for 7 yards, TOUCHDOWN.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T18:24:07+00:00",
            "updated_at": "2023-01-01T18:27:18+00:00",
            "start_situation": {
                "clock": "7:15",
                "down": 0,
                "yfd": 0,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 15
                }
            },
            "end_situation": {
                "clock": "7:15",
                "down": 0,
                "yfd": 0,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 35
                }
            },
            "statistics": [{
                "stat_type": "extra_point",
                "attempt": 1,
                "made": 1,
                "player": {
                    "id": "b37c621e-1125-4c35-bea0-fcabb1527060",
                    "name": "Nick Folk",
                    "jersey": "06",
                    "position": "K",
                    "sr_id": "sr:player:830073"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }],
            "details": [{
                "category": "extra_point_attempt",
                "description": "N.Folk extra point is good.",
                "sequence": 0,
                "result": "good",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 15
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 15
                },
                "players": [{
                    "id": "b37c621e-1125-4c35-bea0-fcabb1527060",
                    "name": "Nick Folk",
                    "jersey": "06",
                    "position": "K",
                    "sr_id": "sr:player:830073",
                    "role": "kick"
                }]
            }],
            "quarter": {
                "id": "7c4dbc34-d225-4a5f-b90f-a44695d5c4c4",
                "number": 1,
                "sequence": 1
            }
        }]
    }, {
        "id": "1d3f3185-8ce8-4778-b950-8aa613345bc2",
        "sequence": 3,
        "start_reason": "Kickoff",
        "end_reason": "Touchdown",
        "play_count": 13,
        "duration": "7:20",
        "first_downs": 5,
        "gain": 75,
        "penalty_yards": -5,
        "inside_20": true,
        "scoring_drive": true,
        "quarter": {
            "id": "7c4dbc34-d225-4a5f-b90f-a44695d5c4c4",
            "number": 1,
            "sequence": 1
        },
        "team": {
            "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
            "name": "Dolphins",
            "market": "Miami",
            "alias": "MIA",
            "sr_id": "sr:competitor:4287"
        },
        "plays": [{
            "type": "play",
            "id": "e64b7a60-8a01-11ed-9760-5be375bc3cb3",
            "sequence": 1672597637604.0,
            "clock": "7:15",
            "home_points": 7,
            "away_points": 0,
            "play_type": "kickoff",
            "wall_clock": "2023-01-01T18:27:27+00:00",
            "description": "N.Folk kicks 65 yards from NE 35 to the MIA End Zone. Touchback.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T18:27:17+00:00",
            "updated_at": "2023-01-01T18:27:18+00:00",
            "start_situation": {
                "clock": "7:15",
                "down": 0,
                "yfd": 0,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 35
                }
            },
            "end_situation": {
                "clock": "7:15",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 25
                }
            },
            "statistics": [{
                "stat_type": "kick",
                "attempt": 1,
                "yards": 65,
                "net_yards": 40,
                "touchback": 1,
                "onside_attempt": 0,
                "onside_success": 0,
                "squib_kick": 0,
                "player": {
                    "id": "b37c621e-1125-4c35-bea0-fcabb1527060",
                    "name": "Nick Folk",
                    "jersey": "06",
                    "position": "K",
                    "sr_id": "sr:player:830073"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }, {
                "stat_type": "return",
                "touchback": 1,
                "category": "kick_return",
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }],
            "details": [{
                "category": "kick_off",
                "description": "N.Folk kicks 65 yards from NE 35 to the MIA End Zone.",
                "sequence": 0,
                "yards": 65,
                "result": "touchback",
                "start_location": {
                    "alias": "NE",
                    "yardline": 35
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 0
                },
                "players": [{
                    "id": "b37c621e-1125-4c35-bea0-fcabb1527060",
                    "name": "Nick Folk",
                    "jersey": "06",
                    "position": "K",
                    "sr_id": "sr:player:830073",
                    "role": "kick"
                }]
            }, {
                "category": "touchback",
                "description": "Touchback.",
                "sequence": 1,
                "result": "touchback",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 0
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 25
                },
                "players": [{
                    "id": "b37c621e-1125-4c35-bea0-fcabb1527060",
                    "name": "Nick Folk",
                    "jersey": "06",
                    "position": "K",
                    "sr_id": "sr:player:830073",
                    "role": "kick"
                }]
            }],
            "quarter": {
                "id": "7c4dbc34-d225-4a5f-b90f-a44695d5c4c4",
                "number": 1,
                "sequence": 1
            }
        }, {
            "type": "play",
            "id": "0355dd80-8a02-11ed-9760-5be375bc3cb3",
            "sequence": 1672597682974.0,
            "clock": "7:15",
            "home_points": 7,
            "away_points": 0,
            "play_type": "rush",
            "wall_clock": "2023-01-01T18:28:13+00:00",
            "description": "J.Wilson rushed right tackle to MIA 28 for 3 yards. Tackled by D.Godchaux; J.Tavai at MIA 28.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T18:28:02+00:00",
            "updated_at": "2023-01-01T18:28:57+00:00",
            "start_situation": {
                "clock": "7:15",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 25
                }
            },
            "end_situation": {
                "clock": "6:39",
                "down": 2,
                "yfd": 7,
                "possession": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 28
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
                    "id": "72cf3127-3953-4fd8-8049-3de1b6fa9825",
                    "name": "Jeff Wilson Jr.",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1477812"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
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
                    "id": "dfb05fbc-7329-4893-8dc1-3d30033e49d0",
                    "name": "Jahlani Tavai",
                    "jersey": "48",
                    "position": "MLB",
                    "sr_id": "sr:player:1184342"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
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
                    "id": "6e6dcc9c-06f5-40fd-9134-d0afd0e349d8",
                    "name": "Davon Godchaux",
                    "jersey": "92",
                    "position": "DT",
                    "sr_id": "sr:player:1130111"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }],
            "details": [{
                "category": "rush",
                "description": "J.Wilson rushed right tackle to MIA 28 for 3 yards.",
                "sequence": 0,
                "direction": "right tackle",
                "yards": 3,
                "result": "tackled",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 25
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 28
                },
                "players": [{
                    "id": "72cf3127-3953-4fd8-8049-3de1b6fa9825",
                    "name": "Jeff Wilson Jr.",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1477812",
                    "role": "rush"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by D.Godchaux; J.Tavai at MIA 28.",
                "sequence": 1,
                "start_location": {
                    "alias": "MIA",
                    "yardline": 28
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 28
                },
                "players": [{
                    "id": "6e6dcc9c-06f5-40fd-9134-d0afd0e349d8",
                    "name": "Davon Godchaux",
                    "jersey": "92",
                    "position": "DT",
                    "sr_id": "sr:player:1130111",
                    "role": "ast_tackle"
                }, {
                    "id": "dfb05fbc-7329-4893-8dc1-3d30033e49d0",
                    "name": "Jahlani Tavai",
                    "jersey": "48",
                    "position": "MLB",
                    "sr_id": "sr:player:1184342",
                    "role": "ast_tackle"
                }]
            }],
            "quarter": {
                "id": "7c4dbc34-d225-4a5f-b90f-a44695d5c4c4",
                "number": 1,
                "sequence": 1
            }
        }, {
            "type": "play",
            "id": "11ed1070-8a02-11ed-9760-5be375bc3cb3",
            "sequence": 1672597719326.0,
            "clock": "6:39",
            "home_points": 7,
            "away_points": 0,
            "play_type": "pass",
            "wall_clock": "2023-01-01T18:28:49+00:00",
            "description": "T.Bridgewater steps back to pass. T.Bridgewater pass incomplete short right intended for J.Wilson.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T18:28:39+00:00",
            "updated_at": "2023-01-01T18:29:31+00:00",
            "start_situation": {
                "clock": "6:39",
                "down": 2,
                "yfd": 7,
                "possession": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 28
                }
            },
            "end_situation": {
                "clock": "6:34",
                "down": 3,
                "yfd": 7,
                "possession": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 28
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
                    "id": "d4cb52a9-f6b4-42ed-b40b-27bff5f1eea7",
                    "name": "Teddy Bridgewater",
                    "jersey": "05",
                    "position": "QB",
                    "sr_id": "sr:player:831153"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }, {
                "stat_type": "receive",
                "firstdown": 0,
                "target": 1,
                "inside_20": 0,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "72cf3127-3953-4fd8-8049-3de1b6fa9825",
                    "name": "Jeff Wilson Jr.",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1477812"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }],
            "details": [{
                "category": "pass",
                "description": "T.Bridgewater steps back to pass.",
                "sequence": 0,
                "start_location": {
                    "alias": "MIA",
                    "yardline": 28
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 28
                },
                "players": [{
                    "id": "d4cb52a9-f6b4-42ed-b40b-27bff5f1eea7",
                    "name": "Teddy Bridgewater",
                    "jersey": "05",
                    "position": "QB",
                    "sr_id": "sr:player:831153",
                    "role": "pass"
                }]
            }, {
                "category": "pass_incompletion",
                "description": "T.Bridgewater pass incomplete short right intended for J.Wilson.",
                "sequence": 1,
                "direction": "short right",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 28
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 28
                },
                "players": [{
                    "id": "72cf3127-3953-4fd8-8049-3de1b6fa9825",
                    "name": "Jeff Wilson Jr.",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1477812",
                    "role": "receive"
                }, {
                    "id": "d4cb52a9-f6b4-42ed-b40b-27bff5f1eea7",
                    "name": "Teddy Bridgewater",
                    "jersey": "05",
                    "position": "QB",
                    "sr_id": "sr:player:831153",
                    "role": "pass"
                }]
            }],
            "quarter": {
                "id": "7c4dbc34-d225-4a5f-b90f-a44695d5c4c4",
                "number": 1,
                "sequence": 1
            }
        }, {
            "type": "play",
            "id": "27824590-8a02-11ed-9760-5be375bc3cb3",
            "sequence": 1672597767204.0,
            "clock": "6:34",
            "home_points": 7,
            "away_points": 0,
            "play_type": "rush",
            "wall_clock": "2023-01-01T18:29:34+00:00",
            "description": "T.Bridgewater scrambles right end to MIA 34 for 6 yards. Tackled by J.Peppers, J.Bentley at MIA 34.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T18:29:27+00:00",
            "updated_at": "2023-01-01T19:25:15+00:00",
            "start_situation": {
                "clock": "6:34",
                "down": 3,
                "yfd": 7,
                "possession": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 28
                }
            },
            "end_situation": {
                "clock": "5:39",
                "down": 4,
                "yfd": 1,
                "possession": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 34
                }
            },
            "statistics": [{
                "stat_type": "rush",
                "attempt": 1,
                "yards": 6,
                "firstdown": 0,
                "inside_20": 0,
                "goaltogo": 0,
                "broken_tackles": 0,
                "kneel_down": 0,
                "scramble": 1,
                "player": {
                    "id": "d4cb52a9-f6b4-42ed-b40b-27bff5f1eea7",
                    "name": "Teddy Bridgewater",
                    "jersey": "05",
                    "position": "QB",
                    "sr_id": "sr:player:831153"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
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
                    "id": "45ef2670-2382-434b-8f26-ba13f044236e",
                    "name": "Jabrill Peppers",
                    "jersey": "03",
                    "position": "DB",
                    "sr_id": "sr:player:1129565"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
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
                    "id": "3164fc4b-b2ae-43b3-9ff1-1d5f744b9f88",
                    "name": "Ja'Whaun Bentley",
                    "jersey": "08",
                    "position": "LB",
                    "sr_id": "sr:player:1227326"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }, {
                "stat_type": "down_conversion",
                "down": 3,
                "attempt": 1,
                "complete": 0,
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }],
            "details": [{
                "category": "scramble",
                "description": "T.Bridgewater scrambles right end to MIA 34 for 6 yards.",
                "sequence": 0,
                "direction": "right end",
                "yards": 6,
                "start_location": {
                    "alias": "MIA",
                    "yardline": 28
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 34
                },
                "players": [{
                    "id": "d4cb52a9-f6b4-42ed-b40b-27bff5f1eea7",
                    "name": "Teddy Bridgewater",
                    "jersey": "05",
                    "position": "QB",
                    "sr_id": "sr:player:831153",
                    "role": "pass"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by J.Peppers, J.Bentley at MIA 34.",
                "sequence": 1,
                "start_location": {
                    "alias": "MIA",
                    "yardline": 34
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 34
                },
                "players": [{
                    "id": "45ef2670-2382-434b-8f26-ba13f044236e",
                    "name": "Jabrill Peppers",
                    "jersey": "03",
                    "position": "DB",
                    "sr_id": "sr:player:1129565",
                    "role": "tackle"
                }, {
                    "id": "3164fc4b-b2ae-43b3-9ff1-1d5f744b9f88",
                    "name": "Ja'Whaun Bentley",
                    "jersey": "08",
                    "position": "LB",
                    "sr_id": "sr:player:1227326",
                    "role": "ast_tackle"
                }]
            }, {
                "category": "third_down_conversion",
                "sequence": 2,
                "result": "missed",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 34
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 34
                },
                "players": []
            }],
            "quarter": {
                "id": "7c4dbc34-d225-4a5f-b90f-a44695d5c4c4",
                "number": 1,
                "sequence": 1
            }
        }, {
            "type": "play",
            "id": "61804f80-8a02-11ed-9760-5be375bc3cb3",
            "sequence": 1672597901885.0,
            "clock": "5:39",
            "home_points": 7,
            "away_points": 0,
            "play_type": "penalty",
            "wall_clock": "2023-01-01T18:31:49+00:00",
            "description": "PENALTY on MIA-R.Hunt, False Start, 5 yards, accepted. No Play.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T18:31:41+00:00",
            "updated_at": "2023-01-01T18:31:42+00:00",
            "start_situation": {
                "clock": "5:39",
                "down": 4,
                "yfd": 1,
                "possession": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 34
                }
            },
            "end_situation": {
                "clock": "5:39",
                "down": 4,
                "yfd": 6,
                "possession": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 29
                }
            },
            "statistics": [{
                "stat_type": "penalty",
                "penalty": 1,
                "yards": 5,
                "player": {
                    "id": "c7ebe543-7fec-4123-bc6e-b0d509af22a2",
                    "name": "Robert Hunt",
                    "jersey": "68",
                    "position": "OL",
                    "sr_id": "sr:player:2040071"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }],
            "details": [{
                "category": "penalty",
                "description": "PENALTY on MIA-R.Hunt, False Start, 5 yards, accepted.",
                "sequence": 0,
                "start_location": {
                    "alias": "MIA",
                    "yardline": 34
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 29
                },
                "penalty": {
                    "description": "False Start",
                    "result": "accepted",
                    "yards": 5,
                    "team": {
                        "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                        "name": "Dolphins",
                        "market": "Miami",
                        "alias": "MIA",
                        "sr_id": "sr:competitor:4287"
                    }
                },
                "players": [{
                    "id": "c7ebe543-7fec-4123-bc6e-b0d509af22a2",
                    "name": "Robert Hunt",
                    "jersey": "68",
                    "position": "OL",
                    "sr_id": "sr:player:2040071",
                    "role": "penalty"
                }]
            }, {
                "category": "no_play",
                "description": "No Play.",
                "sequence": 1,
                "start_location": {
                    "alias": "MIA",
                    "yardline": 29
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 29
                },
                "players": []
            }],
            "quarter": {
                "id": "7c4dbc34-d225-4a5f-b90f-a44695d5c4c4",
                "number": 1,
                "sequence": 1
            }
        }, {
            "type": "play",
            "id": "943ee170-8a02-11ed-9760-5be375bc3cb3",
            "sequence": 1672598003492.0,
            "clock": "5:39",
            "home_points": 7,
            "away_points": 0,
            "play_type": "punt",
            "wall_clock": "2023-01-01T18:32:26+00:00",
            "description": "T.Morstead punts yards to NE 31, Center-B.Ferguson. Out of bounds. PENALTY on NE-B.Schooler, Running Into the Kicker, 5 yards, accepted. No Play.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T18:33:23+00:00",
            "updated_at": "2023-01-01T18:33:24+00:00",
            "start_situation": {
                "clock": "5:39",
                "down": 4,
                "yfd": 6,
                "possession": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 29
                }
            },
            "end_situation": {
                "clock": "5:32",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 26
                }
            },
            "statistics": [{
                "stat_type": "punt",
                "nullified": true,
                "attempt": 1,
                "yards": 0,
                "net_yards": 0,
                "player": {
                    "id": "e5371625-0c83-4f1f-9252-c7e0b6bc616e",
                    "name": "Thomas Morstead",
                    "jersey": "04",
                    "position": "P",
                    "sr_id": "sr:player:830355"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }, {
                "stat_type": "penalty",
                "penalty": 1,
                "yards": 5,
                "player": {
                    "id": "711a03f0-cfea-11ec-8762-8dfa2bbad12c",
                    "name": "Brenden Schooler",
                    "jersey": "41",
                    "position": "DB",
                    "sr_id": "sr:player:1205240"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }, {
                "stat_type": "return",
                "nullified": true,
                "out_of_bounds": 1,
                "category": "punt_return",
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }],
            "details": [{
                "category": "punt",
                "description": "T.Morstead punts yards to NE 31, Center-B.Ferguson.",
                "sequence": 0,
                "start_location": {
                    "alias": "MIA",
                    "yardline": 29
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 31
                },
                "players": [{
                    "id": "e5371625-0c83-4f1f-9252-c7e0b6bc616e",
                    "name": "Thomas Morstead",
                    "jersey": "04",
                    "position": "P",
                    "sr_id": "sr:player:830355",
                    "role": "punt"
                }, {
                    "id": "1b3524b6-bc24-4d9a-947f-ebda67be1c41",
                    "name": "Blake Ferguson",
                    "jersey": "44",
                    "position": "LS",
                    "sr_id": "sr:player:2039989",
                    "role": "snap"
                }]
            }, {
                "category": "out_of_bounds",
                "description": "Out of bounds.",
                "sequence": 1,
                "start_location": {
                    "alias": "NE",
                    "yardline": 31
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 31
                },
                "players": [{
                    "id": "e5371625-0c83-4f1f-9252-c7e0b6bc616e",
                    "name": "Thomas Morstead",
                    "jersey": "04",
                    "position": "P",
                    "sr_id": "sr:player:830355",
                    "role": "punt"
                }]
            }, {
                "category": "penalty",
                "description": "PENALTY on NE-B.Schooler, Running Into the Kicker, 5 yards, accepted.",
                "sequence": 2,
                "start_location": {
                    "alias": "MIA",
                    "yardline": 31
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 26
                },
                "penalty": {
                    "description": "Running Into the Kicker",
                    "result": "accepted",
                    "yards": 5,
                    "team": {
                        "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                        "name": "Patriots",
                        "market": "New England",
                        "alias": "NE",
                        "sr_id": "sr:competitor:4424"
                    }
                },
                "players": [{
                    "id": "711a03f0-cfea-11ec-8762-8dfa2bbad12c",
                    "name": "Brenden Schooler",
                    "jersey": "41",
                    "position": "DB",
                    "sr_id": "sr:player:1205240",
                    "role": "penalty"
                }]
            }, {
                "category": "no_play",
                "description": "No Play.",
                "sequence": 3,
                "start_location": {
                    "alias": "MIA",
                    "yardline": 26
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 26
                },
                "players": []
            }],
            "quarter": {
                "id": "7c4dbc34-d225-4a5f-b90f-a44695d5c4c4",
                "number": 1,
                "sequence": 1
            }
        }, {
            "type": "play",
            "id": "d1264fb0-8a02-11ed-9760-5be375bc3cb3",
            "sequence": 1672598031364.0,
            "clock": "5:32",
            "home_points": 7,
            "away_points": 0,
            "play_type": "rush",
            "wall_clock": "2023-01-01T18:34:03+00:00",
            "description": "J.Wilson rushed right guard to MIA 36 for 2 yards. Tackled by D.Wise at MIA 36.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T18:33:51+00:00",
            "updated_at": "2023-01-01T18:34:32+00:00",
            "start_situation": {
                "clock": "5:32",
                "down": 4,
                "yfd": 1,
                "possession": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 34
                }
            },
            "end_situation": {
                "clock": "4:54",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
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
                    "id": "72cf3127-3953-4fd8-8049-3de1b6fa9825",
                    "name": "Jeff Wilson Jr.",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1477812"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
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
                    "id": "2516f9e7-9927-409d-adbe-b32d680ae71d",
                    "name": "Deatrich Wise Jr.",
                    "jersey": "91",
                    "position": "DL",
                    "sr_id": "sr:player:1130123"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }, {
                "stat_type": "down_conversion",
                "down": 4,
                "attempt": 1,
                "complete": 1,
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }, {
                "stat_type": "first_down",
                "category": "rush",
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }],
            "details": [{
                "category": "rush",
                "description": "J.Wilson rushed right guard to MIA 36 for 2 yards.",
                "sequence": 0,
                "direction": "right guard",
                "yards": 2,
                "result": "tackled",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 34
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 36
                },
                "players": [{
                    "id": "72cf3127-3953-4fd8-8049-3de1b6fa9825",
                    "name": "Jeff Wilson Jr.",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1477812",
                    "role": "rush"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by D.Wise at MIA 36.",
                "sequence": 1,
                "start_location": {
                    "alias": "MIA",
                    "yardline": 36
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 36
                },
                "players": [{
                    "id": "2516f9e7-9927-409d-adbe-b32d680ae71d",
                    "name": "Deatrich Wise Jr.",
                    "jersey": "91",
                    "position": "DL",
                    "sr_id": "sr:player:1130123",
                    "role": "tackle"
                }]
            }, {
                "category": "first_down",
                "sequence": 2,
                "result": "rush",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 36
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 36
                },
                "players": []
            }, {
                "category": "fourth_down_conversion",
                "sequence": 3,
                "result": "good",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 36
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 36
                },
                "players": []
            }],
            "quarter": {
                "id": "7c4dbc34-d225-4a5f-b90f-a44695d5c4c4",
                "number": 1,
                "sequence": 1
            }
        }, {
            "type": "play",
            "id": "e19fd730-8a02-11ed-9760-5be375bc3cb3",
            "sequence": 1672598056618.0,
            "clock": "4:54",
            "home_points": 7,
            "away_points": 0,
            "play_type": "rush",
            "wall_clock": "2023-01-01T18:34:26+00:00",
            "description": "J.Wilson rushed right end to MIA 38 for 2 yards. Pushed out of bounds by J.Jones at MIA 38.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T18:34:16+00:00",
            "updated_at": "2023-01-01T18:36:28+00:00",
            "start_situation": {
                "clock": "4:54",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 36
                }
            },
            "end_situation": {
                "clock": "4:07",
                "down": 2,
                "yfd": 8,
                "possession": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 38
                }
            },
            "statistics": [{
                "stat_type": "rush",
                "attempt": 1,
                "yards": 2,
                "firstdown": 0,
                "inside_20": 0,
                "goaltogo": 0,
                "broken_tackles": 0,
                "kneel_down": 0,
                "scramble": 0,
                "player": {
                    "id": "72cf3127-3953-4fd8-8049-3de1b6fa9825",
                    "name": "Jeff Wilson Jr.",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1477812"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
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
                    "id": "537c88d4-c403-43f4-94a1-fdccea0ee24a",
                    "name": "Jonathan Jones",
                    "jersey": "31",
                    "position": "DB",
                    "sr_id": "sr:player:989241"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }],
            "details": [{
                "category": "rush",
                "description": "J.Wilson rushed right end to MIA 38 for 2 yards.",
                "sequence": 0,
                "direction": "right end",
                "yards": 2,
                "result": "pushed out of bounds",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 36
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 38
                },
                "players": [{
                    "id": "72cf3127-3953-4fd8-8049-3de1b6fa9825",
                    "name": "Jeff Wilson Jr.",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1477812",
                    "role": "rush"
                }]
            }, {
                "category": "pushed_out_of_bounds",
                "description": "Pushed out of bounds by J.Jones at MIA 38.",
                "sequence": 1,
                "start_location": {
                    "alias": "MIA",
                    "yardline": 38
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 38
                },
                "players": [{
                    "id": "537c88d4-c403-43f4-94a1-fdccea0ee24a",
                    "name": "Jonathan Jones",
                    "jersey": "31",
                    "position": "DB",
                    "sr_id": "sr:player:989241",
                    "role": "tackle"
                }]
            }],
            "quarter": {
                "id": "7c4dbc34-d225-4a5f-b90f-a44695d5c4c4",
                "number": 1,
                "sequence": 1
            }
        }, {
            "type": "play",
            "id": "f08ccb40-8a02-11ed-9760-5be375bc3cb3",
            "sequence": 1672598102264.0,
            "clock": "4:07",
            "home_points": 7,
            "away_points": 0,
            "play_type": "rush",
            "wall_clock": "2023-01-01T18:35:13+00:00",
            "description": "J.Wilson rushed right guard to MIA 40 for 2 yards. Tackled by K.Dugger; D.Godchaux at MIA 40.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T18:35:02+00:00",
            "updated_at": "2023-01-01T18:37:15+00:00",
            "start_situation": {
                "clock": "4:07",
                "down": 2,
                "yfd": 8,
                "possession": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 38
                }
            },
            "end_situation": {
                "clock": "3:22",
                "down": 3,
                "yfd": 6,
                "possession": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 40
                }
            },
            "statistics": [{
                "stat_type": "rush",
                "attempt": 1,
                "yards": 2,
                "firstdown": 0,
                "inside_20": 0,
                "goaltogo": 0,
                "broken_tackles": 0,
                "kneel_down": 0,
                "scramble": 0,
                "player": {
                    "id": "72cf3127-3953-4fd8-8049-3de1b6fa9825",
                    "name": "Jeff Wilson Jr.",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1477812"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
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
                    "id": "1d8d5c04-15e7-4346-9d1f-f128e4df3adb",
                    "name": "Kyle Dugger",
                    "jersey": "23",
                    "position": "DB",
                    "sr_id": "sr:player:2040541"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
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
                    "id": "6e6dcc9c-06f5-40fd-9134-d0afd0e349d8",
                    "name": "Davon Godchaux",
                    "jersey": "92",
                    "position": "DT",
                    "sr_id": "sr:player:1130111"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }],
            "details": [{
                "category": "rush",
                "description": "J.Wilson rushed right guard to MIA 40 for 2 yards.",
                "sequence": 0,
                "direction": "right guard",
                "yards": 2,
                "result": "tackled",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 38
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 40
                },
                "players": [{
                    "id": "72cf3127-3953-4fd8-8049-3de1b6fa9825",
                    "name": "Jeff Wilson Jr.",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1477812",
                    "role": "rush"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by K.Dugger; D.Godchaux at MIA 40.",
                "sequence": 1,
                "start_location": {
                    "alias": "MIA",
                    "yardline": 40
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 40
                },
                "players": [{
                    "id": "1d8d5c04-15e7-4346-9d1f-f128e4df3adb",
                    "name": "Kyle Dugger",
                    "jersey": "23",
                    "position": "DB",
                    "sr_id": "sr:player:2040541",
                    "role": "ast_tackle"
                }, {
                    "id": "6e6dcc9c-06f5-40fd-9134-d0afd0e349d8",
                    "name": "Davon Godchaux",
                    "jersey": "92",
                    "position": "DT",
                    "sr_id": "sr:player:1130111",
                    "role": "ast_tackle"
                }]
            }],
            "quarter": {
                "id": "7c4dbc34-d225-4a5f-b90f-a44695d5c4c4",
                "number": 1,
                "sequence": 1
            }
        }, {
            "type": "play",
            "id": "0be64a10-8a03-11ed-9760-5be375bc3cb3",
            "sequence": 1672598155860.0,
            "clock": "3:22",
            "home_points": 7,
            "away_points": 0,
            "play_type": "pass",
            "wall_clock": "2023-01-01T18:35:58+00:00",
            "description": "T.Bridgewater pass short middle complete to MIA 46. Catch made by J.Wilson at MIA 46. Gain of 13 yards. Tackled by J.Tavai at NE 47.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T18:35:55+00:00",
            "updated_at": "2023-01-01T18:38:18+00:00",
            "start_situation": {
                "clock": "3:22",
                "down": 3,
                "yfd": 6,
                "possession": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 40
                }
            },
            "end_situation": {
                "clock": "2:46",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 47
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 1,
                "yards": 13,
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
                    "id": "d4cb52a9-f6b4-42ed-b40b-27bff5f1eea7",
                    "name": "Teddy Bridgewater",
                    "jersey": "05",
                    "position": "QB",
                    "sr_id": "sr:player:831153"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }, {
                "stat_type": "receive",
                "firstdown": 1,
                "target": 1,
                "reception": 1,
                "yards": 13,
                "yards_after_catch": 7,
                "inside_20": 0,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "72cf3127-3953-4fd8-8049-3de1b6fa9825",
                    "name": "Jeff Wilson Jr.",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1477812"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
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
                    "id": "dfb05fbc-7329-4893-8dc1-3d30033e49d0",
                    "name": "Jahlani Tavai",
                    "jersey": "48",
                    "position": "MLB",
                    "sr_id": "sr:player:1184342"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }, {
                "stat_type": "down_conversion",
                "down": 3,
                "attempt": 1,
                "complete": 1,
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }, {
                "stat_type": "first_down",
                "category": "pass",
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }],
            "details": [{
                "category": "pass_completion",
                "description": "T.Bridgewater pass short middle complete to MIA 46.",
                "sequence": 0,
                "direction": "short middle",
                "yards": 13,
                "start_location": {
                    "alias": "MIA",
                    "yardline": 40
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 46
                },
                "players": [{
                    "id": "d4cb52a9-f6b4-42ed-b40b-27bff5f1eea7",
                    "name": "Teddy Bridgewater",
                    "jersey": "05",
                    "position": "QB",
                    "sr_id": "sr:player:831153",
                    "role": "pass"
                }]
            }, {
                "category": "pass_reception",
                "description": "Catch made by J.Wilson at MIA 46. Gain of 13 yards.",
                "sequence": 1,
                "yards": 13,
                "result": "tackled",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 46
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 47
                },
                "players": [{
                    "id": "72cf3127-3953-4fd8-8049-3de1b6fa9825",
                    "name": "Jeff Wilson Jr.",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1477812",
                    "role": "catch"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by J.Tavai at NE 47.",
                "sequence": 2,
                "start_location": {
                    "alias": "NE",
                    "yardline": 47
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 47
                },
                "players": [{
                    "id": "dfb05fbc-7329-4893-8dc1-3d30033e49d0",
                    "name": "Jahlani Tavai",
                    "jersey": "48",
                    "position": "MLB",
                    "sr_id": "sr:player:1184342",
                    "role": "tackle"
                }]
            }, {
                "category": "first_down",
                "sequence": 3,
                "result": "pass",
                "start_location": {
                    "alias": "NE",
                    "yardline": 47
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 47
                },
                "players": []
            }, {
                "category": "third_down_conversion",
                "sequence": 4,
                "result": "good",
                "start_location": {
                    "alias": "NE",
                    "yardline": 47
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 47
                },
                "players": []
            }],
            "quarter": {
                "id": "7c4dbc34-d225-4a5f-b90f-a44695d5c4c4",
                "number": 1,
                "sequence": 1
            }
        }, {
            "type": "play",
            "id": "32971310-8a03-11ed-9760-5be375bc3cb3",
            "sequence": 1672598185385.0,
            "clock": "2:46",
            "home_points": 7,
            "away_points": 0,
            "play_type": "rush",
            "wall_clock": "2023-01-01T18:36:34+00:00",
            "description": "J.Wilson rushed right tackle to NE 43 for 4 yards. Tackled by J.Bentley, K.Dugger at NE 43.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T18:36:25+00:00",
            "updated_at": "2023-01-01T19:11:33+00:00",
            "start_situation": {
                "clock": "2:46",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 47
                }
            },
            "end_situation": {
                "clock": "2:02",
                "down": 2,
                "yfd": 7,
                "possession": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 43
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
                    "id": "72cf3127-3953-4fd8-8049-3de1b6fa9825",
                    "name": "Jeff Wilson Jr.",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1477812"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
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
                    "id": "3164fc4b-b2ae-43b3-9ff1-1d5f744b9f88",
                    "name": "Ja'Whaun Bentley",
                    "jersey": "08",
                    "position": "LB",
                    "sr_id": "sr:player:1227326"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
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
                    "id": "1d8d5c04-15e7-4346-9d1f-f128e4df3adb",
                    "name": "Kyle Dugger",
                    "jersey": "23",
                    "position": "DB",
                    "sr_id": "sr:player:2040541"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }],
            "details": [{
                "category": "rush",
                "description": "J.Wilson rushed right tackle to NE 43 for 4 yards.",
                "sequence": 0,
                "direction": "right tackle",
                "yards": 4,
                "result": "tackled",
                "start_location": {
                    "alias": "NE",
                    "yardline": 47
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 43
                },
                "players": [{
                    "id": "72cf3127-3953-4fd8-8049-3de1b6fa9825",
                    "name": "Jeff Wilson Jr.",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1477812",
                    "role": "rush"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by J.Bentley, K.Dugger at NE 43.",
                "sequence": 1,
                "start_location": {
                    "alias": "NE",
                    "yardline": 43
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 43
                },
                "players": [{
                    "id": "1d8d5c04-15e7-4346-9d1f-f128e4df3adb",
                    "name": "Kyle Dugger",
                    "jersey": "23",
                    "position": "DB",
                    "sr_id": "sr:player:2040541",
                    "role": "ast_tackle"
                }, {
                    "id": "3164fc4b-b2ae-43b3-9ff1-1d5f744b9f88",
                    "name": "Ja'Whaun Bentley",
                    "jersey": "08",
                    "position": "LB",
                    "sr_id": "sr:player:1227326",
                    "role": "tackle"
                }]
            }],
            "quarter": {
                "id": "7c4dbc34-d225-4a5f-b90f-a44695d5c4c4",
                "number": 1,
                "sequence": 1
            }
        }, {
            "type": "play",
            "id": "3d6d6d70-8a03-11ed-9760-5be375bc3cb3",
            "sequence": 1672598228499.0,
            "clock": "2:02",
            "home_points": 7,
            "away_points": 0,
            "play_type": "pass",
            "wall_clock": "2023-01-01T18:37:17+00:00",
            "description": "T.Bridgewater pass deep left complete to NE 24. Catch made by T.Hill at NE 24. Gain of 19 yards. Pushed out of bounds by at NE 24.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T18:37:08+00:00",
            "updated_at": "2023-01-01T19:26:56+00:00",
            "start_situation": {
                "clock": "2:02",
                "down": 2,
                "yfd": 7,
                "possession": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 43
                }
            },
            "end_situation": {
                "clock": "1:35",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 24
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 1,
                "yards": 19,
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
                    "id": "d4cb52a9-f6b4-42ed-b40b-27bff5f1eea7",
                    "name": "Teddy Bridgewater",
                    "jersey": "05",
                    "position": "QB",
                    "sr_id": "sr:player:831153"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }, {
                "stat_type": "receive",
                "firstdown": 1,
                "target": 1,
                "reception": 1,
                "yards": 19,
                "yards_after_catch": 0,
                "inside_20": 0,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "01d8aee3-e1c4-4988-970a-8c0c2d08bd83",
                    "name": "Tyreek Hill",
                    "jersey": "10",
                    "position": "WR",
                    "sr_id": "sr:player:988793"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }, {
                "stat_type": "first_down",
                "category": "pass",
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }],
            "details": [{
                "category": "pass_completion",
                "description": "T.Bridgewater pass deep left complete to NE 24.",
                "sequence": 0,
                "direction": "deep left",
                "yards": 19,
                "start_location": {
                    "alias": "NE",
                    "yardline": 43
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 24
                },
                "players": [{
                    "id": "d4cb52a9-f6b4-42ed-b40b-27bff5f1eea7",
                    "name": "Teddy Bridgewater",
                    "jersey": "05",
                    "position": "QB",
                    "sr_id": "sr:player:831153",
                    "role": "pass"
                }]
            }, {
                "category": "pass_reception",
                "description": "Catch made by T.Hill at NE 24. Gain of 19 yards.",
                "sequence": 1,
                "yards": 19,
                "result": "pushed out of bounds",
                "start_location": {
                    "alias": "NE",
                    "yardline": 24
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 24
                },
                "players": [{
                    "id": "01d8aee3-e1c4-4988-970a-8c0c2d08bd83",
                    "name": "Tyreek Hill",
                    "jersey": "10",
                    "position": "WR",
                    "sr_id": "sr:player:988793",
                    "role": "catch"
                }]
            }, {
                "category": "pushed_out_of_bounds",
                "description": "Pushed out of bounds by at NE 24.",
                "sequence": 2,
                "start_location": {
                    "alias": "NE",
                    "yardline": 24
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 24
                },
                "players": []
            }, {
                "category": "first_down",
                "sequence": 3,
                "result": "pass",
                "start_location": {
                    "alias": "NE",
                    "yardline": 24
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 24
                },
                "players": []
            }],
            "quarter": {
                "id": "7c4dbc34-d225-4a5f-b90f-a44695d5c4c4",
                "number": 1,
                "sequence": 1
            }
        }, {
            "type": "play",
            "id": "61e86ab0-8a03-11ed-9760-5be375bc3cb3",
            "sequence": 1672598262719.0,
            "clock": "1:35",
            "home_points": 7,
            "away_points": 0,
            "play_type": "rush",
            "wall_clock": "2023-01-01T18:37:55+00:00",
            "description": "J.Wilson rushed left tackle to NE 19 for 5 yards. Tackled by J.Tavai; D.Wise at NE 19.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T18:37:42+00:00",
            "updated_at": "2023-01-01T19:09:36+00:00",
            "start_situation": {
                "clock": "1:35",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 24
                }
            },
            "end_situation": {
                "clock": "00:52",
                "down": 2,
                "yfd": 5,
                "possession": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 19
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
                    "id": "72cf3127-3953-4fd8-8049-3de1b6fa9825",
                    "name": "Jeff Wilson Jr.",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1477812"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
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
                    "id": "dfb05fbc-7329-4893-8dc1-3d30033e49d0",
                    "name": "Jahlani Tavai",
                    "jersey": "48",
                    "position": "MLB",
                    "sr_id": "sr:player:1184342"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
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
                    "id": "2516f9e7-9927-409d-adbe-b32d680ae71d",
                    "name": "Deatrich Wise Jr.",
                    "jersey": "91",
                    "position": "DL",
                    "sr_id": "sr:player:1130123"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }],
            "details": [{
                "category": "rush",
                "description": "J.Wilson rushed left tackle to NE 19 for 5 yards.",
                "sequence": 0,
                "direction": "left tackle",
                "yards": 5,
                "result": "tackled",
                "start_location": {
                    "alias": "NE",
                    "yardline": 24
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 19
                },
                "players": [{
                    "id": "72cf3127-3953-4fd8-8049-3de1b6fa9825",
                    "name": "Jeff Wilson Jr.",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1477812",
                    "role": "rush"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by J.Tavai; D.Wise at NE 19.",
                "sequence": 1,
                "start_location": {
                    "alias": "NE",
                    "yardline": 19
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 19
                },
                "players": [{
                    "id": "dfb05fbc-7329-4893-8dc1-3d30033e49d0",
                    "name": "Jahlani Tavai",
                    "jersey": "48",
                    "position": "MLB",
                    "sr_id": "sr:player:1184342",
                    "role": "ast_tackle"
                }, {
                    "id": "2516f9e7-9927-409d-adbe-b32d680ae71d",
                    "name": "Deatrich Wise Jr.",
                    "jersey": "91",
                    "position": "DL",
                    "sr_id": "sr:player:1130123",
                    "role": "ast_tackle"
                }]
            }],
            "quarter": {
                "id": "7c4dbc34-d225-4a5f-b90f-a44695d5c4c4",
                "number": 1,
                "sequence": 1
            }
        }, {
            "type": "play",
            "id": "6b8dbf20-8a03-11ed-9760-5be375bc3cb3",
            "sequence": 1672598311527.0,
            "clock": "00:52",
            "home_points": 7,
            "away_points": 0,
            "play_type": "pass",
            "wall_clock": "2023-01-01T18:38:39+00:00",
            "description": "T.Bridgewater pass short right complete to NE 6. Catch made by M.Gesicki at NE 6. Gain of 14 yards. Tackled by D.McCourty at NE 5.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T18:38:31+00:00",
            "updated_at": "2023-01-01T19:26:56+00:00",
            "start_situation": {
                "clock": "00:52",
                "down": 2,
                "yfd": 5,
                "possession": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 19
                }
            },
            "end_situation": {
                "clock": "00:13",
                "down": 1,
                "yfd": 5,
                "possession": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 5
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 1,
                "yards": 14,
                "att_yards": 13,
                "firstdown": 1,
                "inside_20": 1,
                "goaltogo": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "on_target_throw": 0,
                "batted_pass": 0,
                "player": {
                    "id": "d4cb52a9-f6b4-42ed-b40b-27bff5f1eea7",
                    "name": "Teddy Bridgewater",
                    "jersey": "05",
                    "position": "QB",
                    "sr_id": "sr:player:831153"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }, {
                "stat_type": "receive",
                "firstdown": 1,
                "target": 1,
                "reception": 1,
                "yards": 14,
                "yards_after_catch": 1,
                "inside_20": 1,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "1012cbe0-7eba-4169-bfca-183a0204e1a7",
                    "name": "Mike Gesicki",
                    "jersey": "88",
                    "position": "TE",
                    "sr_id": "sr:player:1218868"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
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
                    "id": "88d2dbf4-3b9f-43ea-bac6-a8722cb24f43",
                    "name": "Devin McCourty",
                    "jersey": "32",
                    "position": "DB",
                    "sr_id": "sr:player:829835"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }, {
                "stat_type": "first_down",
                "category": "pass",
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }],
            "details": [{
                "category": "pass_completion",
                "description": "T.Bridgewater pass short right complete to NE 6.",
                "sequence": 0,
                "direction": "short right",
                "yards": 14,
                "start_location": {
                    "alias": "NE",
                    "yardline": 19
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 6
                },
                "players": [{
                    "id": "d4cb52a9-f6b4-42ed-b40b-27bff5f1eea7",
                    "name": "Teddy Bridgewater",
                    "jersey": "05",
                    "position": "QB",
                    "sr_id": "sr:player:831153",
                    "role": "pass"
                }]
            }, {
                "category": "pass_reception",
                "description": "Catch made by M.Gesicki at NE 6. Gain of 14 yards.",
                "sequence": 1,
                "yards": 14,
                "result": "tackled",
                "start_location": {
                    "alias": "NE",
                    "yardline": 6
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 5
                },
                "players": [{
                    "id": "1012cbe0-7eba-4169-bfca-183a0204e1a7",
                    "name": "Mike Gesicki",
                    "jersey": "88",
                    "position": "TE",
                    "sr_id": "sr:player:1218868",
                    "role": "catch"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by D.McCourty at NE 5.",
                "sequence": 2,
                "start_location": {
                    "alias": "NE",
                    "yardline": 5
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 5
                },
                "players": [{
                    "id": "88d2dbf4-3b9f-43ea-bac6-a8722cb24f43",
                    "name": "Devin McCourty",
                    "jersey": "32",
                    "position": "DB",
                    "sr_id": "sr:player:829835",
                    "role": "tackle"
                }]
            }, {
                "category": "first_down",
                "sequence": 3,
                "result": "pass",
                "start_location": {
                    "alias": "NE",
                    "yardline": 5
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 5
                },
                "players": []
            }],
            "quarter": {
                "id": "7c4dbc34-d225-4a5f-b90f-a44695d5c4c4",
                "number": 1,
                "sequence": 1
            }
        }, {
            "type": "play",
            "id": "91966140-8a03-11ed-9760-5be375bc3cb3",
            "sequence": 1672598349475.0,
            "clock": "00:13",
            "home_points": 7,
            "away_points": 0,
            "play_type": "rush",
            "goaltogo": true,
            "wall_clock": "2023-01-01T18:39:19+00:00",
            "description": "R.Mostert rushed right guard to NE 2 for 3 yards. Tackled by L.Guy at NE 2.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T18:39:09+00:00",
            "updated_at": "2023-01-01T19:26:56+00:00",
            "start_situation": {
                "clock": "00:13",
                "down": 1,
                "yfd": 5,
                "possession": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 5
                }
            },
            "end_situation": {
                "clock": "00:00",
                "down": 2,
                "yfd": 2,
                "possession": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 2
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
                    "id": "b040e601-ec40-4757-bf3d-71bf64ef99cf",
                    "name": "Raheem Mostert",
                    "jersey": "31",
                    "position": "RB",
                    "sr_id": "sr:player:855634"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
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
                    "id": "0861a57d-b468-4c21-ba3a-7523b6838ed0",
                    "name": "Lawrence Guy Sr.",
                    "jersey": "93",
                    "position": "DL",
                    "sr_id": "sr:player:831335"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }],
            "details": [{
                "category": "rush",
                "description": "R.Mostert rushed right guard to NE 2 for 3 yards.",
                "sequence": 0,
                "direction": "right guard",
                "yards": 3,
                "result": "tackled",
                "start_location": {
                    "alias": "NE",
                    "yardline": 5
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 2
                },
                "players": [{
                    "id": "b040e601-ec40-4757-bf3d-71bf64ef99cf",
                    "name": "Raheem Mostert",
                    "jersey": "31",
                    "position": "RB",
                    "sr_id": "sr:player:855634",
                    "role": "rush"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by L.Guy at NE 2.",
                "sequence": 1,
                "start_location": {
                    "alias": "NE",
                    "yardline": 2
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 2
                },
                "players": [{
                    "id": "0861a57d-b468-4c21-ba3a-7523b6838ed0",
                    "name": "Lawrence Guy Sr.",
                    "jersey": "93",
                    "position": "DL",
                    "sr_id": "sr:player:831335",
                    "role": "tackle"
                }]
            }],
            "quarter": {
                "id": "7c4dbc34-d225-4a5f-b90f-a44695d5c4c4",
                "number": 1,
                "sequence": 1
            }
        }, {
            "type": "play",
            "id": "a7643290-8a03-11ed-9760-5be375bc3cb3",
            "sequence": 1672598578328.0,
            "clock": "15:00",
            "home_points": 7,
            "away_points": 6,
            "play_type": "rush",
            "scoring_play": true,
            "goaltogo": true,
            "wall_clock": "2023-01-01T18:42:34+00:00",
            "description": "T.Hill rushed left tackle to NE End Zone for 2 yards. T.Hill for 2 yards, TOUCHDOWN.",
            "scoring_description": "T.Hill rushed left tackle to NE End Zone for 2 yards. T.Hill for 2 yards, TOUCHDOWN.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T18:42:58+00:00",
            "updated_at": "2023-01-01T19:26:56+00:00",
            "start_situation": {
                "clock": "15:00",
                "down": 2,
                "yfd": 2,
                "possession": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 2
                }
            },
            "end_situation": {
                "clock": "14:55",
                "down": 0,
                "yfd": 0,
                "possession": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 15
                }
            },
            "score": {
                "sequence": 4,
                "clock": "14:55",
                "points": 7,
                "home_points": 7,
                "away_points": 6,
                "points-after-play": {
                    "id": "27a96ab0-8a04-11ed-9760-5be375bc3cb3",
                    "sequence": 1672598588250.0,
                    "type": "extra_point"
                }
            },
            "statistics": [{
                "stat_type": "rush",
                "attempt": 1,
                "yards": 2,
                "touchdown": 1,
                "firstdown": 1,
                "inside_20": 1,
                "goaltogo": 1,
                "broken_tackles": 0,
                "kneel_down": 0,
                "scramble": 0,
                "player": {
                    "id": "01d8aee3-e1c4-4988-970a-8c0c2d08bd83",
                    "name": "Tyreek Hill",
                    "jersey": "10",
                    "position": "WR",
                    "sr_id": "sr:player:988793"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }, {
                "stat_type": "first_down",
                "category": "rush",
                "player": {
                    "id": "01d8aee3-e1c4-4988-970a-8c0c2d08bd83",
                    "name": "Tyreek Hill",
                    "jersey": "10",
                    "position": "WR",
                    "sr_id": "sr:player:988793"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }],
            "details": [{
                "category": "rush",
                "description": "T.Hill rushed left tackle to NE End Zone for 2 yards.",
                "sequence": 0,
                "direction": "left tackle",
                "yards": 2,
                "result": "touchdown",
                "start_location": {
                    "alias": "NE",
                    "yardline": 2
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 0
                },
                "players": [{
                    "id": "01d8aee3-e1c4-4988-970a-8c0c2d08bd83",
                    "name": "Tyreek Hill",
                    "jersey": "10",
                    "position": "WR",
                    "sr_id": "sr:player:988793",
                    "role": "rush"
                }]
            }, {
                "category": "touchdown",
                "description": "T.Hill for 2 yards, TOUCHDOWN.",
                "sequence": 1,
                "yards": 2,
                "result": "touchdown",
                "start_location": {
                    "alias": "NE",
                    "yardline": 0
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 0
                },
                "players": [{
                    "id": "01d8aee3-e1c4-4988-970a-8c0c2d08bd83",
                    "name": "Tyreek Hill",
                    "jersey": "10",
                    "position": "WR",
                    "sr_id": "sr:player:988793",
                    "role": "rush"
                }]
            }],
            "quarter": {
                "id": "ae302c16-4827-415c-b24a-ec63d06191aa",
                "number": 2,
                "sequence": 2
            }
        }, {
            "type": "play",
            "id": "27a96ab0-8a04-11ed-9760-5be375bc3cb3",
            "sequence": 1672598588250.0,
            "clock": "14:55",
            "home_points": 7,
            "away_points": 7,
            "play_type": "extra_point",
            "scoring_play": true,
            "wall_clock": "2023-01-01T18:43:22+00:00",
            "description": "J.Sanders extra point is good.",
            "scoring_description": "T.Hill rushed left tackle to NE End Zone for 2 yards. T.Hill for 2 yards, TOUCHDOWN.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T18:43:08+00:00",
            "updated_at": "2023-01-01T19:26:56+00:00",
            "start_situation": {
                "clock": "14:55",
                "down": 0,
                "yfd": 0,
                "possession": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 15
                }
            },
            "end_situation": {
                "clock": "14:55",
                "down": 0,
                "yfd": 0,
                "possession": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 35
                }
            },
            "statistics": [{
                "stat_type": "extra_point",
                "attempt": 1,
                "made": 1,
                "player": {
                    "id": "5ffb654f-0de5-424b-aa2f-ad511deb5b51",
                    "name": "Jason Sanders",
                    "jersey": "07",
                    "position": "K",
                    "sr_id": "sr:player:1199416"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }],
            "details": [{
                "category": "extra_point_attempt",
                "description": "J.Sanders extra point is good.",
                "sequence": 0,
                "result": "good",
                "start_location": {
                    "alias": "NE",
                    "yardline": 15
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 15
                },
                "players": [{
                    "id": "5ffb654f-0de5-424b-aa2f-ad511deb5b51",
                    "name": "Jason Sanders",
                    "jersey": "07",
                    "position": "K",
                    "sr_id": "sr:player:1199416",
                    "role": "kick"
                }]
            }],
            "quarter": {
                "id": "ae302c16-4827-415c-b24a-ec63d06191aa",
                "number": 2,
                "sequence": 2
            }
        }]
    }, {
        "id": "d643fd6f-0d40-4537-af01-fb479e392d4b",
        "sequence": 12,
        "start_reason": "Punt",
        "end_reason": "Touchdown",
        "play_count": 5,
        "duration": "2:45",
        "first_downs": 3,
        "gain": 41,
        "penalty_yards": 0,
        "inside_20": true,
        "scoring_drive": true,
        "quarter": {
            "id": "7c0b12fb-58f6-4b1a-a982-6833c3a3eb58",
            "number": 3,
            "sequence": 3
        },
        "team": {
            "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
            "name": "Dolphins",
            "market": "Miami",
            "alias": "MIA",
            "sr_id": "sr:competitor:4287"
        },
        "plays": [{
            "type": "play",
            "id": "e0b61270-8a0d-11ed-9308-3ba3ec8cbdcb",
            "sequence": 1672602783043.0,
            "clock": "12:02",
            "home_points": 7,
            "away_points": 7,
            "play_type": "pass",
            "wall_clock": "2023-01-01T19:53:12+00:00",
            "description": "T.Bridgewater pass short middle complete to NE 26. Catch made by J.Waddle at NE 26. Gain of 23 yards. Tackled by M.Bryant at NE 18.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T19:53:03+00:00",
            "updated_at": "2023-01-01T19:59:28+00:00",
            "start_situation": {
                "clock": "12:02",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 41
                }
            },
            "end_situation": {
                "clock": "11:22",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 18
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 1,
                "yards": 23,
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
                    "id": "d4cb52a9-f6b4-42ed-b40b-27bff5f1eea7",
                    "name": "Teddy Bridgewater",
                    "jersey": "05",
                    "position": "QB",
                    "sr_id": "sr:player:831153"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }, {
                "stat_type": "receive",
                "firstdown": 1,
                "target": 1,
                "reception": 1,
                "yards": 23,
                "yards_after_catch": 8,
                "inside_20": 0,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "0ff9a975-669d-4851-a95d-ab28d9fc29c4",
                    "name": "Jaylen Waddle",
                    "jersey": "17",
                    "position": "WR",
                    "sr_id": "sr:player:2197644"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
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
                    "id": "7a51270b-cbdf-451e-a9e7-0f0b23435dd0",
                    "name": "Myles Bryant",
                    "jersey": "27",
                    "position": "DB",
                    "sr_id": "sr:player:2040591"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }, {
                "stat_type": "first_down",
                "category": "pass",
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }],
            "details": [{
                "category": "pass_completion",
                "description": "T.Bridgewater pass short middle complete to NE 26.",
                "sequence": 0,
                "direction": "short middle",
                "yards": 23,
                "start_location": {
                    "alias": "NE",
                    "yardline": 41
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 26
                },
                "players": [{
                    "id": "d4cb52a9-f6b4-42ed-b40b-27bff5f1eea7",
                    "name": "Teddy Bridgewater",
                    "jersey": "05",
                    "position": "QB",
                    "sr_id": "sr:player:831153",
                    "role": "pass"
                }]
            }, {
                "category": "pass_reception",
                "description": "Catch made by J.Waddle at NE 26. Gain of 23 yards.",
                "sequence": 1,
                "yards": 23,
                "result": "tackled",
                "start_location": {
                    "alias": "NE",
                    "yardline": 26
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 18
                },
                "players": [{
                    "id": "0ff9a975-669d-4851-a95d-ab28d9fc29c4",
                    "name": "Jaylen Waddle",
                    "jersey": "17",
                    "position": "WR",
                    "sr_id": "sr:player:2197644",
                    "role": "catch"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by M.Bryant at NE 18.",
                "sequence": 2,
                "start_location": {
                    "alias": "NE",
                    "yardline": 18
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 18
                },
                "players": [{
                    "id": "7a51270b-cbdf-451e-a9e7-0f0b23435dd0",
                    "name": "Myles Bryant",
                    "jersey": "27",
                    "position": "DB",
                    "sr_id": "sr:player:2040591",
                    "role": "tackle"
                }]
            }, {
                "category": "first_down",
                "sequence": 3,
                "result": "pass",
                "start_location": {
                    "alias": "NE",
                    "yardline": 18
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 18
                },
                "players": []
            }],
            "quarter": {
                "id": "7c0b12fb-58f6-4b1a-a982-6833c3a3eb58",
                "number": 3,
                "sequence": 3
            }
        }, {
            "type": "play",
            "id": "fc3da620-8a0d-11ed-9308-3ba3ec8cbdcb",
            "sequence": 1672602814501.0,
            "clock": "11:22",
            "home_points": 7,
            "away_points": 7,
            "play_type": "rush",
            "wall_clock": "2023-01-01T19:53:46+00:00",
            "description": "R.Mostert rushed up the middle to NE 15 for 3 yards. Tackled by D.Wise, R.McMillan at NE 15.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T19:53:34+00:00",
            "updated_at": "2023-01-01T20:43:46+00:00",
            "start_situation": {
                "clock": "11:22",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 18
                }
            },
            "end_situation": {
                "clock": "10:44",
                "down": 2,
                "yfd": 7,
                "possession": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 15
                }
            },
            "statistics": [{
                "stat_type": "rush",
                "attempt": 1,
                "yards": 3,
                "firstdown": 0,
                "inside_20": 1,
                "goaltogo": 0,
                "broken_tackles": 0,
                "kneel_down": 0,
                "scramble": 0,
                "player": {
                    "id": "b040e601-ec40-4757-bf3d-71bf64ef99cf",
                    "name": "Raheem Mostert",
                    "jersey": "31",
                    "position": "RB",
                    "sr_id": "sr:player:855634"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
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
                    "id": "8aad56a2-0589-4ebc-99f8-b07c5023fd70",
                    "name": "Raekwon McMillan",
                    "jersey": "50",
                    "position": "LB",
                    "sr_id": "sr:player:1129753"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
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
                    "id": "2516f9e7-9927-409d-adbe-b32d680ae71d",
                    "name": "Deatrich Wise Jr.",
                    "jersey": "91",
                    "position": "DL",
                    "sr_id": "sr:player:1130123"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }],
            "details": [{
                "category": "rush",
                "description": "R.Mostert rushed up the middle to NE 15 for 3 yards.",
                "sequence": 0,
                "direction": "up the middle",
                "yards": 3,
                "result": "tackled",
                "start_location": {
                    "alias": "NE",
                    "yardline": 18
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 15
                },
                "players": [{
                    "id": "b040e601-ec40-4757-bf3d-71bf64ef99cf",
                    "name": "Raheem Mostert",
                    "jersey": "31",
                    "position": "RB",
                    "sr_id": "sr:player:855634",
                    "role": "rush"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by D.Wise, R.McMillan at NE 15.",
                "sequence": 1,
                "start_location": {
                    "alias": "NE",
                    "yardline": 15
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 15
                },
                "players": [{
                    "id": "2516f9e7-9927-409d-adbe-b32d680ae71d",
                    "name": "Deatrich Wise Jr.",
                    "jersey": "91",
                    "position": "DL",
                    "sr_id": "sr:player:1130123",
                    "role": "tackle"
                }, {
                    "id": "8aad56a2-0589-4ebc-99f8-b07c5023fd70",
                    "name": "Raekwon McMillan",
                    "jersey": "50",
                    "position": "LB",
                    "sr_id": "sr:player:1129753",
                    "role": "ast_tackle"
                }]
            }],
            "quarter": {
                "id": "7c0b12fb-58f6-4b1a-a982-6833c3a3eb58",
                "number": 3,
                "sequence": 3
            }
        }, {
            "type": "play",
            "id": "1881fa20-8a0e-11ed-9308-3ba3ec8cbdcb",
            "sequence": 1672602900491.0,
            "clock": "10:44",
            "home_points": 7,
            "away_points": 7,
            "play_type": "rush",
            "wall_clock": "2023-01-01T19:55:07+00:00",
            "description": "J.Wilson rushed right end to NE 6 for 9 yards. Tackled by J.Jones, C.Barmore at NE 6.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T19:55:00+00:00",
            "updated_at": "2023-01-01T20:43:46+00:00",
            "start_situation": {
                "clock": "10:44",
                "down": 2,
                "yfd": 7,
                "possession": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 15
                }
            },
            "end_situation": {
                "clock": "9:56",
                "down": 1,
                "yfd": 6,
                "possession": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
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
                    "id": "72cf3127-3953-4fd8-8049-3de1b6fa9825",
                    "name": "Jeff Wilson Jr.",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1477812"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
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
                    "id": "39017237-0575-4984-b784-954a79c2bba2",
                    "name": "Christian Barmore",
                    "jersey": "90",
                    "position": "DL",
                    "sr_id": "sr:player:2197758"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
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
                    "id": "537c88d4-c403-43f4-94a1-fdccea0ee24a",
                    "name": "Jonathan Jones",
                    "jersey": "31",
                    "position": "DB",
                    "sr_id": "sr:player:989241"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }, {
                "stat_type": "first_down",
                "category": "rush",
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }],
            "details": [{
                "category": "rush",
                "description": "J.Wilson rushed right end to NE 6 for 9 yards.",
                "sequence": 0,
                "direction": "right end",
                "yards": 9,
                "result": "tackled",
                "start_location": {
                    "alias": "NE",
                    "yardline": 15
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 6
                },
                "players": [{
                    "id": "72cf3127-3953-4fd8-8049-3de1b6fa9825",
                    "name": "Jeff Wilson Jr.",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1477812",
                    "role": "rush"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by J.Jones, C.Barmore at NE 6.",
                "sequence": 1,
                "start_location": {
                    "alias": "NE",
                    "yardline": 6
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 6
                },
                "players": [{
                    "id": "537c88d4-c403-43f4-94a1-fdccea0ee24a",
                    "name": "Jonathan Jones",
                    "jersey": "31",
                    "position": "DB",
                    "sr_id": "sr:player:989241",
                    "role": "tackle"
                }, {
                    "id": "39017237-0575-4984-b784-954a79c2bba2",
                    "name": "Christian Barmore",
                    "jersey": "90",
                    "position": "DL",
                    "sr_id": "sr:player:2197758",
                    "role": "ast_tackle"
                }]
            }, {
                "category": "first_down",
                "sequence": 2,
                "result": "rush",
                "start_location": {
                    "alias": "NE",
                    "yardline": 6
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 6
                },
                "players": []
            }],
            "quarter": {
                "id": "7c0b12fb-58f6-4b1a-a982-6833c3a3eb58",
                "number": 3,
                "sequence": 3
            }
        }, {
            "type": "play",
            "id": "387bb500-8a0e-11ed-9308-3ba3ec8cbdcb",
            "sequence": 1672602946514.0,
            "clock": "9:56",
            "home_points": 7,
            "away_points": 7,
            "play_type": "rush",
            "goaltogo": true,
            "wall_clock": "2023-01-01T19:55:57+00:00",
            "description": "R.Mostert rushed left guard to NE 2 for 4 yards. Tackled by J.Tavai at NE 2.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T19:55:46+00:00",
            "updated_at": "2023-01-01T20:43:46+00:00",
            "start_situation": {
                "clock": "9:56",
                "down": 1,
                "yfd": 6,
                "possession": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 6
                }
            },
            "end_situation": {
                "clock": "9:21",
                "down": 2,
                "yfd": 2,
                "possession": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 2
                }
            },
            "statistics": [{
                "stat_type": "rush",
                "attempt": 1,
                "yards": 4,
                "firstdown": 0,
                "inside_20": 1,
                "goaltogo": 1,
                "broken_tackles": 0,
                "kneel_down": 0,
                "scramble": 0,
                "player": {
                    "id": "b040e601-ec40-4757-bf3d-71bf64ef99cf",
                    "name": "Raheem Mostert",
                    "jersey": "31",
                    "position": "RB",
                    "sr_id": "sr:player:855634"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
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
                    "id": "dfb05fbc-7329-4893-8dc1-3d30033e49d0",
                    "name": "Jahlani Tavai",
                    "jersey": "48",
                    "position": "MLB",
                    "sr_id": "sr:player:1184342"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }],
            "details": [{
                "category": "rush",
                "description": "R.Mostert rushed left guard to NE 2 for 4 yards.",
                "sequence": 0,
                "direction": "left guard",
                "yards": 4,
                "result": "tackled",
                "start_location": {
                    "alias": "NE",
                    "yardline": 6
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 2
                },
                "players": [{
                    "id": "b040e601-ec40-4757-bf3d-71bf64ef99cf",
                    "name": "Raheem Mostert",
                    "jersey": "31",
                    "position": "RB",
                    "sr_id": "sr:player:855634",
                    "role": "rush"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by J.Tavai at NE 2.",
                "sequence": 1,
                "start_location": {
                    "alias": "NE",
                    "yardline": 2
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 2
                },
                "players": [{
                    "id": "dfb05fbc-7329-4893-8dc1-3d30033e49d0",
                    "name": "Jahlani Tavai",
                    "jersey": "48",
                    "position": "MLB",
                    "sr_id": "sr:player:1184342",
                    "role": "tackle"
                }]
            }],
            "quarter": {
                "id": "7c0b12fb-58f6-4b1a-a982-6833c3a3eb58",
                "number": 3,
                "sequence": 3
            }
        }, {
            "type": "play",
            "id": "5359e950-8a0e-11ed-9308-3ba3ec8cbdcb",
            "sequence": 1672603022689.0,
            "clock": "9:21",
            "home_points": 7,
            "away_points": 13,
            "play_type": "pass",
            "scoring_play": true,
            "goaltogo": true,
            "wall_clock": "2023-01-01T19:56:29+00:00",
            "description": "T.Bridgewater pass short middle complete to NE End Zone. Catch made by R.Mostert at NE End Zone. Gain of 2 yards. R.Mostert for 2 yards, TOUCHDOWN.",
            "scoring_description": "T.Bridgewater pass short middle complete to NE End Zone. Catch made by R.Mostert at NE End Zone. Gain of 2 yards. R.Mostert for 2 yards, TOUCHDOWN.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T19:57:02+00:00",
            "updated_at": "2023-01-01T20:43:46+00:00",
            "start_situation": {
                "clock": "9:21",
                "down": 2,
                "yfd": 2,
                "possession": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 2
                }
            },
            "end_situation": {
                "clock": "9:17",
                "down": 0,
                "yfd": 0,
                "possession": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 15
                }
            },
            "score": {
                "sequence": 6,
                "clock": "9:17",
                "points": 7,
                "home_points": 7,
                "away_points": 13,
                "points-after-play": {
                    "id": "80e68680-8a0e-11ed-9308-3ba3ec8cbdcb",
                    "sequence": 1672603027103.0,
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
                    "id": "d4cb52a9-f6b4-42ed-b40b-27bff5f1eea7",
                    "name": "Teddy Bridgewater",
                    "jersey": "05",
                    "position": "QB",
                    "sr_id": "sr:player:831153"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
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
                    "id": "b040e601-ec40-4757-bf3d-71bf64ef99cf",
                    "name": "Raheem Mostert",
                    "jersey": "31",
                    "position": "RB",
                    "sr_id": "sr:player:855634"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
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
                    "id": "39017237-0575-4984-b784-954a79c2bba2",
                    "name": "Christian Barmore",
                    "jersey": "90",
                    "position": "DL",
                    "sr_id": "sr:player:2197758"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }, {
                "stat_type": "first_down",
                "category": "pass",
                "player": {
                    "id": "b040e601-ec40-4757-bf3d-71bf64ef99cf",
                    "name": "Raheem Mostert",
                    "jersey": "31",
                    "position": "RB",
                    "sr_id": "sr:player:855634"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }],
            "details": [{
                "category": "pass_completion",
                "description": "T.Bridgewater pass short middle complete to NE End Zone.",
                "sequence": 0,
                "direction": "short middle",
                "yards": 2,
                "start_location": {
                    "alias": "NE",
                    "yardline": 2
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 0
                },
                "players": [{
                    "id": "d4cb52a9-f6b4-42ed-b40b-27bff5f1eea7",
                    "name": "Teddy Bridgewater",
                    "jersey": "05",
                    "position": "QB",
                    "sr_id": "sr:player:831153",
                    "role": "pass"
                }, {
                    "id": "39017237-0575-4984-b784-954a79c2bba2",
                    "name": "Christian Barmore",
                    "jersey": "90",
                    "position": "DL",
                    "sr_id": "sr:player:2197758",
                    "role": "hit"
                }]
            }, {
                "category": "pass_reception",
                "description": "Catch made by R.Mostert at NE End Zone. Gain of 2 yards.",
                "sequence": 1,
                "yards": 2,
                "result": "touchdown",
                "start_location": {
                    "alias": "NE",
                    "yardline": 0
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 0
                },
                "players": [{
                    "id": "b040e601-ec40-4757-bf3d-71bf64ef99cf",
                    "name": "Raheem Mostert",
                    "jersey": "31",
                    "position": "RB",
                    "sr_id": "sr:player:855634",
                    "role": "catch"
                }]
            }, {
                "category": "touchdown",
                "description": "R.Mostert for 2 yards, TOUCHDOWN.",
                "sequence": 2,
                "yards": 2,
                "result": "touchdown",
                "start_location": {
                    "alias": "NE",
                    "yardline": 0
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 0
                },
                "players": [{
                    "id": "b040e601-ec40-4757-bf3d-71bf64ef99cf",
                    "name": "Raheem Mostert",
                    "jersey": "31",
                    "position": "RB",
                    "sr_id": "sr:player:855634",
                    "role": "catch"
                }]
            }],
            "quarter": {
                "id": "7c0b12fb-58f6-4b1a-a982-6833c3a3eb58",
                "number": 3,
                "sequence": 3
            }
        }, {
            "type": "play",
            "id": "80e68680-8a0e-11ed-9308-3ba3ec8cbdcb",
            "sequence": 1672603027103.0,
            "clock": "9:17",
            "home_points": 7,
            "away_points": 14,
            "play_type": "extra_point",
            "scoring_play": true,
            "wall_clock": "2023-01-01T19:57:22+00:00",
            "description": "J.Sanders extra point is good.",
            "scoring_description": "T.Bridgewater pass short middle complete to NE End Zone. Catch made by R.Mostert at NE End Zone. Gain of 2 yards. R.Mostert for 2 yards, TOUCHDOWN.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T19:57:07+00:00",
            "updated_at": "2023-01-01T20:43:46+00:00",
            "start_situation": {
                "clock": "9:17",
                "down": 0,
                "yfd": 0,
                "possession": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 15
                }
            },
            "end_situation": {
                "clock": "9:17",
                "down": 0,
                "yfd": 0,
                "possession": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 35
                }
            },
            "statistics": [{
                "stat_type": "extra_point",
                "attempt": 1,
                "made": 1,
                "player": {
                    "id": "5ffb654f-0de5-424b-aa2f-ad511deb5b51",
                    "name": "Jason Sanders",
                    "jersey": "07",
                    "position": "K",
                    "sr_id": "sr:player:1199416"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }],
            "details": [{
                "category": "extra_point_attempt",
                "description": "J.Sanders extra point is good.",
                "sequence": 0,
                "result": "good",
                "start_location": {
                    "alias": "NE",
                    "yardline": 15
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 15
                },
                "players": [{
                    "id": "5ffb654f-0de5-424b-aa2f-ad511deb5b51",
                    "name": "Jason Sanders",
                    "jersey": "07",
                    "position": "K",
                    "sr_id": "sr:player:1199416",
                    "role": "kick"
                }]
            }],
            "quarter": {
                "id": "7c0b12fb-58f6-4b1a-a982-6833c3a3eb58",
                "number": 3,
                "sequence": 3
            }
        }]
    }, {
        "id": "5a459359-77d8-4c6e-b9d5-731e709c2c72",
        "sequence": 13,
        "start_reason": "Kickoff",
        "end_reason": "Field Goal",
        "play_count": 9,
        "duration": "5:14",
        "first_downs": 2,
        "gain": 56,
        "penalty_yards": -5,
        "scoring_drive": true,
        "quarter": {
            "id": "7c0b12fb-58f6-4b1a-a982-6833c3a3eb58",
            "number": 3,
            "sequence": 3
        },
        "team": {
            "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
            "name": "Patriots",
            "market": "New England",
            "alias": "NE",
            "sr_id": "sr:competitor:4424"
        },
        "plays": [{
            "type": "play",
            "id": "87d3bfd0-8a0e-11ed-9308-3ba3ec8cbdcb",
            "sequence": 1672603240038.0,
            "clock": "9:17",
            "home_points": 7,
            "away_points": 14,
            "play_type": "kickoff",
            "wall_clock": "2023-01-01T20:00:16+00:00",
            "description": "J.Sanders kicks 68 yards from MIA 35 to the NE End Zone. P.Strong returns the kickoff. Tackled by C.Fejedelem at NE 18.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T20:00:40+00:00",
            "updated_at": "2023-01-01T20:43:45+00:00",
            "start_situation": {
                "clock": "9:17",
                "down": 0,
                "yfd": 0,
                "possession": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 35
                }
            },
            "end_situation": {
                "clock": "9:13",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 18
                }
            },
            "statistics": [{
                "stat_type": "kick",
                "attempt": 1,
                "yards": 68,
                "net_yards": 47,
                "inside_20": 1,
                "endzone": 1,
                "onside_attempt": 0,
                "onside_success": 0,
                "squib_kick": 0,
                "player": {
                    "id": "5ffb654f-0de5-424b-aa2f-ad511deb5b51",
                    "name": "Jason Sanders",
                    "jersey": "07",
                    "position": "K",
                    "sr_id": "sr:player:1199416"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }, {
                "stat_type": "return",
                "return": 1,
                "yards": 21,
                "category": "kick_return",
                "player": {
                    "id": "8a9a3c7f-57a1-4064-9bda-2c7fad7b5c01",
                    "name": "Pierre Strong Jr.",
                    "jersey": "35",
                    "position": "RB",
                    "sr_id": "sr:player:1250390"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
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
                    "id": "94001c44-9eea-4d2b-a766-079ddcb2e8b0",
                    "name": "Clayton Fejedelem",
                    "jersey": "42",
                    "position": "SAF",
                    "sr_id": "sr:player:988785"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }],
            "details": [{
                "category": "kick_off",
                "description": "J.Sanders kicks 68 yards from MIA 35 to the NE End Zone.",
                "sequence": 0,
                "yards": 68,
                "result": "returned",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 35
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": -3
                },
                "players": [{
                    "id": "5ffb654f-0de5-424b-aa2f-ad511deb5b51",
                    "name": "Jason Sanders",
                    "jersey": "07",
                    "position": "K",
                    "sr_id": "sr:player:1199416",
                    "role": "kick"
                }]
            }, {
                "category": "kick_off_return",
                "description": "P.Strong returns the kickoff.",
                "sequence": 1,
                "yards": 21,
                "result": "tackled",
                "start_location": {
                    "alias": "NE",
                    "yardline": -3
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 18
                },
                "players": [{
                    "id": "5ffb654f-0de5-424b-aa2f-ad511deb5b51",
                    "name": "Jason Sanders",
                    "jersey": "07",
                    "position": "K",
                    "sr_id": "sr:player:1199416",
                    "role": "kick"
                }, {
                    "id": "8a9a3c7f-57a1-4064-9bda-2c7fad7b5c01",
                    "name": "Pierre Strong Jr.",
                    "jersey": "35",
                    "position": "RB",
                    "sr_id": "sr:player:1250390",
                    "role": "return"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by C.Fejedelem at NE 18.",
                "sequence": 2,
                "start_location": {
                    "alias": "NE",
                    "yardline": 18
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 18
                },
                "players": [{
                    "id": "94001c44-9eea-4d2b-a766-079ddcb2e8b0",
                    "name": "Clayton Fejedelem",
                    "jersey": "42",
                    "position": "SAF",
                    "sr_id": "sr:player:988785",
                    "role": "tackle"
                }]
            }],
            "quarter": {
                "id": "7c0b12fb-58f6-4b1a-a982-6833c3a3eb58",
                "number": 3,
                "sequence": 3
            }
        }, {
            "type": "play",
            "id": "0273cf00-8a0f-11ed-9308-3ba3ec8cbdcb",
            "sequence": 1672603246898.0,
            "clock": "9:13",
            "home_points": 7,
            "away_points": 14,
            "play_type": "rush",
            "wall_clock": "2023-01-01T20:01:01+00:00",
            "description": "D.Harris rushed up the middle to NE 19 for 1 yards. Tackled by E.Roberts; C.Wilkins at NE 19.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T20:00:46+00:00",
            "updated_at": "2023-01-01T20:22:48+00:00",
            "start_situation": {
                "clock": "9:13",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 18
                }
            },
            "end_situation": {
                "clock": "8:32",
                "down": 2,
                "yfd": 9,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 19
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
                    "id": "59482736-ce42-4058-b68e-0f9f66eac2d9",
                    "name": "Damien Harris",
                    "jersey": "37",
                    "position": "RB",
                    "sr_id": "sr:player:1216208"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
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
                    "id": "f6d7cf0f-72d2-473f-a44b-4a253587ca0f",
                    "name": "Elandon Roberts",
                    "jersey": "52",
                    "position": "LB",
                    "sr_id": "sr:player:1074034"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
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
                    "id": "6c640668-de81-49c4-a0da-e367e1747923",
                    "name": "Christian Wilkins",
                    "jersey": "94",
                    "position": "DT",
                    "sr_id": "sr:player:1218538"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }],
            "details": [{
                "category": "rush",
                "description": "D.Harris rushed up the middle to NE 19 for 1 yards.",
                "sequence": 0,
                "direction": "up the middle",
                "yards": 1,
                "result": "tackled",
                "start_location": {
                    "alias": "NE",
                    "yardline": 18
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 19
                },
                "players": [{
                    "id": "59482736-ce42-4058-b68e-0f9f66eac2d9",
                    "name": "Damien Harris",
                    "jersey": "37",
                    "position": "RB",
                    "sr_id": "sr:player:1216208",
                    "role": "rush"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by E.Roberts; C.Wilkins at NE 19.",
                "sequence": 1,
                "start_location": {
                    "alias": "NE",
                    "yardline": 19
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 19
                },
                "players": [{
                    "id": "f6d7cf0f-72d2-473f-a44b-4a253587ca0f",
                    "name": "Elandon Roberts",
                    "jersey": "52",
                    "position": "LB",
                    "sr_id": "sr:player:1074034",
                    "role": "ast_tackle"
                }, {
                    "id": "6c640668-de81-49c4-a0da-e367e1747923",
                    "name": "Christian Wilkins",
                    "jersey": "94",
                    "position": "DT",
                    "sr_id": "sr:player:1218538",
                    "role": "ast_tackle"
                }]
            }],
            "quarter": {
                "id": "7c0b12fb-58f6-4b1a-a982-6833c3a3eb58",
                "number": 3,
                "sequence": 3
            }
        }, {
            "type": "play",
            "id": "107b9330-8a0f-11ed-9308-3ba3ec8cbdcb",
            "sequence": 1672603288488.0,
            "clock": "8:32",
            "home_points": 7,
            "away_points": 14,
            "play_type": "pass",
            "wall_clock": "2023-01-01T20:01:38+00:00",
            "description": "M.Jones pass short right complete to NE 26. Catch made by H.Henry at NE 26. Gain of 11 yards. Tackled by J.Holland at NE 30.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T20:01:28+00:00",
            "updated_at": "2023-01-01T20:37:35+00:00",
            "start_situation": {
                "clock": "8:32",
                "down": 2,
                "yfd": 9,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 19
                }
            },
            "end_situation": {
                "clock": "7:52",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 30
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 1,
                "yards": 11,
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
                    "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                    "name": "Mac Jones",
                    "jersey": "10",
                    "position": "QB",
                    "sr_id": "sr:player:1235378"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }, {
                "stat_type": "receive",
                "firstdown": 1,
                "target": 1,
                "reception": 1,
                "yards": 11,
                "yards_after_catch": 4,
                "inside_20": 0,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "705899da-3c20-4bc3-b5d0-2e6e40655131",
                    "name": "Hunter Henry",
                    "jersey": "85",
                    "position": "TE",
                    "sr_id": "sr:player:987633"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
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
                    "id": "30915dd4-f19f-48cd-8425-f2cf29246b66",
                    "name": "Jevon Holland",
                    "jersey": "08",
                    "position": "SAF",
                    "sr_id": "sr:player:2197804"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }, {
                "stat_type": "first_down",
                "category": "pass",
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }],
            "details": [{
                "category": "pass_completion",
                "description": "M.Jones pass short right complete to NE 26.",
                "sequence": 0,
                "direction": "short right",
                "yards": 11,
                "start_location": {
                    "alias": "NE",
                    "yardline": 19
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 26
                },
                "players": [{
                    "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                    "name": "Mac Jones",
                    "jersey": "10",
                    "position": "QB",
                    "sr_id": "sr:player:1235378",
                    "role": "pass"
                }]
            }, {
                "category": "pass_reception",
                "description": "Catch made by H.Henry at NE 26. Gain of 11 yards.",
                "sequence": 1,
                "yards": 11,
                "result": "tackled",
                "start_location": {
                    "alias": "NE",
                    "yardline": 26
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 30
                },
                "players": [{
                    "id": "705899da-3c20-4bc3-b5d0-2e6e40655131",
                    "name": "Hunter Henry",
                    "jersey": "85",
                    "position": "TE",
                    "sr_id": "sr:player:987633",
                    "role": "catch"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by J.Holland at NE 30.",
                "sequence": 2,
                "start_location": {
                    "alias": "NE",
                    "yardline": 30
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 30
                },
                "players": [{
                    "id": "30915dd4-f19f-48cd-8425-f2cf29246b66",
                    "name": "Jevon Holland",
                    "jersey": "08",
                    "position": "SAF",
                    "sr_id": "sr:player:2197804",
                    "role": "tackle"
                }]
            }, {
                "category": "first_down",
                "sequence": 3,
                "result": "pass",
                "start_location": {
                    "alias": "NE",
                    "yardline": 30
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 30
                },
                "players": []
            }],
            "quarter": {
                "id": "7c0b12fb-58f6-4b1a-a982-6833c3a3eb58",
                "number": 3,
                "sequence": 3
            }
        }, {
            "type": "play",
            "id": "28da4890-8a0f-11ed-9308-3ba3ec8cbdcb",
            "sequence": 1672603329500.0,
            "clock": "7:52",
            "home_points": 7,
            "away_points": 14,
            "play_type": "rush",
            "wall_clock": "2023-01-01T20:02:25+00:00",
            "description": "D.Harris rushed up the middle to NE 30 for 0 yards. Tackled by M.Ingram, E.Roberts at NE 30.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T20:02:09+00:00",
            "updated_at": "2023-01-01T20:35:50+00:00",
            "start_situation": {
                "clock": "7:52",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 30
                }
            },
            "end_situation": {
                "clock": "7:19",
                "down": 2,
                "yfd": 10,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 30
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
                    "id": "59482736-ce42-4058-b68e-0f9f66eac2d9",
                    "name": "Damien Harris",
                    "jersey": "37",
                    "position": "RB",
                    "sr_id": "sr:player:1216208"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
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
                    "id": "2cae991f-878e-434e-9f76-fad263fad23c",
                    "name": "Melvin Ingram",
                    "jersey": "06",
                    "position": "LB",
                    "sr_id": "sr:player:830097"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
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
                    "id": "f6d7cf0f-72d2-473f-a44b-4a253587ca0f",
                    "name": "Elandon Roberts",
                    "jersey": "52",
                    "position": "LB",
                    "sr_id": "sr:player:1074034"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }],
            "details": [{
                "category": "rush",
                "description": "D.Harris rushed up the middle to NE 30 for 0 yards.",
                "sequence": 0,
                "direction": "up the middle",
                "yards": 0,
                "result": "tackled",
                "start_location": {
                    "alias": "NE",
                    "yardline": 30
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 30
                },
                "players": [{
                    "id": "59482736-ce42-4058-b68e-0f9f66eac2d9",
                    "name": "Damien Harris",
                    "jersey": "37",
                    "position": "RB",
                    "sr_id": "sr:player:1216208",
                    "role": "rush"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by M.Ingram, E.Roberts at NE 30.",
                "sequence": 1,
                "start_location": {
                    "alias": "NE",
                    "yardline": 30
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 30
                },
                "players": [{
                    "id": "f6d7cf0f-72d2-473f-a44b-4a253587ca0f",
                    "name": "Elandon Roberts",
                    "jersey": "52",
                    "position": "LB",
                    "sr_id": "sr:player:1074034",
                    "role": "ast_tackle"
                }, {
                    "id": "2cae991f-878e-434e-9f76-fad263fad23c",
                    "name": "Melvin Ingram",
                    "jersey": "06",
                    "position": "LB",
                    "sr_id": "sr:player:830097",
                    "role": "tackle"
                }]
            }],
            "quarter": {
                "id": "7c0b12fb-58f6-4b1a-a982-6833c3a3eb58",
                "number": 3,
                "sequence": 3
            }
        }, {
            "type": "play",
            "id": "3788ad00-8a0f-11ed-9308-3ba3ec8cbdcb",
            "sequence": 1672603367542.0,
            "clock": "7:19",
            "home_points": 7,
            "away_points": 14,
            "play_type": "pass",
            "wall_clock": "2023-01-01T20:02:53+00:00",
            "description": "M.Jones pass short right complete to NE 35. Catch made by J.Meyers at NE 35. Gain of 5 yards. Tackled by J.Baker at NE 35.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T20:02:47+00:00",
            "updated_at": "2023-01-01T20:20:25+00:00",
            "start_situation": {
                "clock": "7:19",
                "down": 2,
                "yfd": 10,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 30
                }
            },
            "end_situation": {
                "clock": "6:42",
                "down": 3,
                "yfd": 5,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 35
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
                    "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                    "name": "Mac Jones",
                    "jersey": "10",
                    "position": "QB",
                    "sr_id": "sr:player:1235378"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
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
                    "id": "73e194d1-a4b7-4de4-b1c2-3c24ef502918",
                    "name": "Jakobi Meyers",
                    "jersey": "16",
                    "position": "WR",
                    "sr_id": "sr:player:1209970"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
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
                    "id": "53e7c80e-8bf9-4ab2-ab3e-80cb556ea784",
                    "name": "Jerome Baker",
                    "jersey": "55",
                    "position": "LB",
                    "sr_id": "sr:player:1217510"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }],
            "details": [{
                "category": "pass_completion",
                "description": "M.Jones pass short right complete to NE 35.",
                "sequence": 0,
                "direction": "short right",
                "yards": 5,
                "start_location": {
                    "alias": "NE",
                    "yardline": 30
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 35
                },
                "players": [{
                    "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                    "name": "Mac Jones",
                    "jersey": "10",
                    "position": "QB",
                    "sr_id": "sr:player:1235378",
                    "role": "pass"
                }]
            }, {
                "category": "pass_reception",
                "description": "Catch made by J.Meyers at NE 35. Gain of 5 yards.",
                "sequence": 1,
                "yards": 5,
                "result": "tackled",
                "start_location": {
                    "alias": "NE",
                    "yardline": 35
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 35
                },
                "players": [{
                    "id": "73e194d1-a4b7-4de4-b1c2-3c24ef502918",
                    "name": "Jakobi Meyers",
                    "jersey": "16",
                    "position": "WR",
                    "sr_id": "sr:player:1209970",
                    "role": "catch"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by J.Baker at NE 35.",
                "sequence": 2,
                "start_location": {
                    "alias": "NE",
                    "yardline": 35
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 35
                },
                "players": [{
                    "id": "53e7c80e-8bf9-4ab2-ab3e-80cb556ea784",
                    "name": "Jerome Baker",
                    "jersey": "55",
                    "position": "LB",
                    "sr_id": "sr:player:1217510",
                    "role": "tackle"
                }]
            }],
            "quarter": {
                "id": "7c0b12fb-58f6-4b1a-a982-6833c3a3eb58",
                "number": 3,
                "sequence": 3
            }
        }, {
            "type": "play",
            "id": "4e4460c0-8a0f-11ed-9308-3ba3ec8cbdcb",
            "sequence": 1672603403794.0,
            "clock": "6:42",
            "home_points": 7,
            "away_points": 14,
            "play_type": "pass",
            "wall_clock": "2023-01-01T20:03:30+00:00",
            "description": "M.Jones pass deep left complete to MIA 38. Catch made by T.Thornton at MIA 38. Gain of 29 yards. Tackled by J.Holland at MIA 36.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T20:03:23+00:00",
            "updated_at": "2023-01-01T20:06:36+00:00",
            "start_situation": {
                "clock": "6:42",
                "down": 3,
                "yfd": 5,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 35
                }
            },
            "end_situation": {
                "clock": "5:54",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 36
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 1,
                "yards": 29,
                "att_yards": 27,
                "firstdown": 1,
                "inside_20": 0,
                "goaltogo": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "on_target_throw": 0,
                "batted_pass": 0,
                "player": {
                    "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                    "name": "Mac Jones",
                    "jersey": "10",
                    "position": "QB",
                    "sr_id": "sr:player:1235378"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }, {
                "stat_type": "receive",
                "firstdown": 1,
                "target": 1,
                "reception": 1,
                "yards": 29,
                "yards_after_catch": 2,
                "inside_20": 0,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "74cda487-2026-42e0-ae32-77f3502cfb11",
                    "name": "Tyquan Thornton",
                    "jersey": "11",
                    "position": "WR",
                    "sr_id": "sr:player:1435193"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
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
                    "id": "30915dd4-f19f-48cd-8425-f2cf29246b66",
                    "name": "Jevon Holland",
                    "jersey": "08",
                    "position": "SAF",
                    "sr_id": "sr:player:2197804"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }, {
                "stat_type": "down_conversion",
                "down": 3,
                "attempt": 1,
                "complete": 1,
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }, {
                "stat_type": "first_down",
                "category": "pass",
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }],
            "details": [{
                "category": "pass_completion",
                "description": "M.Jones pass deep left complete to MIA 38.",
                "sequence": 0,
                "direction": "deep left",
                "yards": 29,
                "start_location": {
                    "alias": "NE",
                    "yardline": 35
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 38
                },
                "players": [{
                    "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                    "name": "Mac Jones",
                    "jersey": "10",
                    "position": "QB",
                    "sr_id": "sr:player:1235378",
                    "role": "pass"
                }]
            }, {
                "category": "pass_reception",
                "description": "Catch made by T.Thornton at MIA 38. Gain of 29 yards.",
                "sequence": 1,
                "yards": 29,
                "result": "tackled",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 38
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 36
                },
                "players": [{
                    "id": "74cda487-2026-42e0-ae32-77f3502cfb11",
                    "name": "Tyquan Thornton",
                    "jersey": "11",
                    "position": "WR",
                    "sr_id": "sr:player:1435193",
                    "role": "catch"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by J.Holland at MIA 36.",
                "sequence": 2,
                "start_location": {
                    "alias": "MIA",
                    "yardline": 36
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 36
                },
                "players": [{
                    "id": "30915dd4-f19f-48cd-8425-f2cf29246b66",
                    "name": "Jevon Holland",
                    "jersey": "08",
                    "position": "SAF",
                    "sr_id": "sr:player:2197804",
                    "role": "tackle"
                }]
            }, {
                "category": "first_down",
                "sequence": 3,
                "result": "pass",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 36
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 36
                },
                "players": []
            }, {
                "category": "third_down_conversion",
                "sequence": 4,
                "result": "good",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 36
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 36
                },
                "players": []
            }],
            "quarter": {
                "id": "7c0b12fb-58f6-4b1a-a982-6833c3a3eb58",
                "number": 3,
                "sequence": 3
            }
        }, {
            "type": "play",
            "id": "64234910-8a0f-11ed-9308-3ba3ec8cbdcb",
            "sequence": 1672603448036.0,
            "clock": "5:54",
            "home_points": 7,
            "away_points": 14,
            "play_type": "pass",
            "wall_clock": "2023-01-01T20:04:18+00:00",
            "description": "M.Jones steps back to pass. M.Jones pass incomplete deep right intended for T.Thornton.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T20:04:08+00:00",
            "updated_at": "2023-01-01T20:07:08+00:00",
            "start_situation": {
                "clock": "5:54",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 36
                }
            },
            "end_situation": {
                "clock": "5:49",
                "down": 2,
                "yfd": 10,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 36
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
                    "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                    "name": "Mac Jones",
                    "jersey": "10",
                    "position": "QB",
                    "sr_id": "sr:player:1235378"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }, {
                "stat_type": "receive",
                "firstdown": 0,
                "target": 1,
                "inside_20": 0,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "74cda487-2026-42e0-ae32-77f3502cfb11",
                    "name": "Tyquan Thornton",
                    "jersey": "11",
                    "position": "WR",
                    "sr_id": "sr:player:1435193"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }],
            "details": [{
                "category": "pass",
                "description": "M.Jones steps back to pass.",
                "sequence": 0,
                "start_location": {
                    "alias": "MIA",
                    "yardline": 36
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 5
                },
                "players": [{
                    "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                    "name": "Mac Jones",
                    "jersey": "10",
                    "position": "QB",
                    "sr_id": "sr:player:1235378",
                    "role": "pass"
                }]
            }, {
                "category": "pass_incompletion",
                "description": "M.Jones pass incomplete deep right intended for T.Thornton.",
                "sequence": 1,
                "direction": "deep right",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 5
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 5
                },
                "players": [{
                    "id": "74cda487-2026-42e0-ae32-77f3502cfb11",
                    "name": "Tyquan Thornton",
                    "jersey": "11",
                    "position": "WR",
                    "sr_id": "sr:player:1435193",
                    "role": "receive"
                }, {
                    "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                    "name": "Mac Jones",
                    "jersey": "10",
                    "position": "QB",
                    "sr_id": "sr:player:1235378",
                    "role": "pass"
                }]
            }],
            "quarter": {
                "id": "7c0b12fb-58f6-4b1a-a982-6833c3a3eb58",
                "number": 3,
                "sequence": 3
            }
        }, {
            "type": "play",
            "id": "7e29bb00-8a0f-11ed-9308-3ba3ec8cbdcb",
            "sequence": 1672603487435.0,
            "clock": "5:49",
            "home_points": 7,
            "away_points": 14,
            "play_type": "pass",
            "wall_clock": "2023-01-01T20:04:58+00:00",
            "description": "M.Jones pass short right complete to MIA 39. Catch made by R.Stevenson at MIA 39. Gain of 4 yards. Tackled by J.Phillips at MIA 32.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T20:04:47+00:00",
            "updated_at": "2023-01-01T20:10:31+00:00",
            "start_situation": {
                "clock": "5:49",
                "down": 2,
                "yfd": 10,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 36
                }
            },
            "end_situation": {
                "clock": "5:15",
                "down": 3,
                "yfd": 7,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 32
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 1,
                "yards": 4,
                "att_yards": -3,
                "firstdown": 0,
                "inside_20": 0,
                "goaltogo": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "on_target_throw": 0,
                "batted_pass": 0,
                "player": {
                    "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                    "name": "Mac Jones",
                    "jersey": "10",
                    "position": "QB",
                    "sr_id": "sr:player:1235378"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }, {
                "stat_type": "receive",
                "firstdown": 0,
                "target": 1,
                "reception": 1,
                "yards": 4,
                "yards_after_catch": 7,
                "inside_20": 0,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "6260e78a-64e2-4f7e-9bf8-39948a17a370",
                    "name": "Rhamondre Stevenson",
                    "jersey": "38",
                    "position": "RB",
                    "sr_id": "sr:player:1693603"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
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
                    "id": "2e0122de-812b-44fa-8bf9-084695be95e3",
                    "name": "Jaelan Phillips",
                    "jersey": "15",
                    "position": "LB",
                    "sr_id": "sr:player:2198134"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }],
            "details": [{
                "category": "pass_completion",
                "description": "M.Jones pass short right complete to MIA 39.",
                "sequence": 0,
                "direction": "short right",
                "yards": 4,
                "start_location": {
                    "alias": "MIA",
                    "yardline": 36
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 39
                },
                "players": [{
                    "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                    "name": "Mac Jones",
                    "jersey": "10",
                    "position": "QB",
                    "sr_id": "sr:player:1235378",
                    "role": "pass"
                }]
            }, {
                "category": "pass_reception",
                "description": "Catch made by R.Stevenson at MIA 39. Gain of 4 yards.",
                "sequence": 1,
                "yards": 4,
                "result": "tackled",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 39
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 32
                },
                "players": [{
                    "id": "6260e78a-64e2-4f7e-9bf8-39948a17a370",
                    "name": "Rhamondre Stevenson",
                    "jersey": "38",
                    "position": "RB",
                    "sr_id": "sr:player:1693603",
                    "role": "catch"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by J.Phillips at MIA 32.",
                "sequence": 2,
                "start_location": {
                    "alias": "MIA",
                    "yardline": 32
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 32
                },
                "players": [{
                    "id": "2e0122de-812b-44fa-8bf9-084695be95e3",
                    "name": "Jaelan Phillips",
                    "jersey": "15",
                    "position": "LB",
                    "sr_id": "sr:player:2198134",
                    "role": "tackle"
                }]
            }],
            "quarter": {
                "id": "7c0b12fb-58f6-4b1a-a982-6833c3a3eb58",
                "number": 3,
                "sequence": 3
            }
        }, {
            "type": "play",
            "id": "95cbfe30-8a0f-11ed-9308-3ba3ec8cbdcb",
            "sequence": 1672603544780.0,
            "clock": "5:15",
            "home_points": 7,
            "away_points": 14,
            "play_type": "penalty",
            "wall_clock": "2023-01-01T20:05:50+00:00",
            "description": "PENALTY on NE-K.Bourne, False Start, 5 yards, accepted. No Play.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T20:05:44+00:00",
            "updated_at": "2023-01-01T20:09:51+00:00",
            "start_situation": {
                "clock": "5:15",
                "down": 3,
                "yfd": 7,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 32
                }
            },
            "end_situation": {
                "clock": "4:54",
                "down": 3,
                "yfd": 12,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 37
                }
            },
            "statistics": [{
                "stat_type": "penalty",
                "penalty": 1,
                "yards": 5,
                "player": {
                    "id": "5aba3610-ab55-4922-ac46-806ded5eb8bf",
                    "name": "Kendrick Bourne",
                    "jersey": "84",
                    "position": "WR",
                    "sr_id": "sr:player:1132251"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }],
            "details": [{
                "category": "penalty",
                "description": "PENALTY on NE-K.Bourne, False Start, 5 yards, accepted.",
                "sequence": 0,
                "start_location": {
                    "alias": "MIA",
                    "yardline": 32
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 37
                },
                "penalty": {
                    "description": "False Start",
                    "result": "accepted",
                    "yards": 5,
                    "team": {
                        "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                        "name": "Patriots",
                        "market": "New England",
                        "alias": "NE",
                        "sr_id": "sr:competitor:4424"
                    }
                },
                "players": [{
                    "id": "5aba3610-ab55-4922-ac46-806ded5eb8bf",
                    "name": "Kendrick Bourne",
                    "jersey": "84",
                    "position": "WR",
                    "sr_id": "sr:player:1132251",
                    "role": "penalty"
                }]
            }, {
                "category": "no_play",
                "description": "No Play.",
                "sequence": 1,
                "start_location": {
                    "alias": "MIA",
                    "yardline": 37
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 37
                },
                "players": []
            }],
            "quarter": {
                "id": "7c0b12fb-58f6-4b1a-a982-6833c3a3eb58",
                "number": 3,
                "sequence": 3
            }
        }, {
            "type": "play",
            "id": "b7f2d240-8a0f-11ed-9308-3ba3ec8cbdcb",
            "sequence": 1672603565082.0,
            "clock": "4:54",
            "home_points": 7,
            "away_points": 14,
            "play_type": "pass",
            "wall_clock": "2023-01-01T20:06:14+00:00",
            "description": "M.Jones pass complete to MIA 31. Catch made by H.Henry at MIA 31. Gain of 6 yards. Tackled by J.Holland, E.Rowe at MIA 31.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T20:06:05+00:00",
            "updated_at": "2023-01-01T20:37:02+00:00",
            "start_situation": {
                "clock": "4:54",
                "down": 3,
                "yfd": 12,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 37
                }
            },
            "end_situation": {
                "clock": "4:07",
                "down": 4,
                "yfd": 5,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 31
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 1,
                "yards": 6,
                "att_yards": 6,
                "firstdown": 0,
                "inside_20": 0,
                "goaltogo": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "on_target_throw": 0,
                "batted_pass": 0,
                "player": {
                    "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                    "name": "Mac Jones",
                    "jersey": "10",
                    "position": "QB",
                    "sr_id": "sr:player:1235378"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }, {
                "stat_type": "receive",
                "firstdown": 0,
                "target": 1,
                "reception": 1,
                "yards": 6,
                "yards_after_catch": 0,
                "inside_20": 0,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "705899da-3c20-4bc3-b5d0-2e6e40655131",
                    "name": "Hunter Henry",
                    "jersey": "85",
                    "position": "TE",
                    "sr_id": "sr:player:987633"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
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
                    "id": "30b045f1-b8e4-4ae9-b062-5181847b508c",
                    "name": "Eric Rowe",
                    "jersey": "21",
                    "position": "SAF",
                    "sr_id": "sr:player:834669"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
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
                    "id": "30915dd4-f19f-48cd-8425-f2cf29246b66",
                    "name": "Jevon Holland",
                    "jersey": "08",
                    "position": "SAF",
                    "sr_id": "sr:player:2197804"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }, {
                "stat_type": "down_conversion",
                "down": 3,
                "attempt": 1,
                "complete": 0,
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }],
            "details": [{
                "category": "pass_completion",
                "description": "M.Jones pass complete to MIA 31.",
                "sequence": 0,
                "yards": 6,
                "start_location": {
                    "alias": "MIA",
                    "yardline": 37
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 31
                },
                "players": [{
                    "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                    "name": "Mac Jones",
                    "jersey": "10",
                    "position": "QB",
                    "sr_id": "sr:player:1235378",
                    "role": "pass"
                }]
            }, {
                "category": "pass_reception",
                "description": "Catch made by H.Henry at MIA 31. Gain of 6 yards.",
                "sequence": 1,
                "yards": 6,
                "result": "tackled",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 31
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 31
                },
                "players": [{
                    "id": "705899da-3c20-4bc3-b5d0-2e6e40655131",
                    "name": "Hunter Henry",
                    "jersey": "85",
                    "position": "TE",
                    "sr_id": "sr:player:987633",
                    "role": "catch"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by J.Holland, E.Rowe at MIA 31.",
                "sequence": 2,
                "start_location": {
                    "alias": "MIA",
                    "yardline": 31
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 31
                },
                "players": [{
                    "id": "30915dd4-f19f-48cd-8425-f2cf29246b66",
                    "name": "Jevon Holland",
                    "jersey": "08",
                    "position": "SAF",
                    "sr_id": "sr:player:2197804",
                    "role": "tackle"
                }, {
                    "id": "30b045f1-b8e4-4ae9-b062-5181847b508c",
                    "name": "Eric Rowe",
                    "jersey": "21",
                    "position": "SAF",
                    "sr_id": "sr:player:834669",
                    "role": "ast_tackle"
                }]
            }, {
                "category": "third_down_conversion",
                "sequence": 3,
                "result": "missed",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 31
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 31
                },
                "players": []
            }],
            "quarter": {
                "id": "7c0b12fb-58f6-4b1a-a982-6833c3a3eb58",
                "number": 3,
                "sequence": 3
            }
        }, {
            "type": "play",
            "id": "c438e940-8a0f-11ed-9308-3ba3ec8cbdcb",
            "sequence": 1672603606103.0,
            "clock": "4:07",
            "home_points": 10,
            "away_points": 14,
            "play_type": "field_goal",
            "scoring_play": true,
            "wall_clock": "2023-01-01T20:06:58+00:00",
            "description": "N.Folk 49 yard field goal attempt is good, Center-J.Cardona, Holder-M.Palardy.",
            "scoring_description": "N.Folk 49 yard field goal attempt is good, Center-J.Cardona, Holder-M.Palardy.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T20:06:46+00:00",
            "updated_at": "2023-01-01T20:06:46+00:00",
            "start_situation": {
                "clock": "4:07",
                "down": 4,
                "yfd": 5,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 31
                }
            },
            "end_situation": {
                "clock": "4:03",
                "down": 0,
                "yfd": 0,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 35
                }
            },
            "score": {
                "sequence": 7,
                "clock": "4:03",
                "points": 3,
                "home_points": 10,
                "away_points": 14
            },
            "statistics": [{
                "stat_type": "field_goal",
                "attempt": 1,
                "att_yards": 49,
                "yards": 49,
                "missed": 0,
                "made": 1,
                "player": {
                    "id": "b37c621e-1125-4c35-bea0-fcabb1527060",
                    "name": "Nick Folk",
                    "jersey": "06",
                    "position": "K",
                    "sr_id": "sr:player:830073"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }],
            "details": [{
                "category": "field_goal",
                "description": "N.Folk 49 yard field goal attempt is good, Center-J.Cardona, Holder-M.Palardy.",
                "sequence": 0,
                "yards": 49,
                "result": "good",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 39
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 39
                },
                "players": [{
                    "id": "b37c621e-1125-4c35-bea0-fcabb1527060",
                    "name": "Nick Folk",
                    "jersey": "06",
                    "position": "K",
                    "sr_id": "sr:player:830073",
                    "role": "kick"
                }, {
                    "id": "5f3cc875-e802-46b2-81ad-3ffb7a3a1662",
                    "name": "Michael Palardy",
                    "jersey": "17",
                    "position": "P",
                    "sr_id": "sr:player:854778",
                    "role": "hold"
                }, {
                    "id": "90517709-322d-47af-9360-77775a93496b",
                    "name": "Joe Cardona",
                    "jersey": "49",
                    "position": "LS",
                    "sr_id": "sr:player:854784",
                    "role": "snap"
                }]
            }],
            "quarter": {
                "id": "7c0b12fb-58f6-4b1a-a982-6833c3a3eb58",
                "number": 3,
                "sequence": 3
            }
        }]
    }, {
        "id": "b7d7bd30-dfbc-4954-a11f-45bcee1861d9",
        "sequence": 14,
        "start_reason": "Kickoff",
        "end_reason": "Interception",
        "play_count": 3,
        "duration": "1:12",
        "first_downs": 0,
        "gain": 0,
        "penalty_yards": -5,
        "quarter": {
            "id": "7c0b12fb-58f6-4b1a-a982-6833c3a3eb58",
            "number": 3,
            "sequence": 3
        },
        "team": {
            "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
            "name": "Dolphins",
            "market": "Miami",
            "alias": "MIA",
            "sr_id": "sr:competitor:4287"
        },
        "plays": [{
            "type": "play",
            "id": "dc44c3b0-8a0f-11ed-9308-3ba3ec8cbdcb",
            "sequence": 1672603706766.0,
            "clock": "4:03",
            "home_points": 10,
            "away_points": 14,
            "play_type": "kickoff",
            "wall_clock": "2023-01-01T20:08:30+00:00",
            "description": "N.Folk kicks 63 yards from NE 35 to the MIA 2. R.Mostert returns the kickoff. Pushed out of bounds by J.Peppers at MIA 29.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T20:08:26+00:00",
            "updated_at": "2023-01-01T20:11:27+00:00",
            "start_situation": {
                "clock": "4:03",
                "down": 0,
                "yfd": 0,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 35
                }
            },
            "end_situation": {
                "clock": "3:56",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 29
                }
            },
            "statistics": [{
                "stat_type": "kick",
                "attempt": 1,
                "yards": 63,
                "net_yards": 36,
                "onside_attempt": 0,
                "onside_success": 0,
                "squib_kick": 0,
                "player": {
                    "id": "b37c621e-1125-4c35-bea0-fcabb1527060",
                    "name": "Nick Folk",
                    "jersey": "06",
                    "position": "K",
                    "sr_id": "sr:player:830073"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }, {
                "stat_type": "return",
                "return": 1,
                "yards": 27,
                "category": "kick_return",
                "player": {
                    "id": "b040e601-ec40-4757-bf3d-71bf64ef99cf",
                    "name": "Raheem Mostert",
                    "jersey": "31",
                    "position": "RB",
                    "sr_id": "sr:player:855634"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
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
                    "id": "45ef2670-2382-434b-8f26-ba13f044236e",
                    "name": "Jabrill Peppers",
                    "jersey": "03",
                    "position": "DB",
                    "sr_id": "sr:player:1129565"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }],
            "details": [{
                "category": "kick_off",
                "description": "N.Folk kicks 63 yards from NE 35 to the MIA 2.",
                "sequence": 0,
                "yards": 63,
                "result": "returned",
                "start_location": {
                    "alias": "NE",
                    "yardline": 35
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 2
                },
                "players": [{
                    "id": "b37c621e-1125-4c35-bea0-fcabb1527060",
                    "name": "Nick Folk",
                    "jersey": "06",
                    "position": "K",
                    "sr_id": "sr:player:830073",
                    "role": "kick"
                }]
            }, {
                "category": "kick_off_return",
                "description": "R.Mostert returns the kickoff.",
                "sequence": 1,
                "yards": 27,
                "result": "pushed out of bounds",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 2
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 29
                },
                "players": [{
                    "id": "b37c621e-1125-4c35-bea0-fcabb1527060",
                    "name": "Nick Folk",
                    "jersey": "06",
                    "position": "K",
                    "sr_id": "sr:player:830073",
                    "role": "kick"
                }, {
                    "id": "b040e601-ec40-4757-bf3d-71bf64ef99cf",
                    "name": "Raheem Mostert",
                    "jersey": "31",
                    "position": "RB",
                    "sr_id": "sr:player:855634",
                    "role": "return"
                }]
            }, {
                "category": "pushed_out_of_bounds",
                "description": "Pushed out of bounds by J.Peppers at MIA 29.",
                "sequence": 2,
                "start_location": {
                    "alias": "MIA",
                    "yardline": 29
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 29
                },
                "players": [{
                    "id": "45ef2670-2382-434b-8f26-ba13f044236e",
                    "name": "Jabrill Peppers",
                    "jersey": "03",
                    "position": "DB",
                    "sr_id": "sr:player:1129565",
                    "role": "tackle"
                }]
            }],
            "quarter": {
                "id": "7c0b12fb-58f6-4b1a-a982-6833c3a3eb58",
                "number": 3,
                "sequence": 3
            }
        }, {
            "type": "play",
            "id": "21a6e910-8a10-11ed-9308-3ba3ec8cbdcb",
            "sequence": 1672603751724.0,
            "clock": "3:56",
            "home_points": 10,
            "away_points": 14,
            "play_type": "pass",
            "wall_clock": "2023-01-01T20:09:20+00:00",
            "description": "T.Bridgewater steps back to pass. T.Bridgewater pass incomplete short left intended for J.Waddle.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T20:09:11+00:00",
            "updated_at": "2023-01-01T20:28:31+00:00",
            "start_situation": {
                "clock": "3:56",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 29
                }
            },
            "end_situation": {
                "clock": "3:51",
                "down": 2,
                "yfd": 10,
                "possession": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 29
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
                    "id": "d4cb52a9-f6b4-42ed-b40b-27bff5f1eea7",
                    "name": "Teddy Bridgewater",
                    "jersey": "05",
                    "position": "QB",
                    "sr_id": "sr:player:831153"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }, {
                "stat_type": "receive",
                "firstdown": 0,
                "target": 1,
                "inside_20": 0,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "0ff9a975-669d-4851-a95d-ab28d9fc29c4",
                    "name": "Jaylen Waddle",
                    "jersey": "17",
                    "position": "WR",
                    "sr_id": "sr:player:2197644"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
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
                    "id": "8738c2cc-4ac6-4288-922d-ce4590d9af42",
                    "name": "Josh Uche",
                    "jersey": "55",
                    "position": "LB",
                    "sr_id": "sr:player:2039965"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }],
            "details": [{
                "category": "pass",
                "description": "T.Bridgewater steps back to pass.",
                "sequence": 0,
                "start_location": {
                    "alias": "MIA",
                    "yardline": 29
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 40
                },
                "players": [{
                    "id": "d4cb52a9-f6b4-42ed-b40b-27bff5f1eea7",
                    "name": "Teddy Bridgewater",
                    "jersey": "05",
                    "position": "QB",
                    "sr_id": "sr:player:831153",
                    "role": "pass"
                }]
            }, {
                "category": "pass_incompletion",
                "description": "T.Bridgewater pass incomplete short left intended for J.Waddle.",
                "sequence": 1,
                "direction": "short left",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 40
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 40
                },
                "players": [{
                    "id": "0ff9a975-669d-4851-a95d-ab28d9fc29c4",
                    "name": "Jaylen Waddle",
                    "jersey": "17",
                    "position": "WR",
                    "sr_id": "sr:player:2197644",
                    "role": "receive"
                }, {
                    "id": "d4cb52a9-f6b4-42ed-b40b-27bff5f1eea7",
                    "name": "Teddy Bridgewater",
                    "jersey": "05",
                    "position": "QB",
                    "sr_id": "sr:player:831153",
                    "role": "pass"
                }, {
                    "id": "8738c2cc-4ac6-4288-922d-ce4590d9af42",
                    "name": "Josh Uche",
                    "jersey": "55",
                    "position": "LB",
                    "sr_id": "sr:player:2039965",
                    "role": "hit"
                }]
            }],
            "quarter": {
                "id": "7c0b12fb-58f6-4b1a-a982-6833c3a3eb58",
                "number": 3,
                "sequence": 3
            }
        }, {
            "type": "play",
            "id": "3a7242f0-8a10-11ed-9308-3ba3ec8cbdcb",
            "sequence": 1672603787511.0,
            "clock": "3:51",
            "home_points": 10,
            "away_points": 14,
            "play_type": "rush",
            "wall_clock": "2023-01-01T20:10:01+00:00",
            "description": "J.Wilson rushed up the middle to MIA 29 for 0 yards. Tackled by C.Barmore at MIA 29.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T20:09:47+00:00",
            "updated_at": "2023-01-01T20:12:40+00:00",
            "start_situation": {
                "clock": "3:51",
                "down": 2,
                "yfd": 10,
                "possession": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 29
                }
            },
            "end_situation": {
                "clock": "3:09",
                "down": 3,
                "yfd": 10,
                "possession": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 29
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
                    "id": "72cf3127-3953-4fd8-8049-3de1b6fa9825",
                    "name": "Jeff Wilson Jr.",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1477812"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
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
                    "id": "39017237-0575-4984-b784-954a79c2bba2",
                    "name": "Christian Barmore",
                    "jersey": "90",
                    "position": "DL",
                    "sr_id": "sr:player:2197758"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }],
            "details": [{
                "category": "rush",
                "description": "J.Wilson rushed up the middle to MIA 29 for 0 yards.",
                "sequence": 0,
                "direction": "up the middle",
                "yards": 0,
                "result": "tackled",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 29
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 29
                },
                "players": [{
                    "id": "72cf3127-3953-4fd8-8049-3de1b6fa9825",
                    "name": "Jeff Wilson Jr.",
                    "jersey": "23",
                    "position": "RB",
                    "sr_id": "sr:player:1477812",
                    "role": "rush"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by C.Barmore at MIA 29.",
                "sequence": 1,
                "start_location": {
                    "alias": "MIA",
                    "yardline": 29
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 29
                },
                "players": [{
                    "id": "39017237-0575-4984-b784-954a79c2bba2",
                    "name": "Christian Barmore",
                    "jersey": "90",
                    "position": "DL",
                    "sr_id": "sr:player:2197758",
                    "role": "tackle"
                }]
            }],
            "quarter": {
                "id": "7c0b12fb-58f6-4b1a-a982-6833c3a3eb58",
                "number": 3,
                "sequence": 3
            }
        }, {
            "type": "play",
            "id": "4879e010-8a10-11ed-9308-3ba3ec8cbdcb",
            "sequence": 1672603838120.0,
            "clock": "3:09",
            "home_points": 10,
            "away_points": 14,
            "play_type": "penalty",
            "wall_clock": "2023-01-01T20:10:46+00:00",
            "description": "PENALTY on MIA-B.Shell, False Start, 5 yards, accepted. No Play.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T20:10:38+00:00",
            "updated_at": "2023-01-01T20:10:38+00:00",
            "start_situation": {
                "clock": "3:09",
                "down": 3,
                "yfd": 10,
                "possession": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 29
                }
            },
            "end_situation": {
                "clock": "3:00",
                "down": 3,
                "yfd": 15,
                "possession": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 24
                }
            },
            "statistics": [{
                "stat_type": "penalty",
                "penalty": 1,
                "yards": 5,
                "player": {
                    "id": "a2b2f929-e3a7-4d19-888f-49600cf718bf",
                    "name": "Brandon Shell",
                    "jersey": "71",
                    "position": "OL",
                    "sr_id": "sr:player:988729"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }],
            "details": [{
                "category": "penalty",
                "description": "PENALTY on MIA-B.Shell, False Start, 5 yards, accepted.",
                "sequence": 0,
                "start_location": {
                    "alias": "MIA",
                    "yardline": 29
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 24
                },
                "penalty": {
                    "description": "False Start",
                    "result": "accepted",
                    "yards": 5,
                    "team": {
                        "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                        "name": "Dolphins",
                        "market": "Miami",
                        "alias": "MIA",
                        "sr_id": "sr:competitor:4287"
                    }
                },
                "players": [{
                    "id": "a2b2f929-e3a7-4d19-888f-49600cf718bf",
                    "name": "Brandon Shell",
                    "jersey": "71",
                    "position": "OL",
                    "sr_id": "sr:player:988729",
                    "role": "penalty"
                }]
            }, {
                "category": "no_play",
                "description": "No Play.",
                "sequence": 1,
                "start_location": {
                    "alias": "MIA",
                    "yardline": 24
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 24
                },
                "players": []
            }],
            "quarter": {
                "id": "7c0b12fb-58f6-4b1a-a982-6833c3a3eb58",
                "number": 3,
                "sequence": 3
            }
        }, {
            "type": "play",
            "id": "66a606e0-8a10-11ed-9308-3ba3ec8cbdcb",
            "sequence": 1672603933176.0,
            "clock": "3:00",
            "home_points": 16,
            "away_points": 14,
            "play_type": "pass",
            "scoring_play": true,
            "wall_clock": "2023-01-01T20:11:32+00:00",
            "description": "T.Bridgewater pass short right INTERCEPTED at MIA 39. Intercepted by K.Dugger at MIA 39. K.Dugger for 39 yards, TOUCHDOWN.",
            "scoring_description": "T.Bridgewater pass short right INTERCEPTED at MIA 39. Intercepted by K.Dugger at MIA 39. K.Dugger for 39 yards, TOUCHDOWN.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T20:12:13+00:00",
            "updated_at": "2023-01-01T20:15:03+00:00",
            "start_situation": {
                "clock": "3:00",
                "down": 3,
                "yfd": 15,
                "possession": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 24
                }
            },
            "end_situation": {
                "clock": "2:51",
                "down": 0,
                "yfd": 0,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 15
                }
            },
            "score": {
                "sequence": 9,
                "clock": "2:51",
                "points": 6,
                "home_points": 16,
                "away_points": 14,
                "points-after-play": {
                    "id": "9fda3120-8a10-11ed-9308-3ba3ec8cbdcb",
                    "sequence": 1672603947235.0,
                    "type": "extra_point"
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "att_yards": 15,
                "interception": 1,
                "firstdown": 0,
                "inside_20": 0,
                "goaltogo": 0,
                "int_touchdown": 1,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "on_target_throw": 0,
                "batted_pass": 0,
                "player": {
                    "id": "d4cb52a9-f6b4-42ed-b40b-27bff5f1eea7",
                    "name": "Teddy Bridgewater",
                    "jersey": "05",
                    "position": "QB",
                    "sr_id": "sr:player:831153"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }, {
                "stat_type": "receive",
                "firstdown": 0,
                "target": 1,
                "inside_20": 0,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "18ccb826-5584-4f6a-8434-cf9a3b927b0f",
                    "name": "Trent Sherfield",
                    "jersey": "14",
                    "position": "WR",
                    "sr_id": "sr:player:1201798"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }, {
                "stat_type": "defense",
                "pass_defended": 1,
                "interception": 1,
                "int_yards": 39,
                "int_touchdown": 1,
                "def_target": 0,
                "def_comp": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "batted_pass": 0,
                "player": {
                    "id": "1d8d5c04-15e7-4346-9d1f-f128e4df3adb",
                    "name": "Kyle Dugger",
                    "jersey": "23",
                    "position": "DB",
                    "sr_id": "sr:player:2040541"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }, {
                "stat_type": "down_conversion",
                "down": 3,
                "attempt": 1,
                "complete": 0,
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }],
            "details": [{
                "category": "pass_interception",
                "description": "T.Bridgewater pass short right INTERCEPTED at MIA 39.",
                "sequence": 0,
                "direction": "short right",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 24
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 39
                },
                "players": [{
                    "id": "d4cb52a9-f6b4-42ed-b40b-27bff5f1eea7",
                    "name": "Teddy Bridgewater",
                    "jersey": "05",
                    "position": "QB",
                    "sr_id": "sr:player:831153",
                    "role": "pass"
                }]
            }, {
                "category": "pass_interception_return",
                "description": "Intercepted by K.Dugger at MIA 39.",
                "sequence": 1,
                "yards": 39,
                "result": "touchdown",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 39
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 0
                },
                "players": [{
                    "id": "1d8d5c04-15e7-4346-9d1f-f128e4df3adb",
                    "name": "Kyle Dugger",
                    "jersey": "23",
                    "position": "DB",
                    "sr_id": "sr:player:2040541",
                    "role": "return"
                }, {
                    "id": "18ccb826-5584-4f6a-8434-cf9a3b927b0f",
                    "name": "Trent Sherfield",
                    "jersey": "14",
                    "position": "WR",
                    "sr_id": "sr:player:1201798",
                    "role": "receive"
                }]
            }, {
                "category": "touchdown",
                "description": "K.Dugger for 39 yards, TOUCHDOWN.",
                "sequence": 2,
                "yards": 39,
                "result": "touchdown",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 0
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 0
                },
                "players": [{
                    "id": "1d8d5c04-15e7-4346-9d1f-f128e4df3adb",
                    "name": "Kyle Dugger",
                    "jersey": "23",
                    "position": "DB",
                    "sr_id": "sr:player:2040541",
                    "role": "return"
                }]
            }, {
                "category": "third_down_conversion",
                "sequence": 3,
                "result": "missed",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 24
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 24
                },
                "players": []
            }],
            "quarter": {
                "id": "7c0b12fb-58f6-4b1a-a982-6833c3a3eb58",
                "number": 3,
                "sequence": 3
            }
        }]
    }, {
        "id": "8868a559-e14e-478d-ac48-4db067f138c0",
        "sequence": 18,
        "start_reason": "Punt",
        "end_reason": "Touchdown",
        "play_count": 11,
        "duration": "5:06",
        "first_downs": 5,
        "gain": 67,
        "penalty_yards": 22,
        "inside_20": true,
        "scoring_drive": true,
        "quarter": {
            "id": "54502be7-4079-4c4e-9b3f-84935363049c",
            "number": 4,
            "sequence": 4
        },
        "team": {
            "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
            "name": "Patriots",
            "market": "New England",
            "alias": "NE",
            "sr_id": "sr:competitor:4424"
        },
        "plays": [{
            "type": "play",
            "id": "f637d7e0-8a13-11ed-9308-3ba3ec8cbdcb",
            "sequence": 1672605419518.0,
            "clock": "9:43",
            "home_points": 16,
            "away_points": 14,
            "play_type": "pass",
            "wall_clock": "2023-01-01T20:37:03+00:00",
            "description": "M.Jones pass short right complete to NE 9. Catch made by K.Bourne at NE 9. Gain of 16 yards. Tackled by C.Wilkins at NE 27.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T20:36:59+00:00",
            "updated_at": "2023-01-01T20:38:54+00:00",
            "start_situation": {
                "clock": "9:43",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 11
                }
            },
            "end_situation": {
                "clock": "9:01",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 27
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 1,
                "yards": 16,
                "att_yards": -2,
                "firstdown": 1,
                "inside_20": 0,
                "goaltogo": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "on_target_throw": 0,
                "batted_pass": 0,
                "player": {
                    "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                    "name": "Mac Jones",
                    "jersey": "10",
                    "position": "QB",
                    "sr_id": "sr:player:1235378"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }, {
                "stat_type": "receive",
                "firstdown": 1,
                "target": 1,
                "reception": 1,
                "yards": 16,
                "yards_after_catch": 18,
                "inside_20": 0,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "5aba3610-ab55-4922-ac46-806ded5eb8bf",
                    "name": "Kendrick Bourne",
                    "jersey": "84",
                    "position": "WR",
                    "sr_id": "sr:player:1132251"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
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
                    "id": "6c640668-de81-49c4-a0da-e367e1747923",
                    "name": "Christian Wilkins",
                    "jersey": "94",
                    "position": "DT",
                    "sr_id": "sr:player:1218538"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }, {
                "stat_type": "first_down",
                "category": "pass",
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }],
            "details": [{
                "category": "pass_completion",
                "description": "M.Jones pass short right complete to NE 9.",
                "sequence": 0,
                "direction": "short right",
                "yards": 16,
                "start_location": {
                    "alias": "NE",
                    "yardline": 11
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 9
                },
                "players": [{
                    "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                    "name": "Mac Jones",
                    "jersey": "10",
                    "position": "QB",
                    "sr_id": "sr:player:1235378",
                    "role": "pass"
                }]
            }, {
                "category": "pass_reception",
                "description": "Catch made by K.Bourne at NE 9. Gain of 16 yards.",
                "sequence": 1,
                "yards": 16,
                "result": "tackled",
                "start_location": {
                    "alias": "NE",
                    "yardline": 9
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 27
                },
                "players": [{
                    "id": "5aba3610-ab55-4922-ac46-806ded5eb8bf",
                    "name": "Kendrick Bourne",
                    "jersey": "84",
                    "position": "WR",
                    "sr_id": "sr:player:1132251",
                    "role": "catch"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by C.Wilkins at NE 27.",
                "sequence": 2,
                "start_location": {
                    "alias": "NE",
                    "yardline": 27
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 27
                },
                "players": [{
                    "id": "6c640668-de81-49c4-a0da-e367e1747923",
                    "name": "Christian Wilkins",
                    "jersey": "94",
                    "position": "DT",
                    "sr_id": "sr:player:1218538",
                    "role": "tackle"
                }]
            }, {
                "category": "first_down",
                "sequence": 3,
                "result": "pass",
                "start_location": {
                    "alias": "NE",
                    "yardline": 27
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 27
                },
                "players": []
            }],
            "quarter": {
                "id": "54502be7-4079-4c4e-9b3f-84935363049c",
                "number": 4,
                "sequence": 4
            }
        }, {
            "type": "play",
            "id": "15deb7d0-8a14-11ed-9308-3ba3ec8cbdcb",
            "sequence": 1672605450299.0,
            "clock": "9:01",
            "home_points": 16,
            "away_points": 14,
            "play_type": "pass",
            "wall_clock": "2023-01-01T20:37:43+00:00",
            "description": "M.Jones steps back to pass. M.Jones pass incomplete short right intended for K.Bourne (C.Wilkins).",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T20:37:30+00:00",
            "updated_at": "2023-01-01T20:42:59+00:00",
            "start_situation": {
                "clock": "9:01",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 27
                }
            },
            "end_situation": {
                "clock": "9:02",
                "down": 2,
                "yfd": 10,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 27
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
                    "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                    "name": "Mac Jones",
                    "jersey": "10",
                    "position": "QB",
                    "sr_id": "sr:player:1235378"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }, {
                "stat_type": "receive",
                "firstdown": 0,
                "target": 1,
                "inside_20": 0,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "5aba3610-ab55-4922-ac46-806ded5eb8bf",
                    "name": "Kendrick Bourne",
                    "jersey": "84",
                    "position": "WR",
                    "sr_id": "sr:player:1132251"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
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
                    "id": "6c640668-de81-49c4-a0da-e367e1747923",
                    "name": "Christian Wilkins",
                    "jersey": "94",
                    "position": "DT",
                    "sr_id": "sr:player:1218538"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }],
            "details": [{
                "category": "pass",
                "description": "M.Jones steps back to pass.",
                "sequence": 0,
                "start_location": {
                    "alias": "NE",
                    "yardline": 27
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 24
                },
                "players": [{
                    "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                    "name": "Mac Jones",
                    "jersey": "10",
                    "position": "QB",
                    "sr_id": "sr:player:1235378",
                    "role": "pass"
                }]
            }, {
                "category": "pass_incompletion",
                "description": "M.Jones pass incomplete short right intended for K.Bourne (C.Wilkins).",
                "sequence": 1,
                "direction": "short right",
                "start_location": {
                    "alias": "NE",
                    "yardline": 24
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 24
                },
                "players": [{
                    "id": "5aba3610-ab55-4922-ac46-806ded5eb8bf",
                    "name": "Kendrick Bourne",
                    "jersey": "84",
                    "position": "WR",
                    "sr_id": "sr:player:1132251",
                    "role": "receive"
                }, {
                    "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                    "name": "Mac Jones",
                    "jersey": "10",
                    "position": "QB",
                    "sr_id": "sr:player:1235378",
                    "role": "pass"
                }, {
                    "id": "6c640668-de81-49c4-a0da-e367e1747923",
                    "name": "Christian Wilkins",
                    "jersey": "94",
                    "position": "DT",
                    "sr_id": "sr:player:1218538",
                    "role": "defend"
                }]
            }],
            "quarter": {
                "id": "54502be7-4079-4c4e-9b3f-84935363049c",
                "number": 4,
                "sequence": 4
            }
        }, {
            "type": "play",
            "id": "27c0a8f0-8a14-11ed-9308-3ba3ec8cbdcb",
            "sequence": 1672605488338.0,
            "clock": "9:02",
            "home_points": 16,
            "away_points": 14,
            "play_type": "pass",
            "wall_clock": "2023-01-01T20:38:20+00:00",
            "description": "M.Jones pass short right complete to NE 21. Catch made by R.Stevenson at NE 21. Gain of 5 yards. Pushed out of bounds by J.Phillips at NE 32.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T20:38:08+00:00",
            "updated_at": "2023-01-01T20:40:13+00:00",
            "start_situation": {
                "clock": "9:02",
                "down": 2,
                "yfd": 10,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 27
                }
            },
            "end_situation": {
                "clock": "8:20",
                "down": 3,
                "yfd": 5,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 32
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 1,
                "yards": 5,
                "att_yards": -6,
                "firstdown": 0,
                "inside_20": 0,
                "goaltogo": 0,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "on_target_throw": 0,
                "batted_pass": 0,
                "player": {
                    "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                    "name": "Mac Jones",
                    "jersey": "10",
                    "position": "QB",
                    "sr_id": "sr:player:1235378"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }, {
                "stat_type": "receive",
                "firstdown": 0,
                "target": 1,
                "reception": 1,
                "yards": 5,
                "yards_after_catch": 11,
                "inside_20": 0,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "6260e78a-64e2-4f7e-9bf8-39948a17a370",
                    "name": "Rhamondre Stevenson",
                    "jersey": "38",
                    "position": "RB",
                    "sr_id": "sr:player:1693603"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
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
                    "id": "2e0122de-812b-44fa-8bf9-084695be95e3",
                    "name": "Jaelan Phillips",
                    "jersey": "15",
                    "position": "LB",
                    "sr_id": "sr:player:2198134"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }],
            "details": [{
                "category": "pass_completion",
                "description": "M.Jones pass short right complete to NE 21.",
                "sequence": 0,
                "direction": "short right",
                "yards": 5,
                "start_location": {
                    "alias": "NE",
                    "yardline": 27
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 21
                },
                "players": [{
                    "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                    "name": "Mac Jones",
                    "jersey": "10",
                    "position": "QB",
                    "sr_id": "sr:player:1235378",
                    "role": "pass"
                }]
            }, {
                "category": "pass_reception",
                "description": "Catch made by R.Stevenson at NE 21. Gain of 5 yards.",
                "sequence": 1,
                "yards": 5,
                "result": "pushed out of bounds",
                "start_location": {
                    "alias": "NE",
                    "yardline": 21
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 32
                },
                "players": [{
                    "id": "6260e78a-64e2-4f7e-9bf8-39948a17a370",
                    "name": "Rhamondre Stevenson",
                    "jersey": "38",
                    "position": "RB",
                    "sr_id": "sr:player:1693603",
                    "role": "catch"
                }]
            }, {
                "category": "pushed_out_of_bounds",
                "description": "Pushed out of bounds by J.Phillips at NE 32.",
                "sequence": 2,
                "start_location": {
                    "alias": "NE",
                    "yardline": 32
                },
                "end_location": {
                    "alias": "NE",
                    "yardline": 32
                },
                "players": [{
                    "id": "2e0122de-812b-44fa-8bf9-084695be95e3",
                    "name": "Jaelan Phillips",
                    "jersey": "15",
                    "position": "LB",
                    "sr_id": "sr:player:2198134",
                    "role": "tackle"
                }]
            }],
            "quarter": {
                "id": "54502be7-4079-4c4e-9b3f-84935363049c",
                "number": 4,
                "sequence": 4
            }
        }, {
            "type": "play",
            "id": "5025ffc0-8a14-11ed-9308-3ba3ec8cbdcb",
            "sequence": 1672605534424.0,
            "clock": "8:20",
            "home_points": 16,
            "away_points": 14,
            "play_type": "pass",
            "wall_clock": "2023-01-01T20:39:02+00:00",
            "description": "M.Jones pass deep right complete to MIA 49. Catch made by J.Meyers at MIA 49. Gain of 25 yards. Pushed out of bounds by J.Holland at MIA 43.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T20:38:54+00:00",
            "updated_at": "2023-01-01T20:41:15+00:00",
            "start_situation": {
                "clock": "8:20",
                "down": 3,
                "yfd": 5,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 32
                }
            },
            "end_situation": {
                "clock": "7:45",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 43
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 1,
                "yards": 25,
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
                    "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                    "name": "Mac Jones",
                    "jersey": "10",
                    "position": "QB",
                    "sr_id": "sr:player:1235378"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }, {
                "stat_type": "receive",
                "firstdown": 1,
                "target": 1,
                "reception": 1,
                "yards": 25,
                "yards_after_catch": 6,
                "inside_20": 0,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "73e194d1-a4b7-4de4-b1c2-3c24ef502918",
                    "name": "Jakobi Meyers",
                    "jersey": "16",
                    "position": "WR",
                    "sr_id": "sr:player:1209970"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
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
                    "id": "30915dd4-f19f-48cd-8425-f2cf29246b66",
                    "name": "Jevon Holland",
                    "jersey": "08",
                    "position": "SAF",
                    "sr_id": "sr:player:2197804"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }, {
                "stat_type": "down_conversion",
                "down": 3,
                "attempt": 1,
                "complete": 1,
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }, {
                "stat_type": "first_down",
                "category": "pass",
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }],
            "details": [{
                "category": "pass_completion",
                "description": "M.Jones pass deep right complete to MIA 49.",
                "sequence": 0,
                "direction": "deep right",
                "yards": 25,
                "start_location": {
                    "alias": "NE",
                    "yardline": 32
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 49
                },
                "players": [{
                    "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                    "name": "Mac Jones",
                    "jersey": "10",
                    "position": "QB",
                    "sr_id": "sr:player:1235378",
                    "role": "pass"
                }]
            }, {
                "category": "pass_reception",
                "description": "Catch made by J.Meyers at MIA 49. Gain of 25 yards.",
                "sequence": 1,
                "yards": 25,
                "result": "pushed out of bounds",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 49
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 43
                },
                "players": [{
                    "id": "73e194d1-a4b7-4de4-b1c2-3c24ef502918",
                    "name": "Jakobi Meyers",
                    "jersey": "16",
                    "position": "WR",
                    "sr_id": "sr:player:1209970",
                    "role": "catch"
                }]
            }, {
                "category": "pushed_out_of_bounds",
                "description": "Pushed out of bounds by J.Holland at MIA 43.",
                "sequence": 2,
                "start_location": {
                    "alias": "MIA",
                    "yardline": 43
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 43
                },
                "players": [{
                    "id": "30915dd4-f19f-48cd-8425-f2cf29246b66",
                    "name": "Jevon Holland",
                    "jersey": "08",
                    "position": "SAF",
                    "sr_id": "sr:player:2197804",
                    "role": "tackle"
                }]
            }, {
                "category": "first_down",
                "sequence": 3,
                "result": "pass",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 43
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 43
                },
                "players": []
            }, {
                "category": "third_down_conversion",
                "sequence": 4,
                "result": "good",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 43
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 43
                },
                "players": []
            }],
            "quarter": {
                "id": "54502be7-4079-4c4e-9b3f-84935363049c",
                "number": 4,
                "sequence": 4
            }
        }, {
            "type": "play",
            "id": "614b57a0-8a14-11ed-9308-3ba3ec8cbdcb",
            "sequence": 1672605572848.0,
            "clock": "7:45",
            "home_points": 16,
            "away_points": 14,
            "play_type": "rush",
            "wall_clock": "2023-01-01T20:39:42+00:00",
            "description": "R.Stevenson rushed up the middle to MIA 35 for 8 yards. Tackled by J.Baker at MIA 35.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T20:39:32+00:00",
            "updated_at": "2023-01-01T20:41:35+00:00",
            "start_situation": {
                "clock": "7:45",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 43
                }
            },
            "end_situation": {
                "clock": "7:16",
                "down": 2,
                "yfd": 2,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 35
                }
            },
            "statistics": [{
                "stat_type": "rush",
                "attempt": 1,
                "yards": 8,
                "firstdown": 0,
                "inside_20": 0,
                "goaltogo": 0,
                "broken_tackles": 0,
                "kneel_down": 0,
                "scramble": 0,
                "player": {
                    "id": "6260e78a-64e2-4f7e-9bf8-39948a17a370",
                    "name": "Rhamondre Stevenson",
                    "jersey": "38",
                    "position": "RB",
                    "sr_id": "sr:player:1693603"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
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
                    "id": "53e7c80e-8bf9-4ab2-ab3e-80cb556ea784",
                    "name": "Jerome Baker",
                    "jersey": "55",
                    "position": "LB",
                    "sr_id": "sr:player:1217510"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }],
            "details": [{
                "category": "rush",
                "description": "R.Stevenson rushed up the middle to MIA 35 for 8 yards.",
                "sequence": 0,
                "direction": "up the middle",
                "yards": 8,
                "result": "tackled",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 43
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 35
                },
                "players": [{
                    "id": "6260e78a-64e2-4f7e-9bf8-39948a17a370",
                    "name": "Rhamondre Stevenson",
                    "jersey": "38",
                    "position": "RB",
                    "sr_id": "sr:player:1693603",
                    "role": "rush"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by J.Baker at MIA 35.",
                "sequence": 1,
                "start_location": {
                    "alias": "MIA",
                    "yardline": 35
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 35
                },
                "players": [{
                    "id": "53e7c80e-8bf9-4ab2-ab3e-80cb556ea784",
                    "name": "Jerome Baker",
                    "jersey": "55",
                    "position": "LB",
                    "sr_id": "sr:player:1217510",
                    "role": "tackle"
                }]
            }],
            "quarter": {
                "id": "54502be7-4079-4c4e-9b3f-84935363049c",
                "number": 4,
                "sequence": 4
            }
        }, {
            "type": "play",
            "id": "70b5b910-8a14-11ed-9308-3ba3ec8cbdcb",
            "sequence": 1672605613367.0,
            "clock": "7:16",
            "home_points": 16,
            "away_points": 14,
            "play_type": "rush",
            "wall_clock": "2023-01-01T20:40:26+00:00",
            "description": "M.Jones rushed up the middle to MIA 32 for 3 yards. Tackled by Z.Sieler at MIA 32.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T20:40:13+00:00",
            "updated_at": "2023-01-01T20:41:52+00:00",
            "start_situation": {
                "clock": "7:16",
                "down": 2,
                "yfd": 2,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 35
                }
            },
            "end_situation": {
                "clock": "6:38",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 32
                }
            },
            "statistics": [{
                "stat_type": "rush",
                "attempt": 1,
                "yards": 3,
                "firstdown": 1,
                "inside_20": 0,
                "goaltogo": 0,
                "broken_tackles": 0,
                "kneel_down": 0,
                "scramble": 0,
                "player": {
                    "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                    "name": "Mac Jones",
                    "jersey": "10",
                    "position": "QB",
                    "sr_id": "sr:player:1235378"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
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
                    "id": "c85c0efc-3391-4a8e-b8a4-370b32fd09ce",
                    "name": "Zach Sieler",
                    "jersey": "92",
                    "position": "DT",
                    "sr_id": "sr:player:1474790"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }, {
                "stat_type": "first_down",
                "category": "rush",
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }],
            "details": [{
                "category": "rush",
                "description": "M.Jones rushed up the middle to MIA 32 for 3 yards.",
                "sequence": 0,
                "direction": "up the middle",
                "yards": 3,
                "result": "tackled",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 35
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 32
                },
                "players": [{
                    "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                    "name": "Mac Jones",
                    "jersey": "10",
                    "position": "QB",
                    "sr_id": "sr:player:1235378",
                    "role": "rush"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by Z.Sieler at MIA 32.",
                "sequence": 1,
                "start_location": {
                    "alias": "MIA",
                    "yardline": 32
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 32
                },
                "players": [{
                    "id": "c85c0efc-3391-4a8e-b8a4-370b32fd09ce",
                    "name": "Zach Sieler",
                    "jersey": "92",
                    "position": "DT",
                    "sr_id": "sr:player:1474790",
                    "role": "tackle"
                }]
            }, {
                "category": "first_down",
                "sequence": 2,
                "result": "rush",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 32
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 32
                },
                "players": []
            }],
            "quarter": {
                "id": "54502be7-4079-4c4e-9b3f-84935363049c",
                "number": 4,
                "sequence": 4
            }
        }, {
            "type": "play",
            "id": "9219d960-8a14-11ed-9308-3ba3ec8cbdcb",
            "sequence": 1672605649814.0,
            "clock": "6:38",
            "home_points": 16,
            "away_points": 14,
            "play_type": "pass",
            "wall_clock": "2023-01-01T20:40:51+00:00",
            "description": "M.Jones pass short left complete to MIA 30. Catch made by H.Henry at MIA 30. Gain of 4 yards. Pushed out of bounds by J.Baker at MIA 28.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T20:40:49+00:00",
            "updated_at": "2023-01-01T20:42:35+00:00",
            "start_situation": {
                "clock": "6:38",
                "down": 1,
                "yfd": 10,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 32
                }
            },
            "end_situation": {
                "clock": "6:09",
                "down": 2,
                "yfd": 6,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 28
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 1,
                "yards": 4,
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
                    "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                    "name": "Mac Jones",
                    "jersey": "10",
                    "position": "QB",
                    "sr_id": "sr:player:1235378"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }, {
                "stat_type": "receive",
                "firstdown": 0,
                "target": 1,
                "reception": 1,
                "yards": 4,
                "yards_after_catch": 2,
                "inside_20": 0,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "705899da-3c20-4bc3-b5d0-2e6e40655131",
                    "name": "Hunter Henry",
                    "jersey": "85",
                    "position": "TE",
                    "sr_id": "sr:player:987633"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
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
                    "id": "53e7c80e-8bf9-4ab2-ab3e-80cb556ea784",
                    "name": "Jerome Baker",
                    "jersey": "55",
                    "position": "LB",
                    "sr_id": "sr:player:1217510"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }],
            "details": [{
                "category": "pass_completion",
                "description": "M.Jones pass short left complete to MIA 30.",
                "sequence": 0,
                "direction": "short left",
                "yards": 4,
                "start_location": {
                    "alias": "MIA",
                    "yardline": 32
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 30
                },
                "players": [{
                    "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                    "name": "Mac Jones",
                    "jersey": "10",
                    "position": "QB",
                    "sr_id": "sr:player:1235378",
                    "role": "pass"
                }]
            }, {
                "category": "pass_reception",
                "description": "Catch made by H.Henry at MIA 30. Gain of 4 yards.",
                "sequence": 1,
                "yards": 4,
                "result": "pushed out of bounds",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 30
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 28
                },
                "players": [{
                    "id": "705899da-3c20-4bc3-b5d0-2e6e40655131",
                    "name": "Hunter Henry",
                    "jersey": "85",
                    "position": "TE",
                    "sr_id": "sr:player:987633",
                    "role": "catch"
                }]
            }, {
                "category": "pushed_out_of_bounds",
                "description": "Pushed out of bounds by J.Baker at MIA 28.",
                "sequence": 2,
                "start_location": {
                    "alias": "MIA",
                    "yardline": 28
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 28
                },
                "players": [{
                    "id": "53e7c80e-8bf9-4ab2-ab3e-80cb556ea784",
                    "name": "Jerome Baker",
                    "jersey": "55",
                    "position": "LB",
                    "sr_id": "sr:player:1217510",
                    "role": "tackle"
                }]
            }],
            "quarter": {
                "id": "54502be7-4079-4c4e-9b3f-84935363049c",
                "number": 4,
                "sequence": 4
            }
        }, {
            "type": "play",
            "id": "9f17ceb0-8a14-11ed-9308-3ba3ec8cbdcb",
            "sequence": 1672605674550.0,
            "clock": "6:09",
            "home_points": 16,
            "away_points": 14,
            "play_type": "rush",
            "wall_clock": "2023-01-01T20:41:21+00:00",
            "description": "R.Stevenson rushed left guard to MIA 27 for 1 yards. Tackled by R.Davis; C.Wilkins at MIA 27.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T20:41:14+00:00",
            "updated_at": "2023-01-01T21:03:07+00:00",
            "start_situation": {
                "clock": "6:09",
                "down": 2,
                "yfd": 6,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 28
                }
            },
            "end_situation": {
                "clock": "5:33",
                "down": 3,
                "yfd": 5,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 27
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
                    "id": "6260e78a-64e2-4f7e-9bf8-39948a17a370",
                    "name": "Rhamondre Stevenson",
                    "jersey": "38",
                    "position": "RB",
                    "sr_id": "sr:player:1693603"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
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
                    "id": "9666a6bd-4321-4acd-823e-b872943a436e",
                    "name": "Raekwon Davis",
                    "jersey": "98",
                    "position": "DT",
                    "sr_id": "sr:player:2040337"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
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
                    "id": "6c640668-de81-49c4-a0da-e367e1747923",
                    "name": "Christian Wilkins",
                    "jersey": "94",
                    "position": "DT",
                    "sr_id": "sr:player:1218538"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }],
            "details": [{
                "category": "rush",
                "description": "R.Stevenson rushed left guard to MIA 27 for 1 yards.",
                "sequence": 0,
                "direction": "left guard",
                "yards": 1,
                "result": "tackled",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 28
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 27
                },
                "players": [{
                    "id": "6260e78a-64e2-4f7e-9bf8-39948a17a370",
                    "name": "Rhamondre Stevenson",
                    "jersey": "38",
                    "position": "RB",
                    "sr_id": "sr:player:1693603",
                    "role": "rush"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by R.Davis; C.Wilkins at MIA 27.",
                "sequence": 1,
                "start_location": {
                    "alias": "MIA",
                    "yardline": 27
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 27
                },
                "players": [{
                    "id": "9666a6bd-4321-4acd-823e-b872943a436e",
                    "name": "Raekwon Davis",
                    "jersey": "98",
                    "position": "DT",
                    "sr_id": "sr:player:2040337",
                    "role": "ast_tackle"
                }, {
                    "id": "6c640668-de81-49c4-a0da-e367e1747923",
                    "name": "Christian Wilkins",
                    "jersey": "94",
                    "position": "DT",
                    "sr_id": "sr:player:1218538",
                    "role": "ast_tackle"
                }]
            }],
            "quarter": {
                "id": "54502be7-4079-4c4e-9b3f-84935363049c",
                "number": 4,
                "sequence": 4
            }
        }, {
            "type": "play",
            "id": "ad9b0470-8a14-11ed-9308-3ba3ec8cbdcb",
            "sequence": 1672605757186.0,
            "clock": "5:33",
            "home_points": 16,
            "away_points": 14,
            "play_type": "pass",
            "wall_clock": "2023-01-01T20:41:58+00:00",
            "description": "M.Jones steps back to pass. M.Jones pass incomplete deep right intended for J.Meyers. PENALTY on MIA-K.Crossen, Defensive Pass Interference, 22 yards, accepted. No Play.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T20:42:37+00:00",
            "updated_at": "2023-01-01T20:43:40+00:00",
            "start_situation": {
                "clock": "5:33",
                "down": 3,
                "yfd": 5,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 27
                }
            },
            "end_situation": {
                "clock": "5:27",
                "down": 1,
                "yfd": 5,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 5
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
                    "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                    "name": "Mac Jones",
                    "jersey": "10",
                    "position": "QB",
                    "sr_id": "sr:player:1235378"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }, {
                "stat_type": "receive",
                "nullified": true,
                "target": 1,
                "inside_20": 0,
                "goaltogo": 0,
                "catchable": 0,
                "player": {
                    "id": "73e194d1-a4b7-4de4-b1c2-3c24ef502918",
                    "name": "Jakobi Meyers",
                    "jersey": "16",
                    "position": "WR",
                    "sr_id": "sr:player:1209970"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }, {
                "stat_type": "penalty",
                "penalty": 1,
                "yards": 22,
                "player": {
                    "id": "ce0badde-28c3-45ce-a6f4-e2f82ef129f8",
                    "name": "Keion Crossen",
                    "jersey": "27",
                    "position": "DB",
                    "sr_id": "sr:player:1189988"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }, {
                "stat_type": "first_down",
                "category": "penalty",
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }],
            "details": [{
                "category": "pass",
                "description": "M.Jones steps back to pass.",
                "sequence": 0,
                "start_location": {
                    "alias": "MIA",
                    "yardline": 27
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 27
                },
                "players": [{
                    "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                    "name": "Mac Jones",
                    "jersey": "10",
                    "position": "QB",
                    "sr_id": "sr:player:1235378",
                    "role": "pass"
                }]
            }, {
                "category": "pass_incompletion",
                "description": "M.Jones pass incomplete deep right intended for J.Meyers.",
                "sequence": 1,
                "direction": "deep right",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 27
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 27
                },
                "players": [{
                    "id": "73e194d1-a4b7-4de4-b1c2-3c24ef502918",
                    "name": "Jakobi Meyers",
                    "jersey": "16",
                    "position": "WR",
                    "sr_id": "sr:player:1209970",
                    "role": "receive"
                }, {
                    "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                    "name": "Mac Jones",
                    "jersey": "10",
                    "position": "QB",
                    "sr_id": "sr:player:1235378",
                    "role": "pass"
                }]
            }, {
                "category": "penalty",
                "description": "PENALTY on MIA-K.Crossen, Defensive Pass Interference, 22 yards, accepted.",
                "sequence": 2,
                "start_location": {
                    "alias": "MIA",
                    "yardline": 27
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 5
                },
                "penalty": {
                    "description": "Defensive Pass Interference",
                    "result": "accepted",
                    "yards": 22,
                    "team": {
                        "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                        "name": "Dolphins",
                        "market": "Miami",
                        "alias": "MIA",
                        "sr_id": "sr:competitor:4287"
                    }
                },
                "players": [{
                    "id": "ce0badde-28c3-45ce-a6f4-e2f82ef129f8",
                    "name": "Keion Crossen",
                    "jersey": "27",
                    "position": "DB",
                    "sr_id": "sr:player:1189988",
                    "role": "penalty"
                }]
            }, {
                "category": "no_play",
                "description": "No Play.",
                "sequence": 3,
                "start_location": {
                    "alias": "MIA",
                    "yardline": 5
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 5
                },
                "players": []
            }, {
                "category": "first_down",
                "sequence": 4,
                "result": "penalty",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 5
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 5
                },
                "players": []
            }],
            "quarter": {
                "id": "54502be7-4079-4c4e-9b3f-84935363049c",
                "number": 4,
                "sequence": 4
            }
        }, {
            "type": "play",
            "id": "def9df50-8a14-11ed-9308-3ba3ec8cbdcb",
            "sequence": 1672605775794.0,
            "clock": "5:27",
            "home_points": 16,
            "away_points": 14,
            "play_type": "pass",
            "goaltogo": true,
            "wall_clock": "2023-01-01T20:43:02+00:00",
            "description": "M.Jones steps back to pass. M.Jones pass incomplete short right intended for T.Thornton.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T20:42:55+00:00",
            "updated_at": "2023-01-01T21:03:07+00:00",
            "start_situation": {
                "clock": "5:27",
                "down": 1,
                "yfd": 5,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 5
                }
            },
            "end_situation": {
                "clock": "5:21",
                "down": 2,
                "yfd": 5,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 5
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 0,
                "att_yards": 0,
                "firstdown": 0,
                "inside_20": 1,
                "goaltogo": 1,
                "blitz": 0,
                "hurry": 0,
                "knockdown": 0,
                "on_target_throw": 0,
                "batted_pass": 0,
                "player": {
                    "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                    "name": "Mac Jones",
                    "jersey": "10",
                    "position": "QB",
                    "sr_id": "sr:player:1235378"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }, {
                "stat_type": "receive",
                "firstdown": 0,
                "target": 1,
                "inside_20": 1,
                "goaltogo": 1,
                "catchable": 0,
                "player": {
                    "id": "74cda487-2026-42e0-ae32-77f3502cfb11",
                    "name": "Tyquan Thornton",
                    "jersey": "11",
                    "position": "WR",
                    "sr_id": "sr:player:1435193"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }],
            "details": [{
                "category": "pass",
                "description": "M.Jones steps back to pass.",
                "sequence": 0,
                "start_location": {
                    "alias": "MIA",
                    "yardline": 5
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 0
                },
                "players": [{
                    "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                    "name": "Mac Jones",
                    "jersey": "10",
                    "position": "QB",
                    "sr_id": "sr:player:1235378",
                    "role": "pass"
                }]
            }, {
                "category": "pass_incompletion",
                "description": "M.Jones pass incomplete short right intended for T.Thornton.",
                "sequence": 1,
                "direction": "short right",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 0
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 0
                },
                "players": [{
                    "id": "74cda487-2026-42e0-ae32-77f3502cfb11",
                    "name": "Tyquan Thornton",
                    "jersey": "11",
                    "position": "WR",
                    "sr_id": "sr:player:1435193",
                    "role": "receive"
                }, {
                    "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                    "name": "Mac Jones",
                    "jersey": "10",
                    "position": "QB",
                    "sr_id": "sr:player:1235378",
                    "role": "pass"
                }]
            }],
            "quarter": {
                "id": "54502be7-4079-4c4e-9b3f-84935363049c",
                "number": 4,
                "sequence": 4
            }
        }, {
            "type": "play",
            "id": "e9cc4210-8a14-11ed-9308-3ba3ec8cbdcb",
            "sequence": 1672605830568.0,
            "clock": "5:21",
            "home_points": 16,
            "away_points": 14,
            "play_type": "rush",
            "goaltogo": true,
            "wall_clock": "2023-01-01T20:44:00+00:00",
            "description": "D.Harris rushed right guard to MIA 1 for 4 yards. Tackled by E.Roberts at MIA 1.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T20:43:50+00:00",
            "updated_at": "2023-01-01T21:03:07+00:00",
            "start_situation": {
                "clock": "5:21",
                "down": 2,
                "yfd": 5,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 5
                }
            },
            "end_situation": {
                "clock": "4:40",
                "down": 3,
                "yfd": 1,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 1
                }
            },
            "statistics": [{
                "stat_type": "rush",
                "attempt": 1,
                "yards": 4,
                "firstdown": 0,
                "inside_20": 1,
                "goaltogo": 1,
                "broken_tackles": 0,
                "kneel_down": 0,
                "scramble": 0,
                "player": {
                    "id": "59482736-ce42-4058-b68e-0f9f66eac2d9",
                    "name": "Damien Harris",
                    "jersey": "37",
                    "position": "RB",
                    "sr_id": "sr:player:1216208"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
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
                    "id": "f6d7cf0f-72d2-473f-a44b-4a253587ca0f",
                    "name": "Elandon Roberts",
                    "jersey": "52",
                    "position": "LB",
                    "sr_id": "sr:player:1074034"
                },
                "team": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287"
                }
            }],
            "details": [{
                "category": "rush",
                "description": "D.Harris rushed right guard to MIA 1 for 4 yards.",
                "sequence": 0,
                "direction": "right guard",
                "yards": 4,
                "result": "tackled",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 5
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 1
                },
                "players": [{
                    "id": "59482736-ce42-4058-b68e-0f9f66eac2d9",
                    "name": "Damien Harris",
                    "jersey": "37",
                    "position": "RB",
                    "sr_id": "sr:player:1216208",
                    "role": "rush"
                }]
            }, {
                "category": "tackle",
                "description": "Tackled by E.Roberts at MIA 1.",
                "sequence": 1,
                "start_location": {
                    "alias": "MIA",
                    "yardline": 1
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 1
                },
                "players": [{
                    "id": "f6d7cf0f-72d2-473f-a44b-4a253587ca0f",
                    "name": "Elandon Roberts",
                    "jersey": "52",
                    "position": "LB",
                    "sr_id": "sr:player:1074034",
                    "role": "tackle"
                }]
            }],
            "quarter": {
                "id": "54502be7-4079-4c4e-9b3f-84935363049c",
                "number": 4,
                "sequence": 4
            }
        }, {
            "type": "play",
            "id": "28c5ee80-8a15-11ed-9308-3ba3ec8cbdcb",
            "sequence": 1672606017798.0,
            "clock": "4:40",
            "home_points": 22,
            "away_points": 14,
            "play_type": "pass",
            "scoring_play": true,
            "goaltogo": true,
            "wall_clock": "2023-01-01T20:45:49+00:00",
            "description": "M.Jones pass short left complete to MIA End Zone. Catch made by J.Meyers at MIA End Zone. Gain of 1 yards. J.Meyers for 1 yards, TOUCHDOWN.",
            "scoring_description": "M.Jones pass short left complete to MIA End Zone. Catch made by J.Meyers at MIA End Zone. Gain of 1 yards. J.Meyers for 1 yards, TOUCHDOWN.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T20:46:57+00:00",
            "updated_at": "2023-01-01T21:03:07+00:00",
            "start_situation": {
                "clock": "4:40",
                "down": 3,
                "yfd": 1,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 1
                }
            },
            "end_situation": {
                "clock": "4:37",
                "down": 0,
                "yfd": 0,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 15
                }
            },
            "score": {
                "sequence": 11,
                "clock": "4:37",
                "points": 7,
                "home_points": 22,
                "away_points": 14,
                "points-after-play": {
                    "id": "7aa36bb0-8a15-11ed-9308-3ba3ec8cbdcb",
                    "sequence": 1672606028921.0,
                    "type": "extra_point"
                }
            },
            "statistics": [{
                "stat_type": "pass",
                "attempt": 1,
                "complete": 1,
                "yards": 1,
                "att_yards": 1,
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
                    "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                    "name": "Mac Jones",
                    "jersey": "10",
                    "position": "QB",
                    "sr_id": "sr:player:1235378"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }, {
                "stat_type": "receive",
                "firstdown": 1,
                "touchdown": 1,
                "target": 1,
                "reception": 1,
                "yards": 1,
                "yards_after_catch": 0,
                "inside_20": 1,
                "goaltogo": 1,
                "catchable": 0,
                "player": {
                    "id": "73e194d1-a4b7-4de4-b1c2-3c24ef502918",
                    "name": "Jakobi Meyers",
                    "jersey": "16",
                    "position": "WR",
                    "sr_id": "sr:player:1209970"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }, {
                "stat_type": "down_conversion",
                "down": 3,
                "attempt": 1,
                "complete": 1,
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }, {
                "stat_type": "first_down",
                "category": "pass",
                "player": {
                    "id": "73e194d1-a4b7-4de4-b1c2-3c24ef502918",
                    "name": "Jakobi Meyers",
                    "jersey": "16",
                    "position": "WR",
                    "sr_id": "sr:player:1209970"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }],
            "details": [{
                "category": "pass_completion",
                "description": "M.Jones pass short left complete to MIA End Zone.",
                "sequence": 0,
                "direction": "short left",
                "yards": 1,
                "start_location": {
                    "alias": "MIA",
                    "yardline": 1
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 0
                },
                "players": [{
                    "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                    "name": "Mac Jones",
                    "jersey": "10",
                    "position": "QB",
                    "sr_id": "sr:player:1235378",
                    "role": "pass"
                }]
            }, {
                "category": "pass_reception",
                "description": "Catch made by J.Meyers at MIA End Zone. Gain of 1 yards.",
                "sequence": 1,
                "yards": 1,
                "result": "touchdown",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 0
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 0
                },
                "players": [{
                    "id": "73e194d1-a4b7-4de4-b1c2-3c24ef502918",
                    "name": "Jakobi Meyers",
                    "jersey": "16",
                    "position": "WR",
                    "sr_id": "sr:player:1209970",
                    "role": "catch"
                }]
            }, {
                "category": "touchdown",
                "description": "J.Meyers for 1 yards, TOUCHDOWN.",
                "sequence": 2,
                "yards": 1,
                "result": "touchdown",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 0
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 0
                },
                "players": [{
                    "id": "73e194d1-a4b7-4de4-b1c2-3c24ef502918",
                    "name": "Jakobi Meyers",
                    "jersey": "16",
                    "position": "WR",
                    "sr_id": "sr:player:1209970",
                    "role": "catch"
                }]
            }, {
                "category": "third_down_conversion",
                "sequence": 3,
                "result": "good",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 1
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 1
                },
                "players": []
            }],
            "quarter": {
                "id": "54502be7-4079-4c4e-9b3f-84935363049c",
                "number": 4,
                "sequence": 4
            }
        }, {
            "type": "play",
            "id": "7aa36bb0-8a15-11ed-9308-3ba3ec8cbdcb",
            "sequence": 1672606028921.0,
            "clock": "4:37",
            "home_points": 23,
            "away_points": 14,
            "play_type": "extra_point",
            "scoring_play": true,
            "wall_clock": "2023-01-01T20:47:19+00:00",
            "description": "N.Folk extra point is good.",
            "scoring_description": "M.Jones pass short left complete to MIA End Zone. Catch made by J.Meyers at MIA End Zone. Gain of 1 yards. J.Meyers for 1 yards, TOUCHDOWN.",
            "fake_punt": false,
            "fake_field_goal": false,
            "screen_pass": false,
            "play_action": false,
            "run_pass_option": false,
            "created_at": "2023-01-01T20:47:08+00:00",
            "updated_at": "2023-01-01T21:03:07+00:00",
            "start_situation": {
                "clock": "4:37",
                "down": 0,
                "yfd": 0,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Dolphins",
                    "market": "Miami",
                    "alias": "MIA",
                    "sr_id": "sr:competitor:4287",
                    "yardline": 15
                }
            },
            "end_situation": {
                "clock": "4:37",
                "down": 0,
                "yfd": 0,
                "possession": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                },
                "location": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424",
                    "yardline": 35
                }
            },
            "statistics": [{
                "stat_type": "extra_point",
                "attempt": 1,
                "made": 1,
                "player": {
                    "id": "b37c621e-1125-4c35-bea0-fcabb1527060",
                    "name": "Nick Folk",
                    "jersey": "06",
                    "position": "K",
                    "sr_id": "sr:player:830073"
                },
                "team": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "Patriots",
                    "market": "New England",
                    "alias": "NE",
                    "sr_id": "sr:competitor:4424"
                }
            }],
            "details": [{
                "category": "extra_point_attempt",
                "description": "N.Folk extra point is good.",
                "sequence": 0,
                "result": "good",
                "start_location": {
                    "alias": "MIA",
                    "yardline": 15
                },
                "end_location": {
                    "alias": "MIA",
                    "yardline": 15
                },
                "players": [{
                    "id": "b37c621e-1125-4c35-bea0-fcabb1527060",
                    "name": "Nick Folk",
                    "jersey": "06",
                    "position": "K",
                    "sr_id": "sr:player:830073",
                    "role": "kick"
                }]
            }],
            "quarter": {
                "id": "54502be7-4079-4c4e-9b3f-84935363049c",
                "number": 4,
                "sequence": 4
            }
        }]
    }],
    "scoring_plays": [{
        "type": "play",
        "id": "57637690-8a01-11ed-9760-5be375bc3cb3",
        "sequence": 1672597442262.0,
        "clock": "7:20",
        "home_points": 6,
        "away_points": 0,
        "play_type": "pass",
        "scoring_play": true,
        "wall_clock": "2023-01-01T18:23:36+00:00",
        "description": "M.Jones pass short left complete to MIA End Zone. Catch made by T.Thornton at MIA End Zone. Gain of 7 yards. T.Thornton for 7 yards, TOUCHDOWN.",
        "scoring_description": "M.Jones pass short left complete to MIA End Zone. Catch made by T.Thornton at MIA End Zone. Gain of 7 yards. T.Thornton for 7 yards, TOUCHDOWN.",
        "fake_punt": false,
        "fake_field_goal": false,
        "screen_pass": false,
        "play_action": false,
        "run_pass_option": false,
        "created_at": "2023-01-01T18:24:02+00:00",
        "updated_at": "2023-01-01T18:27:18+00:00",
        "start_situation": {
            "clock": "7:20",
            "down": 3,
            "yfd": 6,
            "possession": {
                "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                "name": "Patriots",
                "market": "New England",
                "alias": "NE",
                "sr_id": "sr:competitor:4424"
            },
            "location": {
                "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                "name": "Dolphins",
                "market": "Miami",
                "alias": "MIA",
                "sr_id": "sr:competitor:4287",
                "yardline": 7
            }
        },
        "end_situation": {
            "clock": "7:15",
            "down": 0,
            "yfd": 0,
            "possession": {
                "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                "name": "Patriots",
                "market": "New England",
                "alias": "NE",
                "sr_id": "sr:competitor:4424"
            },
            "location": {
                "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                "name": "Dolphins",
                "market": "Miami",
                "alias": "MIA",
                "sr_id": "sr:competitor:4287",
                "yardline": 15
            }
        },
        "score": {
            "sequence": 2,
            "clock": "7:15",
            "points": 7,
            "home_points": 6,
            "away_points": 0,
            "points-after-play": {
                "id": "82e41720-8a01-11ed-9760-5be375bc3cb3",
                "sequence": 1672597447034.0,
                "type": "extra_point"
            }
        },
        "statistics": [{
            "stat_type": "pass",
            "attempt": 1,
            "complete": 1,
            "yards": 7,
            "att_yards": 7,
            "firstdown": 1,
            "touchdown": 1,
            "inside_20": 1,
            "goaltogo": 0,
            "blitz": 0,
            "hurry": 0,
            "knockdown": 0,
            "on_target_throw": 0,
            "batted_pass": 0,
            "player": {
                "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                "name": "Mac Jones",
                "jersey": "10",
                "position": "QB",
                "sr_id": "sr:player:1235378"
            },
            "team": {
                "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                "name": "Patriots",
                "market": "New England",
                "alias": "NE",
                "sr_id": "sr:competitor:4424"
            }
        }, {
            "stat_type": "receive",
            "firstdown": 1,
            "touchdown": 1,
            "target": 1,
            "reception": 1,
            "yards": 7,
            "yards_after_catch": 0,
            "inside_20": 1,
            "goaltogo": 0,
            "catchable": 0,
            "player": {
                "id": "74cda487-2026-42e0-ae32-77f3502cfb11",
                "name": "Tyquan Thornton",
                "jersey": "11",
                "position": "WR",
                "sr_id": "sr:player:1435193"
            },
            "team": {
                "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                "name": "Patriots",
                "market": "New England",
                "alias": "NE",
                "sr_id": "sr:competitor:4424"
            }
        }, {
            "stat_type": "down_conversion",
            "down": 3,
            "attempt": 1,
            "complete": 1,
            "team": {
                "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                "name": "Patriots",
                "market": "New England",
                "alias": "NE",
                "sr_id": "sr:competitor:4424"
            }
        }, {
            "stat_type": "first_down",
            "category": "pass",
            "player": {
                "id": "74cda487-2026-42e0-ae32-77f3502cfb11",
                "name": "Tyquan Thornton",
                "jersey": "11",
                "position": "WR",
                "sr_id": "sr:player:1435193"
            },
            "team": {
                "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                "name": "Patriots",
                "market": "New England",
                "alias": "NE",
                "sr_id": "sr:competitor:4424"
            }
        }],
        "details": [{
            "category": "pass_completion",
            "description": "M.Jones pass short left complete to MIA End Zone.",
            "sequence": 0,
            "direction": "short left",
            "yards": 7,
            "start_location": {
                "alias": "MIA",
                "yardline": 7
            },
            "end_location": {
                "alias": "MIA",
                "yardline": 0
            },
            "players": [{
                "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                "name": "Mac Jones",
                "jersey": "10",
                "position": "QB",
                "sr_id": "sr:player:1235378",
                "role": "pass"
            }]
        }, {
            "category": "pass_reception",
            "description": "Catch made by T.Thornton at MIA End Zone. Gain of 7 yards.",
            "sequence": 1,
            "yards": 7,
            "result": "touchdown",
            "start_location": {
                "alias": "MIA",
                "yardline": 0
            },
            "end_location": {
                "alias": "MIA",
                "yardline": 0
            },
            "players": [{
                "id": "74cda487-2026-42e0-ae32-77f3502cfb11",
                "name": "Tyquan Thornton",
                "jersey": "11",
                "position": "WR",
                "sr_id": "sr:player:1435193",
                "role": "catch"
            }]
        }, {
            "category": "touchdown",
            "description": "T.Thornton for 7 yards, TOUCHDOWN.",
            "sequence": 2,
            "yards": 7,
            "result": "touchdown",
            "start_location": {
                "alias": "MIA",
                "yardline": 0
            },
            "end_location": {
                "alias": "MIA",
                "yardline": 0
            },
            "players": [{
                "id": "74cda487-2026-42e0-ae32-77f3502cfb11",
                "name": "Tyquan Thornton",
                "jersey": "11",
                "position": "WR",
                "sr_id": "sr:player:1435193",
                "role": "catch"
            }]
        }, {
            "category": "third_down_conversion",
            "sequence": 3,
            "result": "good",
            "start_location": {
                "alias": "MIA",
                "yardline": 7
            },
            "end_location": {
                "alias": "MIA",
                "yardline": 7
            },
            "players": []
        }],
        "quarter": {
            "id": "7c4dbc34-d225-4a5f-b90f-a44695d5c4c4",
            "number": 1,
            "sequence": 1
        }
    }, {
        "type": "play",
        "id": "82e41720-8a01-11ed-9760-5be375bc3cb3",
        "sequence": 1672597447034.0,
        "clock": "7:15",
        "home_points": 7,
        "away_points": 0,
        "play_type": "extra_point",
        "scoring_play": true,
        "wall_clock": "2023-01-01T18:24:22+00:00",
        "description": "N.Folk extra point is good.",
        "scoring_description": "M.Jones pass short left complete to MIA End Zone. Catch made by T.Thornton at MIA End Zone. Gain of 7 yards. T.Thornton for 7 yards, TOUCHDOWN.",
        "fake_punt": false,
        "fake_field_goal": false,
        "screen_pass": false,
        "play_action": false,
        "run_pass_option": false,
        "created_at": "2023-01-01T18:24:07+00:00",
        "updated_at": "2023-01-01T18:27:18+00:00",
        "start_situation": {
            "clock": "7:15",
            "down": 0,
            "yfd": 0,
            "possession": {
                "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                "name": "Patriots",
                "market": "New England",
                "alias": "NE",
                "sr_id": "sr:competitor:4424"
            },
            "location": {
                "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                "name": "Dolphins",
                "market": "Miami",
                "alias": "MIA",
                "sr_id": "sr:competitor:4287",
                "yardline": 15
            }
        },
        "end_situation": {
            "clock": "7:15",
            "down": 0,
            "yfd": 0,
            "possession": {
                "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                "name": "Patriots",
                "market": "New England",
                "alias": "NE",
                "sr_id": "sr:competitor:4424"
            },
            "location": {
                "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                "name": "Patriots",
                "market": "New England",
                "alias": "NE",
                "sr_id": "sr:competitor:4424",
                "yardline": 35
            }
        },
        "statistics": [{
            "stat_type": "extra_point",
            "attempt": 1,
            "made": 1,
            "player": {
                "id": "b37c621e-1125-4c35-bea0-fcabb1527060",
                "name": "Nick Folk",
                "jersey": "06",
                "position": "K",
                "sr_id": "sr:player:830073"
            },
            "team": {
                "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                "name": "Patriots",
                "market": "New England",
                "alias": "NE",
                "sr_id": "sr:competitor:4424"
            }
        }],
        "details": [{
            "category": "extra_point_attempt",
            "description": "N.Folk extra point is good.",
            "sequence": 0,
            "result": "good",
            "start_location": {
                "alias": "MIA",
                "yardline": 15
            },
            "end_location": {
                "alias": "MIA",
                "yardline": 15
            },
            "players": [{
                "id": "b37c621e-1125-4c35-bea0-fcabb1527060",
                "name": "Nick Folk",
                "jersey": "06",
                "position": "K",
                "sr_id": "sr:player:830073",
                "role": "kick"
            }]
        }],
        "quarter": {
            "id": "7c4dbc34-d225-4a5f-b90f-a44695d5c4c4",
            "number": 1,
            "sequence": 1
        }
    }, {
        "type": "play",
        "id": "a7643290-8a03-11ed-9760-5be375bc3cb3",
        "sequence": 1672598578328.0,
        "clock": "15:00",
        "home_points": 7,
        "away_points": 6,
        "play_type": "rush",
        "scoring_play": true,
        "goaltogo": true,
        "wall_clock": "2023-01-01T18:42:34+00:00",
        "description": "T.Hill rushed left tackle to NE End Zone for 2 yards. T.Hill for 2 yards, TOUCHDOWN.",
        "scoring_description": "T.Hill rushed left tackle to NE End Zone for 2 yards. T.Hill for 2 yards, TOUCHDOWN.",
        "fake_punt": false,
        "fake_field_goal": false,
        "screen_pass": false,
        "play_action": false,
        "run_pass_option": false,
        "created_at": "2023-01-01T18:42:58+00:00",
        "updated_at": "2023-01-01T19:26:56+00:00",
        "start_situation": {
            "clock": "15:00",
            "down": 2,
            "yfd": 2,
            "possession": {
                "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                "name": "Dolphins",
                "market": "Miami",
                "alias": "MIA",
                "sr_id": "sr:competitor:4287"
            },
            "location": {
                "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                "name": "Patriots",
                "market": "New England",
                "alias": "NE",
                "sr_id": "sr:competitor:4424",
                "yardline": 2
            }
        },
        "end_situation": {
            "clock": "14:55",
            "down": 0,
            "yfd": 0,
            "possession": {
                "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                "name": "Dolphins",
                "market": "Miami",
                "alias": "MIA",
                "sr_id": "sr:competitor:4287"
            },
            "location": {
                "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                "name": "Patriots",
                "market": "New England",
                "alias": "NE",
                "sr_id": "sr:competitor:4424",
                "yardline": 15
            }
        },
        "score": {
            "sequence": 4,
            "clock": "14:55",
            "points": 7,
            "home_points": 7,
            "away_points": 6,
            "points-after-play": {
                "id": "27a96ab0-8a04-11ed-9760-5be375bc3cb3",
                "sequence": 1672598588250.0,
                "type": "extra_point"
            }
        },
        "statistics": [{
            "stat_type": "rush",
            "attempt": 1,
            "yards": 2,
            "touchdown": 1,
            "firstdown": 1,
            "inside_20": 1,
            "goaltogo": 1,
            "broken_tackles": 0,
            "kneel_down": 0,
            "scramble": 0,
            "player": {
                "id": "01d8aee3-e1c4-4988-970a-8c0c2d08bd83",
                "name": "Tyreek Hill",
                "jersey": "10",
                "position": "WR",
                "sr_id": "sr:player:988793"
            },
            "team": {
                "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                "name": "Dolphins",
                "market": "Miami",
                "alias": "MIA",
                "sr_id": "sr:competitor:4287"
            }
        }, {
            "stat_type": "first_down",
            "category": "rush",
            "player": {
                "id": "01d8aee3-e1c4-4988-970a-8c0c2d08bd83",
                "name": "Tyreek Hill",
                "jersey": "10",
                "position": "WR",
                "sr_id": "sr:player:988793"
            },
            "team": {
                "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                "name": "Dolphins",
                "market": "Miami",
                "alias": "MIA",
                "sr_id": "sr:competitor:4287"
            }
        }],
        "details": [{
            "category": "rush",
            "description": "T.Hill rushed left tackle to NE End Zone for 2 yards.",
            "sequence": 0,
            "direction": "left tackle",
            "yards": 2,
            "result": "touchdown",
            "start_location": {
                "alias": "NE",
                "yardline": 2
            },
            "end_location": {
                "alias": "NE",
                "yardline": 0
            },
            "players": [{
                "id": "01d8aee3-e1c4-4988-970a-8c0c2d08bd83",
                "name": "Tyreek Hill",
                "jersey": "10",
                "position": "WR",
                "sr_id": "sr:player:988793",
                "role": "rush"
            }]
        }, {
            "category": "touchdown",
            "description": "T.Hill for 2 yards, TOUCHDOWN.",
            "sequence": 1,
            "yards": 2,
            "result": "touchdown",
            "start_location": {
                "alias": "NE",
                "yardline": 0
            },
            "end_location": {
                "alias": "NE",
                "yardline": 0
            },
            "players": [{
                "id": "01d8aee3-e1c4-4988-970a-8c0c2d08bd83",
                "name": "Tyreek Hill",
                "jersey": "10",
                "position": "WR",
                "sr_id": "sr:player:988793",
                "role": "rush"
            }]
        }],
        "quarter": {
            "id": "ae302c16-4827-415c-b24a-ec63d06191aa",
            "number": 2,
            "sequence": 2
        }
    }, {
        "type": "play",
        "id": "27a96ab0-8a04-11ed-9760-5be375bc3cb3",
        "sequence": 1672598588250.0,
        "clock": "14:55",
        "home_points": 7,
        "away_points": 7,
        "play_type": "extra_point",
        "scoring_play": true,
        "wall_clock": "2023-01-01T18:43:22+00:00",
        "description": "J.Sanders extra point is good.",
        "scoring_description": "T.Hill rushed left tackle to NE End Zone for 2 yards. T.Hill for 2 yards, TOUCHDOWN.",
        "fake_punt": false,
        "fake_field_goal": false,
        "screen_pass": false,
        "play_action": false,
        "run_pass_option": false,
        "created_at": "2023-01-01T18:43:08+00:00",
        "updated_at": "2023-01-01T19:26:56+00:00",
        "start_situation": {
            "clock": "14:55",
            "down": 0,
            "yfd": 0,
            "possession": {
                "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                "name": "Dolphins",
                "market": "Miami",
                "alias": "MIA",
                "sr_id": "sr:competitor:4287"
            },
            "location": {
                "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                "name": "Patriots",
                "market": "New England",
                "alias": "NE",
                "sr_id": "sr:competitor:4424",
                "yardline": 15
            }
        },
        "end_situation": {
            "clock": "14:55",
            "down": 0,
            "yfd": 0,
            "possession": {
                "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                "name": "Dolphins",
                "market": "Miami",
                "alias": "MIA",
                "sr_id": "sr:competitor:4287"
            },
            "location": {
                "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                "name": "Dolphins",
                "market": "Miami",
                "alias": "MIA",
                "sr_id": "sr:competitor:4287",
                "yardline": 35
            }
        },
        "statistics": [{
            "stat_type": "extra_point",
            "attempt": 1,
            "made": 1,
            "player": {
                "id": "5ffb654f-0de5-424b-aa2f-ad511deb5b51",
                "name": "Jason Sanders",
                "jersey": "07",
                "position": "K",
                "sr_id": "sr:player:1199416"
            },
            "team": {
                "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                "name": "Dolphins",
                "market": "Miami",
                "alias": "MIA",
                "sr_id": "sr:competitor:4287"
            }
        }],
        "details": [{
            "category": "extra_point_attempt",
            "description": "J.Sanders extra point is good.",
            "sequence": 0,
            "result": "good",
            "start_location": {
                "alias": "NE",
                "yardline": 15
            },
            "end_location": {
                "alias": "NE",
                "yardline": 15
            },
            "players": [{
                "id": "5ffb654f-0de5-424b-aa2f-ad511deb5b51",
                "name": "Jason Sanders",
                "jersey": "07",
                "position": "K",
                "sr_id": "sr:player:1199416",
                "role": "kick"
            }]
        }],
        "quarter": {
            "id": "ae302c16-4827-415c-b24a-ec63d06191aa",
            "number": 2,
            "sequence": 2
        }
    }, {
        "type": "play",
        "id": "5359e950-8a0e-11ed-9308-3ba3ec8cbdcb",
        "sequence": 1672603022689.0,
        "clock": "9:21",
        "home_points": 7,
        "away_points": 13,
        "play_type": "pass",
        "scoring_play": true,
        "goaltogo": true,
        "wall_clock": "2023-01-01T19:56:29+00:00",
        "description": "T.Bridgewater pass short middle complete to NE End Zone. Catch made by R.Mostert at NE End Zone. Gain of 2 yards. R.Mostert for 2 yards, TOUCHDOWN.",
        "scoring_description": "T.Bridgewater pass short middle complete to NE End Zone. Catch made by R.Mostert at NE End Zone. Gain of 2 yards. R.Mostert for 2 yards, TOUCHDOWN.",
        "fake_punt": false,
        "fake_field_goal": false,
        "screen_pass": false,
        "play_action": false,
        "run_pass_option": false,
        "created_at": "2023-01-01T19:57:02+00:00",
        "updated_at": "2023-01-01T20:43:46+00:00",
        "start_situation": {
            "clock": "9:21",
            "down": 2,
            "yfd": 2,
            "possession": {
                "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                "name": "Dolphins",
                "market": "Miami",
                "alias": "MIA",
                "sr_id": "sr:competitor:4287"
            },
            "location": {
                "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                "name": "Patriots",
                "market": "New England",
                "alias": "NE",
                "sr_id": "sr:competitor:4424",
                "yardline": 2
            }
        },
        "end_situation": {
            "clock": "9:17",
            "down": 0,
            "yfd": 0,
            "possession": {
                "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                "name": "Dolphins",
                "market": "Miami",
                "alias": "MIA",
                "sr_id": "sr:competitor:4287"
            },
            "location": {
                "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                "name": "Patriots",
                "market": "New England",
                "alias": "NE",
                "sr_id": "sr:competitor:4424",
                "yardline": 15
            }
        },
        "score": {
            "sequence": 6,
            "clock": "9:17",
            "points": 7,
            "home_points": 7,
            "away_points": 13,
            "points-after-play": {
                "id": "80e68680-8a0e-11ed-9308-3ba3ec8cbdcb",
                "sequence": 1672603027103.0,
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
                "id": "d4cb52a9-f6b4-42ed-b40b-27bff5f1eea7",
                "name": "Teddy Bridgewater",
                "jersey": "05",
                "position": "QB",
                "sr_id": "sr:player:831153"
            },
            "team": {
                "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                "name": "Dolphins",
                "market": "Miami",
                "alias": "MIA",
                "sr_id": "sr:competitor:4287"
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
                "id": "b040e601-ec40-4757-bf3d-71bf64ef99cf",
                "name": "Raheem Mostert",
                "jersey": "31",
                "position": "RB",
                "sr_id": "sr:player:855634"
            },
            "team": {
                "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                "name": "Dolphins",
                "market": "Miami",
                "alias": "MIA",
                "sr_id": "sr:competitor:4287"
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
                "id": "39017237-0575-4984-b784-954a79c2bba2",
                "name": "Christian Barmore",
                "jersey": "90",
                "position": "DL",
                "sr_id": "sr:player:2197758"
            },
            "team": {
                "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                "name": "Patriots",
                "market": "New England",
                "alias": "NE",
                "sr_id": "sr:competitor:4424"
            }
        }, {
            "stat_type": "first_down",
            "category": "pass",
            "player": {
                "id": "b040e601-ec40-4757-bf3d-71bf64ef99cf",
                "name": "Raheem Mostert",
                "jersey": "31",
                "position": "RB",
                "sr_id": "sr:player:855634"
            },
            "team": {
                "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                "name": "Dolphins",
                "market": "Miami",
                "alias": "MIA",
                "sr_id": "sr:competitor:4287"
            }
        }],
        "details": [{
            "category": "pass_completion",
            "description": "T.Bridgewater pass short middle complete to NE End Zone.",
            "sequence": 0,
            "direction": "short middle",
            "yards": 2,
            "start_location": {
                "alias": "NE",
                "yardline": 2
            },
            "end_location": {
                "alias": "NE",
                "yardline": 0
            },
            "players": [{
                "id": "d4cb52a9-f6b4-42ed-b40b-27bff5f1eea7",
                "name": "Teddy Bridgewater",
                "jersey": "05",
                "position": "QB",
                "sr_id": "sr:player:831153",
                "role": "pass"
            }, {
                "id": "39017237-0575-4984-b784-954a79c2bba2",
                "name": "Christian Barmore",
                "jersey": "90",
                "position": "DL",
                "sr_id": "sr:player:2197758",
                "role": "hit"
            }]
        }, {
            "category": "pass_reception",
            "description": "Catch made by R.Mostert at NE End Zone. Gain of 2 yards.",
            "sequence": 1,
            "yards": 2,
            "result": "touchdown",
            "start_location": {
                "alias": "NE",
                "yardline": 0
            },
            "end_location": {
                "alias": "NE",
                "yardline": 0
            },
            "players": [{
                "id": "b040e601-ec40-4757-bf3d-71bf64ef99cf",
                "name": "Raheem Mostert",
                "jersey": "31",
                "position": "RB",
                "sr_id": "sr:player:855634",
                "role": "catch"
            }]
        }, {
            "category": "touchdown",
            "description": "R.Mostert for 2 yards, TOUCHDOWN.",
            "sequence": 2,
            "yards": 2,
            "result": "touchdown",
            "start_location": {
                "alias": "NE",
                "yardline": 0
            },
            "end_location": {
                "alias": "NE",
                "yardline": 0
            },
            "players": [{
                "id": "b040e601-ec40-4757-bf3d-71bf64ef99cf",
                "name": "Raheem Mostert",
                "jersey": "31",
                "position": "RB",
                "sr_id": "sr:player:855634",
                "role": "catch"
            }]
        }],
        "quarter": {
            "id": "7c0b12fb-58f6-4b1a-a982-6833c3a3eb58",
            "number": 3,
            "sequence": 3
        }
    }, {
        "type": "play",
        "id": "80e68680-8a0e-11ed-9308-3ba3ec8cbdcb",
        "sequence": 1672603027103.0,
        "clock": "9:17",
        "home_points": 7,
        "away_points": 14,
        "play_type": "extra_point",
        "scoring_play": true,
        "wall_clock": "2023-01-01T19:57:22+00:00",
        "description": "J.Sanders extra point is good.",
        "scoring_description": "T.Bridgewater pass short middle complete to NE End Zone. Catch made by R.Mostert at NE End Zone. Gain of 2 yards. R.Mostert for 2 yards, TOUCHDOWN.",
        "fake_punt": false,
        "fake_field_goal": false,
        "screen_pass": false,
        "play_action": false,
        "run_pass_option": false,
        "created_at": "2023-01-01T19:57:07+00:00",
        "updated_at": "2023-01-01T20:43:46+00:00",
        "start_situation": {
            "clock": "9:17",
            "down": 0,
            "yfd": 0,
            "possession": {
                "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                "name": "Dolphins",
                "market": "Miami",
                "alias": "MIA",
                "sr_id": "sr:competitor:4287"
            },
            "location": {
                "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                "name": "Patriots",
                "market": "New England",
                "alias": "NE",
                "sr_id": "sr:competitor:4424",
                "yardline": 15
            }
        },
        "end_situation": {
            "clock": "9:17",
            "down": 0,
            "yfd": 0,
            "possession": {
                "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                "name": "Dolphins",
                "market": "Miami",
                "alias": "MIA",
                "sr_id": "sr:competitor:4287"
            },
            "location": {
                "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                "name": "Dolphins",
                "market": "Miami",
                "alias": "MIA",
                "sr_id": "sr:competitor:4287",
                "yardline": 35
            }
        },
        "statistics": [{
            "stat_type": "extra_point",
            "attempt": 1,
            "made": 1,
            "player": {
                "id": "5ffb654f-0de5-424b-aa2f-ad511deb5b51",
                "name": "Jason Sanders",
                "jersey": "07",
                "position": "K",
                "sr_id": "sr:player:1199416"
            },
            "team": {
                "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                "name": "Dolphins",
                "market": "Miami",
                "alias": "MIA",
                "sr_id": "sr:competitor:4287"
            }
        }],
        "details": [{
            "category": "extra_point_attempt",
            "description": "J.Sanders extra point is good.",
            "sequence": 0,
            "result": "good",
            "start_location": {
                "alias": "NE",
                "yardline": 15
            },
            "end_location": {
                "alias": "NE",
                "yardline": 15
            },
            "players": [{
                "id": "5ffb654f-0de5-424b-aa2f-ad511deb5b51",
                "name": "Jason Sanders",
                "jersey": "07",
                "position": "K",
                "sr_id": "sr:player:1199416",
                "role": "kick"
            }]
        }],
        "quarter": {
            "id": "7c0b12fb-58f6-4b1a-a982-6833c3a3eb58",
            "number": 3,
            "sequence": 3
        }
    }, {
        "type": "play",
        "id": "c438e940-8a0f-11ed-9308-3ba3ec8cbdcb",
        "sequence": 1672603606103.0,
        "clock": "4:07",
        "home_points": 10,
        "away_points": 14,
        "play_type": "field_goal",
        "scoring_play": true,
        "wall_clock": "2023-01-01T20:06:58+00:00",
        "description": "N.Folk 49 yard field goal attempt is good, Center-J.Cardona, Holder-M.Palardy.",
        "scoring_description": "N.Folk 49 yard field goal attempt is good, Center-J.Cardona, Holder-M.Palardy.",
        "fake_punt": false,
        "fake_field_goal": false,
        "screen_pass": false,
        "play_action": false,
        "run_pass_option": false,
        "created_at": "2023-01-01T20:06:46+00:00",
        "updated_at": "2023-01-01T20:06:46+00:00",
        "start_situation": {
            "clock": "4:07",
            "down": 4,
            "yfd": 5,
            "possession": {
                "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                "name": "Patriots",
                "market": "New England",
                "alias": "NE",
                "sr_id": "sr:competitor:4424"
            },
            "location": {
                "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                "name": "Dolphins",
                "market": "Miami",
                "alias": "MIA",
                "sr_id": "sr:competitor:4287",
                "yardline": 31
            }
        },
        "end_situation": {
            "clock": "4:03",
            "down": 0,
            "yfd": 0,
            "possession": {
                "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                "name": "Patriots",
                "market": "New England",
                "alias": "NE",
                "sr_id": "sr:competitor:4424"
            },
            "location": {
                "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                "name": "Patriots",
                "market": "New England",
                "alias": "NE",
                "sr_id": "sr:competitor:4424",
                "yardline": 35
            }
        },
        "score": {
            "sequence": 7,
            "clock": "4:03",
            "points": 3,
            "home_points": 10,
            "away_points": 14
        },
        "statistics": [{
            "stat_type": "field_goal",
            "attempt": 1,
            "att_yards": 49,
            "yards": 49,
            "missed": 0,
            "made": 1,
            "player": {
                "id": "b37c621e-1125-4c35-bea0-fcabb1527060",
                "name": "Nick Folk",
                "jersey": "06",
                "position": "K",
                "sr_id": "sr:player:830073"
            },
            "team": {
                "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                "name": "Patriots",
                "market": "New England",
                "alias": "NE",
                "sr_id": "sr:competitor:4424"
            }
        }],
        "details": [{
            "category": "field_goal",
            "description": "N.Folk 49 yard field goal attempt is good, Center-J.Cardona, Holder-M.Palardy.",
            "sequence": 0,
            "yards": 49,
            "result": "good",
            "start_location": {
                "alias": "MIA",
                "yardline": 39
            },
            "end_location": {
                "alias": "MIA",
                "yardline": 39
            },
            "players": [{
                "id": "b37c621e-1125-4c35-bea0-fcabb1527060",
                "name": "Nick Folk",
                "jersey": "06",
                "position": "K",
                "sr_id": "sr:player:830073",
                "role": "kick"
            }, {
                "id": "5f3cc875-e802-46b2-81ad-3ffb7a3a1662",
                "name": "Michael Palardy",
                "jersey": "17",
                "position": "P",
                "sr_id": "sr:player:854778",
                "role": "hold"
            }, {
                "id": "90517709-322d-47af-9360-77775a93496b",
                "name": "Joe Cardona",
                "jersey": "49",
                "position": "LS",
                "sr_id": "sr:player:854784",
                "role": "snap"
            }]
        }],
        "quarter": {
            "id": "7c0b12fb-58f6-4b1a-a982-6833c3a3eb58",
            "number": 3,
            "sequence": 3
        }
    }, {
        "type": "play",
        "id": "66a606e0-8a10-11ed-9308-3ba3ec8cbdcb",
        "sequence": 1672603933176.0,
        "clock": "3:00",
        "home_points": 16,
        "away_points": 14,
        "play_type": "pass",
        "scoring_play": true,
        "wall_clock": "2023-01-01T20:11:32+00:00",
        "description": "T.Bridgewater pass short right INTERCEPTED at MIA 39. Intercepted by K.Dugger at MIA 39. K.Dugger for 39 yards, TOUCHDOWN.",
        "scoring_description": "T.Bridgewater pass short right INTERCEPTED at MIA 39. Intercepted by K.Dugger at MIA 39. K.Dugger for 39 yards, TOUCHDOWN.",
        "fake_punt": false,
        "fake_field_goal": false,
        "screen_pass": false,
        "play_action": false,
        "run_pass_option": false,
        "created_at": "2023-01-01T20:12:13+00:00",
        "updated_at": "2023-01-01T20:15:03+00:00",
        "start_situation": {
            "clock": "3:00",
            "down": 3,
            "yfd": 15,
            "possession": {
                "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                "name": "Dolphins",
                "market": "Miami",
                "alias": "MIA",
                "sr_id": "sr:competitor:4287"
            },
            "location": {
                "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                "name": "Dolphins",
                "market": "Miami",
                "alias": "MIA",
                "sr_id": "sr:competitor:4287",
                "yardline": 24
            }
        },
        "end_situation": {
            "clock": "2:51",
            "down": 0,
            "yfd": 0,
            "possession": {
                "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                "name": "Patriots",
                "market": "New England",
                "alias": "NE",
                "sr_id": "sr:competitor:4424"
            },
            "location": {
                "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                "name": "Dolphins",
                "market": "Miami",
                "alias": "MIA",
                "sr_id": "sr:competitor:4287",
                "yardline": 15
            }
        },
        "score": {
            "sequence": 9,
            "clock": "2:51",
            "points": 6,
            "home_points": 16,
            "away_points": 14,
            "points-after-play": {
                "id": "9fda3120-8a10-11ed-9308-3ba3ec8cbdcb",
                "sequence": 1672603947235.0,
                "type": "extra_point"
            }
        },
        "statistics": [{
            "stat_type": "pass",
            "attempt": 1,
            "att_yards": 15,
            "interception": 1,
            "firstdown": 0,
            "inside_20": 0,
            "goaltogo": 0,
            "int_touchdown": 1,
            "blitz": 0,
            "hurry": 0,
            "knockdown": 0,
            "on_target_throw": 0,
            "batted_pass": 0,
            "player": {
                "id": "d4cb52a9-f6b4-42ed-b40b-27bff5f1eea7",
                "name": "Teddy Bridgewater",
                "jersey": "05",
                "position": "QB",
                "sr_id": "sr:player:831153"
            },
            "team": {
                "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                "name": "Dolphins",
                "market": "Miami",
                "alias": "MIA",
                "sr_id": "sr:competitor:4287"
            }
        }, {
            "stat_type": "receive",
            "firstdown": 0,
            "target": 1,
            "inside_20": 0,
            "goaltogo": 0,
            "catchable": 0,
            "player": {
                "id": "18ccb826-5584-4f6a-8434-cf9a3b927b0f",
                "name": "Trent Sherfield",
                "jersey": "14",
                "position": "WR",
                "sr_id": "sr:player:1201798"
            },
            "team": {
                "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                "name": "Dolphins",
                "market": "Miami",
                "alias": "MIA",
                "sr_id": "sr:competitor:4287"
            }
        }, {
            "stat_type": "defense",
            "pass_defended": 1,
            "interception": 1,
            "int_yards": 39,
            "int_touchdown": 1,
            "def_target": 0,
            "def_comp": 0,
            "blitz": 0,
            "hurry": 0,
            "knockdown": 0,
            "batted_pass": 0,
            "player": {
                "id": "1d8d5c04-15e7-4346-9d1f-f128e4df3adb",
                "name": "Kyle Dugger",
                "jersey": "23",
                "position": "DB",
                "sr_id": "sr:player:2040541"
            },
            "team": {
                "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                "name": "Patriots",
                "market": "New England",
                "alias": "NE",
                "sr_id": "sr:competitor:4424"
            }
        }, {
            "stat_type": "down_conversion",
            "down": 3,
            "attempt": 1,
            "complete": 0,
            "team": {
                "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                "name": "Dolphins",
                "market": "Miami",
                "alias": "MIA",
                "sr_id": "sr:competitor:4287"
            }
        }],
        "details": [{
            "category": "pass_interception",
            "description": "T.Bridgewater pass short right INTERCEPTED at MIA 39.",
            "sequence": 0,
            "direction": "short right",
            "start_location": {
                "alias": "MIA",
                "yardline": 24
            },
            "end_location": {
                "alias": "MIA",
                "yardline": 39
            },
            "players": [{
                "id": "d4cb52a9-f6b4-42ed-b40b-27bff5f1eea7",
                "name": "Teddy Bridgewater",
                "jersey": "05",
                "position": "QB",
                "sr_id": "sr:player:831153",
                "role": "pass"
            }]
        }, {
            "category": "pass_interception_return",
            "description": "Intercepted by K.Dugger at MIA 39.",
            "sequence": 1,
            "yards": 39,
            "result": "touchdown",
            "start_location": {
                "alias": "MIA",
                "yardline": 39
            },
            "end_location": {
                "alias": "MIA",
                "yardline": 0
            },
            "players": [{
                "id": "1d8d5c04-15e7-4346-9d1f-f128e4df3adb",
                "name": "Kyle Dugger",
                "jersey": "23",
                "position": "DB",
                "sr_id": "sr:player:2040541",
                "role": "return"
            }, {
                "id": "18ccb826-5584-4f6a-8434-cf9a3b927b0f",
                "name": "Trent Sherfield",
                "jersey": "14",
                "position": "WR",
                "sr_id": "sr:player:1201798",
                "role": "receive"
            }]
        }, {
            "category": "touchdown",
            "description": "K.Dugger for 39 yards, TOUCHDOWN.",
            "sequence": 2,
            "yards": 39,
            "result": "touchdown",
            "start_location": {
                "alias": "MIA",
                "yardline": 0
            },
            "end_location": {
                "alias": "MIA",
                "yardline": 0
            },
            "players": [{
                "id": "1d8d5c04-15e7-4346-9d1f-f128e4df3adb",
                "name": "Kyle Dugger",
                "jersey": "23",
                "position": "DB",
                "sr_id": "sr:player:2040541",
                "role": "return"
            }]
        }, {
            "category": "third_down_conversion",
            "sequence": 3,
            "result": "missed",
            "start_location": {
                "alias": "MIA",
                "yardline": 24
            },
            "end_location": {
                "alias": "MIA",
                "yardline": 24
            },
            "players": []
        }],
        "quarter": {
            "id": "7c0b12fb-58f6-4b1a-a982-6833c3a3eb58",
            "number": 3,
            "sequence": 3
        }
    }, {
        "type": "play",
        "id": "9fda3120-8a10-11ed-9308-3ba3ec8cbdcb",
        "sequence": 1672603947235.0,
        "clock": "2:51",
        "home_points": 16,
        "away_points": 14,
        "play_type": "extra_point",
        "wall_clock": "2023-01-01T20:12:42+00:00",
        "description": "N.Folk extra point is no good.",
        "scoring_description": "T.Bridgewater pass short right INTERCEPTED at MIA 39. Intercepted by K.Dugger at MIA 39. K.Dugger for 39 yards, TOUCHDOWN.",
        "fake_punt": false,
        "fake_field_goal": false,
        "screen_pass": false,
        "play_action": false,
        "run_pass_option": false,
        "created_at": "2023-01-01T20:12:27+00:00",
        "updated_at": "2023-01-01T20:12:27+00:00",
        "start_situation": {
            "clock": "2:51",
            "down": 0,
            "yfd": 0,
            "possession": {
                "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                "name": "Patriots",
                "market": "New England",
                "alias": "NE",
                "sr_id": "sr:competitor:4424"
            },
            "location": {
                "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                "name": "Dolphins",
                "market": "Miami",
                "alias": "MIA",
                "sr_id": "sr:competitor:4287",
                "yardline": 15
            }
        },
        "end_situation": {
            "clock": "2:51",
            "down": 0,
            "yfd": 0,
            "possession": {
                "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                "name": "Patriots",
                "market": "New England",
                "alias": "NE",
                "sr_id": "sr:competitor:4424"
            },
            "location": {
                "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                "name": "Patriots",
                "market": "New England",
                "alias": "NE",
                "sr_id": "sr:competitor:4424",
                "yardline": 35
            }
        },
        "statistics": [{
            "stat_type": "extra_point",
            "attempt": 1,
            "missed": 1,
            "made": 0,
            "player": {
                "id": "b37c621e-1125-4c35-bea0-fcabb1527060",
                "name": "Nick Folk",
                "jersey": "06",
                "position": "K",
                "sr_id": "sr:player:830073"
            },
            "team": {
                "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                "name": "Patriots",
                "market": "New England",
                "alias": "NE",
                "sr_id": "sr:competitor:4424"
            }
        }],
        "details": [{
            "category": "extra_point_attempt",
            "description": "N.Folk extra point is no good.",
            "sequence": 0,
            "result": "no good",
            "start_location": {
                "alias": "MIA",
                "yardline": 15
            },
            "end_location": {
                "alias": "MIA",
                "yardline": 15
            },
            "players": [{
                "id": "b37c621e-1125-4c35-bea0-fcabb1527060",
                "name": "Nick Folk",
                "jersey": "06",
                "position": "K",
                "sr_id": "sr:player:830073",
                "role": "kick"
            }]
        }],
        "quarter": {
            "id": "7c0b12fb-58f6-4b1a-a982-6833c3a3eb58",
            "number": 3,
            "sequence": 3
        }
    }, {
        "type": "play",
        "id": "28c5ee80-8a15-11ed-9308-3ba3ec8cbdcb",
        "sequence": 1672606017798.0,
        "clock": "4:40",
        "home_points": 22,
        "away_points": 14,
        "play_type": "pass",
        "scoring_play": true,
        "goaltogo": true,
        "wall_clock": "2023-01-01T20:45:49+00:00",
        "description": "M.Jones pass short left complete to MIA End Zone. Catch made by J.Meyers at MIA End Zone. Gain of 1 yards. J.Meyers for 1 yards, TOUCHDOWN.",
        "scoring_description": "M.Jones pass short left complete to MIA End Zone. Catch made by J.Meyers at MIA End Zone. Gain of 1 yards. J.Meyers for 1 yards, TOUCHDOWN.",
        "fake_punt": false,
        "fake_field_goal": false,
        "screen_pass": false,
        "play_action": false,
        "run_pass_option": false,
        "created_at": "2023-01-01T20:46:57+00:00",
        "updated_at": "2023-01-01T21:03:07+00:00",
        "start_situation": {
            "clock": "4:40",
            "down": 3,
            "yfd": 1,
            "possession": {
                "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                "name": "Patriots",
                "market": "New England",
                "alias": "NE",
                "sr_id": "sr:competitor:4424"
            },
            "location": {
                "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                "name": "Dolphins",
                "market": "Miami",
                "alias": "MIA",
                "sr_id": "sr:competitor:4287",
                "yardline": 1
            }
        },
        "end_situation": {
            "clock": "4:37",
            "down": 0,
            "yfd": 0,
            "possession": {
                "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                "name": "Patriots",
                "market": "New England",
                "alias": "NE",
                "sr_id": "sr:competitor:4424"
            },
            "location": {
                "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                "name": "Dolphins",
                "market": "Miami",
                "alias": "MIA",
                "sr_id": "sr:competitor:4287",
                "yardline": 15
            }
        },
        "score": {
            "sequence": 11,
            "clock": "4:37",
            "points": 7,
            "home_points": 22,
            "away_points": 14,
            "points-after-play": {
                "id": "7aa36bb0-8a15-11ed-9308-3ba3ec8cbdcb",
                "sequence": 1672606028921.0,
                "type": "extra_point"
            }
        },
        "statistics": [{
            "stat_type": "pass",
            "attempt": 1,
            "complete": 1,
            "yards": 1,
            "att_yards": 1,
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
                "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                "name": "Mac Jones",
                "jersey": "10",
                "position": "QB",
                "sr_id": "sr:player:1235378"
            },
            "team": {
                "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                "name": "Patriots",
                "market": "New England",
                "alias": "NE",
                "sr_id": "sr:competitor:4424"
            }
        }, {
            "stat_type": "receive",
            "firstdown": 1,
            "touchdown": 1,
            "target": 1,
            "reception": 1,
            "yards": 1,
            "yards_after_catch": 0,
            "inside_20": 1,
            "goaltogo": 1,
            "catchable": 0,
            "player": {
                "id": "73e194d1-a4b7-4de4-b1c2-3c24ef502918",
                "name": "Jakobi Meyers",
                "jersey": "16",
                "position": "WR",
                "sr_id": "sr:player:1209970"
            },
            "team": {
                "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                "name": "Patriots",
                "market": "New England",
                "alias": "NE",
                "sr_id": "sr:competitor:4424"
            }
        }, {
            "stat_type": "down_conversion",
            "down": 3,
            "attempt": 1,
            "complete": 1,
            "team": {
                "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                "name": "Patriots",
                "market": "New England",
                "alias": "NE",
                "sr_id": "sr:competitor:4424"
            }
        }, {
            "stat_type": "first_down",
            "category": "pass",
            "player": {
                "id": "73e194d1-a4b7-4de4-b1c2-3c24ef502918",
                "name": "Jakobi Meyers",
                "jersey": "16",
                "position": "WR",
                "sr_id": "sr:player:1209970"
            },
            "team": {
                "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                "name": "Patriots",
                "market": "New England",
                "alias": "NE",
                "sr_id": "sr:competitor:4424"
            }
        }],
        "details": [{
            "category": "pass_completion",
            "description": "M.Jones pass short left complete to MIA End Zone.",
            "sequence": 0,
            "direction": "short left",
            "yards": 1,
            "start_location": {
                "alias": "MIA",
                "yardline": 1
            },
            "end_location": {
                "alias": "MIA",
                "yardline": 0
            },
            "players": [{
                "id": "1fd00ec3-b758-46d2-a2c1-cca521ea8a54",
                "name": "Mac Jones",
                "jersey": "10",
                "position": "QB",
                "sr_id": "sr:player:1235378",
                "role": "pass"
            }]
        }, {
            "category": "pass_reception",
            "description": "Catch made by J.Meyers at MIA End Zone. Gain of 1 yards.",
            "sequence": 1,
            "yards": 1,
            "result": "touchdown",
            "start_location": {
                "alias": "MIA",
                "yardline": 0
            },
            "end_location": {
                "alias": "MIA",
                "yardline": 0
            },
            "players": [{
                "id": "73e194d1-a4b7-4de4-b1c2-3c24ef502918",
                "name": "Jakobi Meyers",
                "jersey": "16",
                "position": "WR",
                "sr_id": "sr:player:1209970",
                "role": "catch"
            }]
        }, {
            "category": "touchdown",
            "description": "J.Meyers for 1 yards, TOUCHDOWN.",
            "sequence": 2,
            "yards": 1,
            "result": "touchdown",
            "start_location": {
                "alias": "MIA",
                "yardline": 0
            },
            "end_location": {
                "alias": "MIA",
                "yardline": 0
            },
            "players": [{
                "id": "73e194d1-a4b7-4de4-b1c2-3c24ef502918",
                "name": "Jakobi Meyers",
                "jersey": "16",
                "position": "WR",
                "sr_id": "sr:player:1209970",
                "role": "catch"
            }]
        }, {
            "category": "third_down_conversion",
            "sequence": 3,
            "result": "good",
            "start_location": {
                "alias": "MIA",
                "yardline": 1
            },
            "end_location": {
                "alias": "MIA",
                "yardline": 1
            },
            "players": []
        }],
        "quarter": {
            "id": "54502be7-4079-4c4e-9b3f-84935363049c",
            "number": 4,
            "sequence": 4
        }
    }, {
        "type": "play",
        "id": "7aa36bb0-8a15-11ed-9308-3ba3ec8cbdcb",
        "sequence": 1672606028921.0,
        "clock": "4:37",
        "home_points": 23,
        "away_points": 14,
        "play_type": "extra_point",
        "scoring_play": true,
        "wall_clock": "2023-01-01T20:47:19+00:00",
        "description": "N.Folk extra point is good.",
        "scoring_description": "M.Jones pass short left complete to MIA End Zone. Catch made by J.Meyers at MIA End Zone. Gain of 1 yards. J.Meyers for 1 yards, TOUCHDOWN.",
        "fake_punt": false,
        "fake_field_goal": false,
        "screen_pass": false,
        "play_action": false,
        "run_pass_option": false,
        "created_at": "2023-01-01T20:47:08+00:00",
        "updated_at": "2023-01-01T21:03:07+00:00",
        "start_situation": {
            "clock": "4:37",
            "down": 0,
            "yfd": 0,
            "possession": {
                "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                "name": "Patriots",
                "market": "New England",
                "alias": "NE",
                "sr_id": "sr:competitor:4424"
            },
            "location": {
                "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                "name": "Dolphins",
                "market": "Miami",
                "alias": "MIA",
                "sr_id": "sr:competitor:4287",
                "yardline": 15
            }
        },
        "end_situation": {
            "clock": "4:37",
            "down": 0,
            "yfd": 0,
            "possession": {
                "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                "name": "Patriots",
                "market": "New England",
                "alias": "NE",
                "sr_id": "sr:competitor:4424"
            },
            "location": {
                "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                "name": "Patriots",
                "market": "New England",
                "alias": "NE",
                "sr_id": "sr:competitor:4424",
                "yardline": 35
            }
        },
        "statistics": [{
            "stat_type": "extra_point",
            "attempt": 1,
            "made": 1,
            "player": {
                "id": "b37c621e-1125-4c35-bea0-fcabb1527060",
                "name": "Nick Folk",
                "jersey": "06",
                "position": "K",
                "sr_id": "sr:player:830073"
            },
            "team": {
                "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                "name": "Patriots",
                "market": "New England",
                "alias": "NE",
                "sr_id": "sr:competitor:4424"
            }
        }],
        "details": [{
            "category": "extra_point_attempt",
            "description": "N.Folk extra point is good.",
            "sequence": 0,
            "result": "good",
            "start_location": {
                "alias": "MIA",
                "yardline": 15
            },
            "end_location": {
                "alias": "MIA",
                "yardline": 15
            },
            "players": [{
                "id": "b37c621e-1125-4c35-bea0-fcabb1527060",
                "name": "Nick Folk",
                "jersey": "06",
                "position": "K",
                "sr_id": "sr:player:830073",
                "role": "kick"
            }]
        }],
        "quarter": {
            "id": "54502be7-4079-4c4e-9b3f-84935363049c",
            "number": 4,
            "sequence": 4
        }
    }],
    "_comment": "Generation started @ 2023-01-01 21:10:28 UTC ended @ 2023-01-01 21:10:28 UTC"
}
//game thats almost over. if we ran it, it would test case 3
export default hardcoded_game_in_progress