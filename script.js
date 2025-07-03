document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const municipioInput = document.getElementById('municipio').value.trim().toLowerCase(); // Convertir a minúsculas
    const anio = parseInt(document.getElementById('anio').value.trim());
    const resultDiv = document.getElementById('result');

    // Definición de la información de los municipios
    const data = {
        "capital": {
            "Visor": [
                { start: 1990, end: 1999 },
                { start: 2001, end: 2009 }
            ],
            "Planillas de Excel": { start: 2016, end: 2024 }
        },
        "goya": {
            "Visor": [
                { start: 1990, end: 2009 }
            ],
            "Planillas de Excel": { start: 2015, end: 2024 },
            "Disco": [
                { start: 2010, end: 2011 },
                { start: 2013, end: 2014 }
            ]
        },
        "curuzu cuatia": {
            "Visor": [
                { start: 1990, end: 1992 },
                { start: 1994, end: 2009 }
            ],
            "Planillas de Excel": { start: 2014, end: 2024 },
            "Disco": [
                { start: 2013, end: 2013 },
                { start: 2013, end: 2014 }
            ]
        },
        "paso de los libres": {
            "Visor": [
                { start: 1990, end: 1990 },
                { start: 1995, end: 2001 },
                { start: 2003, end: 2009 }
            ],
            "Planillas de Excel": { start: 2014, end: 2023 },
            "Disco": [
                { start: 2014, end: 2024 }
            ]
        },
        "mercedes": {
            "Visor": [
                { start: 1990, end: 1993 },
                { start: 1995, end: 1999 },
                { start: 2001, end: 2009 }
            ],
            "Planillas de Excel": { start: 2014, end: 2024 },
            "Disco": [
                { start: 2013, end: 2013 }
            ]
        },
        "esquina": {
            "Visor": [
                { start: 1990, end: 1990 },
                { start: 1993, end: 1993 },
                { start: 1995, end: 2009 }
            ],
            "Planillas de Excel": { start: 2014, end: 2024 }
        },
        "santo tome": {
            "Visor": [
                { start: 1985, end: 2009 }
            ],
            "Planillas de Excel": { start: 2014, end: 2024 },
            "Disco": [
                { start: 2014, end: 2024 }
            ]
        },

        "monte caseros": {
            "Visor": [
                { start: 1990, end: 1990 },
                { start: 1992, end: 1998 },
                { start: 2001, end: 2009 }
            ],
            "Planillas de Excel": { start: 2014, end: 2024 },
            "Disco": [
                { start: 2012, end: 2013 }
            ]
        },
        "bella vista": {
            "Visor": [
                { start: 1996, end: 1996 },
                { start: 1998, end: 2009 }
            ],
            "Planillas de Excel": { start: 2014, end: 2019 },
            "Disco": [
                { start: 2011, end: 2013 }
            ]
        },
        "alvear": {
            "Visor": [
                { start: 1991, end: 2001 },
                { start: 2005, end: 2009 }
            ],
            "Planillas de Excel": { start: 2014, end: 2024 }
        },
        "sauce": {
            "Visor": [
                { start: 1988, end: 1999 },
                { start: 2001, end: 2009 }
            ],
            "Planillas de Excel": { start: 2014, end: 2024 }
        },
        "la cruz": {
            "Visor": [
                { start: 1991, end: 2009 }
            ],
            "Planillas de Excel": { start: 2014, end: 2024 }
        },
        "santa lucia": {
            "Visor": [
                { start: 1990, end: 2009 }
            ],
            "Planillas de Excel": { start: 2014, end: 2024 }
        },
        "saladas": {
            "Visor": [
                { start: 1985, end: 1985 },
                { start: 1988, end: 1988 },
                { start: 1990, end: 1990 }
            ],
            "Planillas de Excel": { start: 2014, end: 2024 }
        },
        "san luis del palmar": {
            "Visor": [
                { start: 1988, end: 1988 },
                { start: 1990, end: 1990 },
                { start: 1991, end: 1991 }
            ],
            "Planillas de Excel": { start: 2014, end: 2024 }
        },
        "concepcion": {
            "Visor": [
                { start: 1988, end: 1988 },
                { start: 1990, end: 1990 },
                { start: 1991, end: 1991 }
            ],
            "Planillas de Excel": { start: 2014, end: 2024 }
        },
        "san roque": {
            "Visor": [
                { start: 1998, end: 2009 }
            ],
            "Disco": [
                { start: 2011, end: 2015 }
            ],
            "Planillas de Excel": { start: 2014, end: 2024 }
        },
        "empedrado": {
            "Visor": [
                { start: 1998, end: 2009 }
            ],
            "Disco": [
                { start: 2011, end: 2015 }
            ],
            "Planillas de Excel": { start: 2014, end: 2024 }
        },
        "caa cati": {
            "Visor": [
                { start: 1997, end: 2009 }
            ],
            "Planillas de Excel": { start: 2014, end: 2024 }
        },
        "mburucuya": {
            "Visor": [
                { start: 1994, end: 1995 }
            ],
            "Planillas de Excel": { start: 2014, end: 2024 }
        },
        "ituzaingo": {
            "Visor": [
                { start: 1994, end: 1995 }
            ],
            "Planillas de Excel": { start: 2014, end: 2024 }
        },

        "alvear": {
            "Visor": [
                { start: 1991, end: 2001 },
                { start: 2005, end: 2009 }
            ],
            "Planillas de Excel": { start: 2014, end: 2024 }
        },
        "sauce": {
            "Visor": [
                { start: 1988, end: 1999 },
                { start: 2001, end: 2009 }
            ],
            "Planillas de Excel": { start: 2014, end: 2024 }
        },

        "la cruz": {
            "Visor": [
                { start: 1991, end: 2009 },

            ],
            "Planillas de Excel": { start: 2014, end: 2024 },

        },
        "santa lucia": {
            "Visor": [
                { start: 1990, end: 2009 },

            ],
            "Planillas de Excel": { start: 2014, end: 2024 },

        },
        "saladas": {
            "Visor": [
                { start: 1985, end: 1985 },
                { start: 1988, end: 1988 },
                { start: 1990, end: 1990 },

            ],
            "Planillas de Excel": { start: 2014, end: 2024 },

        },
        "san luis del palmar": {
            "Visor": [
                { start: 1991, end: 1991 },
                { start: 1988, end: 1988 },
                { start: 1990, end: 1990 },

            ],
            "Planillas de Excel": { start: 2014, end: 2024 },

        },
        "concepcion": {
            "Visor": [
                { start: 1991, end: 1991 },
                { start: 1988, end: 1988 },
                { start: 1990, end: 1990 },

            ],
            "Planillas de Excel": { start: 2014, end: 2024 },

        },
        "san roque": {
            "Visor": [
                { start: 1998, end: 2009 }
            ],
            "Disco": [
                { start: 2011, end: 2015 }
            ],
            "Planillas de Excel": { start: 2014, end: 2024 }
        },
        "empedrado": {
            "Visor": [
                { start: 1998, end: 2009 }
            ],
            "Disco": [
                { start: 2011, end: 2015 }
            ],
            "Planillas de Excel": { start: 2014, end: 2024 }
        },

        "caa cati": {
            "Visor": [
                { start: 1997, end: 2009 },

            ],
            "Planillas de Excel": { start: 2014, end: 2024 },

        },
        "mburucuya": {
            "Visor": [
                { start: 1994, end: 1995 },
                { start: 2000, end: 1995 }

            ],
            "Planillas de Excel": { start: 2014, end: 2024 },

        },
        "ituzaingo": {
            "Visor": [
                { start: 1994, end: 1995 },
                { start: 2000, end: 1995 }

            ],
            "Planillas de Excel": { start: 2014, end: 2024 },

            "beron de astrada": {
                "Visor": [
                    { "start": 1996, "end": 2002 },
                    { "start": 2004, "end": 2009 }
                ],
                "Planillas de Excel": [
                    { "start": 2014, "end": 2018 },
                    { "start": 2024, "end": 2024 }
                ]
            },
            "itati": {
                "Visor": [
                    { "start": 1995, "end": 1996 },
                    { "start": 1999, "end": 2009 }
                ],
                "Planillas de Excel": [
                    { "start": 2014, "end": 2021 },
                    { "start": 2023, "end": 2024 }
                ]
            },
            "san cosme": {
                "Visor": [
                    { "start": 1985, "end": 1986 },
                    { "start": 1996, "end": 2001 },
                    { "start": 2004, "end": 2009 }
                ],
                "Planillas de Excel": [
                    { "start": 2014, "end": 2014 },
                    { "start": 2017, "end": 2017 },
                    { "start": 2024, "end": 2024 }
                ]
            },
            "san miguel": {
                "Visor": [
                    { "start": 1988, "end": 1988 },
                    { "start": 1990, "end": 2001 },
                    { "start": 2003, "end": 2009 }
                ],
                "Planillas de Excel": { "start": 2014, "end": 2024 }
            },
            "gob. virasoro": {
                "Visor": [
                    { "start": 1990, "end": 1991 },
                    { "start": 1994, "end": 1997 },
                    { "start": 1999, "end": 2006 }
                ],
                "Planillas de Excel": { "start": 2014, "end": 2024 }
            },
            "san carlos": {
                "Visor": [
                    { "start": 1994, "end": 1994 },
                    { "start": 1998, "end": 1998 },
                    { "start": 2000, "end": 2008 }
                ],
                "Planillas de Excel": [

                    { "start": 2014, "end": 2024 }
                ]
            },
            "perugorria": {
                "Visor": [
                    { "start": 1990, "end": 1998 },
                    { "start": 2000, "end": 2003 }
                ],
                "Planillas de Excel": [
                    { "start": 2008, "end": 2015 },
                    { "start": 2022, "end": 2022 },
                    { "start": 2024, "end": 2024 }
                ]
            },
            "gob. martinez": {
                "Visor": { "start": 2008, "end": 2008 },
                "Planillas de Excel": [
                    { "start": 2014, "end": 2020 },
                    { "start": 2024, "end": 2024 }
                ]
            },
            "mariano i. loza": {
                "Visor": [
                    { "start": 2007, "end": 2008 }
                ],
                "Planillas de Excel": [

                    { "start": 2014, "end": 2024 }
                ]
            },
            "chavarria": {
                "Visor": [
                    { "start": 1985, "end": 1985 },
                    { "start": 1987, "end": 1997 },
                    { "start": 2001, "end": 2009 }
                ],
                "Planillas de Excel": [
                    { "start": 2013, "end": 2022 },
                    { "start": 2024, "end": 2024 }
                ]
            },
            "tabay": {
                "Visor": [
                    { "start": 1990, "end": 2004 },
                    { "start": 2008, "end": 2008 }
                ],
                "Planillas de Excel": [
                    { "start": 2014, "end": 2019 },
                    { "start": 2022, "end": 2024 }
                ]
            },

            "felipe yofre": {
                "Visor": {
                    "start": 1991,
                    "end": 2009
                },
                "Planillas de Excel": [

                    { "start": 2020, "end": 2024 }
                ]
            },
            "nueve de julio": {
                "Visor": [
                    { "start": 1990, "end": 1990 },
                    { "start": 1995, "end": 1995 },
                    { "start": 1998, "end": 2009 }
                ],
                "Planillas de Excel": [{ "start": 2020, "end": 2020 }]
            },
            "yapeyu": {
                "Visor": [
                    { "start": 1985, "end": 1985 },
                    { "start": 1990, "end": 1995 },
                    { "start": 1998, "end": 2009 }
                ],
                "Planillas de Excel": [

                    { "start": 2015, "end": 2024 }
                ]
            },
            "garruchos": {
                "Visor": [
                    { "start": 1985, "end": 1986 },
                    { "start": 1988, "end": 1988 },
                    { "start": 1990, "end": 2002 },
                    { "start": 2014, "end": 2014 },
                    { "start": 2023, "end": 2024 }
                ],
                "Planillas de Excel": [{ "start": 2014, "end": 2014 },
                { "start": 2023, "end": 2024 }
                ]
            },
            "pedro r. fernandez (mantilla)": {
                "Visor": [
                    { "start": 1985, "end": 1988 },
                    { "start": 1991, "end": 2002 },
                    { "start": 2004, "end": 2008 }
                ],
                "Planillas de Excel": [

                    { "start": 2014, "end": 2024 }
                ]
            }

        },
        // Cierre del objeto data

        // Verificar si el municipio existe
        if(data[municipioInput]) {
            let found = false;
            let sources = [];

            // Verificar en qué fuente está el año ingresado
            for (const [source, range] of Object.entries(data[municipioInput])) {
                if (Array.isArray(range)) {
                    // Si es un arreglo, verificar cada rango
                    for (const r of range) {
                        if (anio >= r.start && anio <= r.end) {
                            sources.push(source);
                            found = true;
                        }
                    }
                } else {
                    // Si es un objeto, verificar el rango
                    if (anio >= range.start && anio <= range.end) {
                        sources.push(source);
                        found = true;
                    }
                }
            }

            if (found) {
                const fuentes = sources.map(fuente => `<li>${fuente}</li>`).join('');
                resultDiv.innerHTML = `Hay información disponible para el año ${anio}. Puedes encontrarla en: <ul>${fuentes}</ul>`;
            } else {
                resultDiv.innerHTML = "No hay información disponible para el año seleccionado.";
            }
        } 
    else {
            resultDiv.nnerHTML = "No hay información disponible para el municipio ingresado.",
        }
    });