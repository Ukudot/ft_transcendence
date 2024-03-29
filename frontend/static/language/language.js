let language = {
	en: {
		errorPage: {
			firstLine: `404 Page Not Found`,
			secondLine: `Oops! Looks like you've wandered off the beaten path.`
		},
		navbar: {
			login: "Login",
			register: "Register",
			home: "Home",
			games: "Games",
			changeLanguage: "Change Language",
			changeStyle: "Change Style",
			accountMenu: "Account",
			notification: "Notification",
			adminPage: "Admin Page",
			moderatorPage: "Moderator Page",
			logout: "Logout",
			modern: "Modern",
			retro: "Retro",
			light: "Light",
			dark: "Dark",
			profile: "Profile"
		},
		notification: {
			friendSection: "Friend Request",
			infoSection: "Info Notification",
			tournamentTitle: "Tournament",
			friendTitle: "Friend Request",
			friendBody: "Sent you a friend Request",
			matchTitle: "Match Request",
			enterTournament: "Accept",
			rejectTournament: "Reject",
			tournamentBody: "incoming Tournament match...",
			matchReqBody: "sent you a match Request",

		},
		pong2d: {
			advices: ["W: Go Up", "D: Go Down", "P: Start The Game!", "If you leave the window or refresh the page you will automatically lose!"],
			gameStart: "Press >P< To Start The Match!",
			gameWait: "Waiting For the Opponent To Start The Match...",
			playAgain: "Play Again!",
			draw: "You Drew",
			lost: "You Lost!",
			win: "You Won!",
			start: "start",
			pongQueue: "Pong Queue",
			enterQueue: "Enter !",
			pillStyle: "Choose Pill Style",
			groundStyle: "Choose Ground Style",
			ballStyle: "Choose Ball Style",
			searchingOpp: "Searching Opponent...",

		},
		passwordRecovery: {
			enterPassword: "Enter new password:",

		},
		game: {
			category: "Category: ",
			gameQueue: "Enter Our Queue",
			gameTournament: "View Tournaments",
		},
		chatElement:{
			reqSent: "Request Sent!",
			restoreChat: "Invite",
			removeFriend: "Remove Friend",
			cancelRequest: "Cancel Request",
		},
		tournament:
		{
			title: "Tournaments List",
			searchBtn: "Search!",
			displayName: "Display Name",
			submitBtn: "Submit!",
			displayNameError: "Bad input valid character are A-Za-z0-9!?*@$~_- and 5-32 length range",
			invalidInput: " invalid Input",
			invalidPartecipants: " Invalid Input, possible number are 4, 8, 16...",
			invalidDateTime: "You can program you tournament up to one hour!", 
			tournamentSubmit: "Tournament successfully Joined!",
			tournamentSubmitError: "Error joining Tournament!",
			tournamentUnSubscribed: "Tournament successfully Unsubscribed!",
			tournamentUnSubscribedError: "Error Unsubscribing Tournament!",
			tournamentCreated: "Tournament successfully Created!",
			tournamentCreateError: "Error Creating Tournament!",
			normalLimit: "at least 5 character and max 32",
			bigLimit: "at least 5 character and max 255",
			newTournament: {
				tTitle: "Create Tournament",
				tName: "Tournament Name:",
				tDescription: "Tournament Description:",
				tDate: "Tournament Date:",
				tPartecipants: "Max Partecipants:",
				tCreate: "Create!",
				tDisplayName: "Display Name",
				tDate: "Start Date",
				tTime: "Start Time",
			},
			tournamentCard: {
				dateLabel: "Starting Date: ",
				subScribe: "Join!",
				unSubscribe: "Unsubscribe"
			},
		},
		login: {
			emailValidated: "Email Successfully Validated",
			emailValidatedError: "Email Validation Error (try Again)",
			login: "Login",
			name:	"Username: ",
			password: "Password: ",
			submit: "Submit!",
			register: "Not yet registered?",
			intraLogin: "Login",
			googleLogin: "Login", 
			error: "Check Provided Info",
			passwordRecovery: "Recover Your Password",
			enterUsername: "Enter Username: ",
			getEmail: "Send Email",
			insertTfaCode: "Insert Code: ",
			bannedLogin: "Your account is currently BANNED!",
			forgotPassword: "Forgot Password?"
		},
		register: {
			register: "Register [1/3]",
			secondRegister: "Register [2/3]",
			thirdRegister: "Register [3/3]",
			//from here to next comment translate only the first element of the array
			firstName:	["First Name:", "first_name"],
			lastName:	["Last Name:", "last_name"],
			birthDate: ["Birth Date:", "birthdate"],
			username: ["Username:", "username"],
			profilePicture: ["Picture:", "picture"],
			email: ["Email:", "email"],
			password: ["Password:", "password"],
			confirmPassword: ["Confirm password:", "confirmPassword"],
			//until here
			flow1Errors: ["Cannot be Blank", "already in use", "Come back when you are in trouble", "this is not a valid email...", "bad character inserted. Allowed ones are: A-Za-z0-9!?*@$~_-", "allowed character are: A-Za-z0-9 -"],
			flow2Errors: ["is the minimum age to be registered on our website", "Come back when you are in trouble"],
			errors: ["Password must be at leat 8 character long", "Password must contain at least one special caracter", "Password must contain at least one number", "Password must contain at least one uppercase letter", "Password must contain at least one lower case letter"],
			next: "Next!",
			goBack: "Go Back",
			submit: "Submit!",
			login: "LogIn!"
		},
		home: {
			firstTitle: "Our Games",
			firstText: "Welcome to our game development studio, where every pixel, every line of code, and every design choice is crafted with meticulous care and passion.At our studio, we believe that creating extraordinary games requires an unwavering dedication to detail and a deep understanding of player experiences. Our team comprises visionary designers, talented programmers, and creative artists who collaborate seamlessly to bring captivating worlds to life.",
			secondTitle: "The Process",
			secondText: "From the inception of an idea to the final product, our games undergo a journey marked by precision and innovation. We delve into the core of storytelling, gameplay mechanics, and visual aesthetics to ensure that each aspect harmoniously complements the others, delivering an immersive and unforgettable gaming experience. We meticulously design and iterate, pouring our creativity into every aspect of the game. Each element undergoes rigorous testing and refinement, guaranteeing a seamless and enjoyable experience for our players.",
		},
		update: {
			emailTitle: "change Email",
			generalTitle: "change General Info",
			passwordTitle: "change Password",
			pictureTitle: "change Profile Picture",
			security: "Security",
			logout: "Delete Account",
			linkToIntra: "Link To Intra42",
			linkToGoogle: "Link To Google",
			intraLinkConfirm: "Do you really want to link your intra profile?",
			intraUnlinkConfirm: "Do you really want to Unlink your intra profile?",
			googleUnlinkConfirm: "Do you really want to Unlink your google profile?",
			googleLinkConfirm: "Do you really want to link your google profile?",
			confirmLogout: "are you sure that you want to perform delete your profile?",
			logoutError: "something went wrong try again...",
			
			firstName:	["First Name:", "first_name"],
			lastName:	["Last Name:", "last_name"],
			birthDate: ["Birth Date:", "birthdate"],
			username: ["Username:", "username"],
			profilePicture: ["Profile Picture:", "picture"],
			email: ["Email:", "email"],
			passwordErrors: ["password not correct"],
			password: ["Password:", "password"],
			oldPassword: ["Old Password:", "oldPassword"],
			newPassword: ["New Password:", "newPassword"],

			confirmNewPassword: ["Confirm password:", "confirmNewPassword"],
			intraAdviceLink: "Click the button to link your intra profile",
			googleAdviceLink: "Click the button to link your google profile",
			labelIntraLink: "Link 42 Account",
			labelGoogleLink: "Link Google Account",
			
			intraAdviceUnLink: "your intra profile is linked click the button to unlink",
			googleAdviceUnLink: "your google profile is linked click the button to unlink",
			labelIntraUnLink: "Unlink 42 Account",
			labelGoogleUnLink: "Unlink google Account",

			logoutAll: "Logout from all Devices",
			logoutAllBtn: "Logout",

			enableTfa: "Enable TFA",
			disableTfa: "Disable TFA",
			enableTfaMail: "Email",
			enableTfaApp: "App",

			qrSuggest: ["Scan the QR code With your App", "the code will be automatically added", "Insert the given displayed code end Submit"],
			emailSuggest: ["An Email has been sent Check you Inbox!", "insert the Code in the box below", "Submit and activate your 2FA"],
			insertTfaCode: "Insert Code:",
			showCode: "Show Code:",
			tempCode: "Nothing to Show yet",
			downloadKeys: "Download Recovery Keys",
			done: "Done!",
			sendEmail: "Send Email",
			submit: "Submit!",
			selectPhoto: "Select New Photo...",
		},
		displayUser: {
			userInfo: {
				firstName: "First Name",
				lastName: "Last Name",
				birthDate: "Birthdate",
				addFriend: "Add Friend",
				removeFriend: "Remove Friend",
				manageAccount: "Manage Account",
				pending: "Pending...",
			},
			matchHistory: "Match History",
			gameStats: ["Game Won","Game Lost","Tournament Won","Tournament Lost"],
			statisticTitle: "Statistics"
		},
		admin: {
			undoBan: "Undo Ban",
			banUser: "Ban User",
			makeModerator: "Make Moderator",
			deleteModerator: "Remove Moderator",
			deleteUser: "Delete User",
			removeUser: "Do you really want to delete ",
			manageUsers: "Manage Users",
			manageModerators: "Manage Moderators",
			manageBannedUsers: "Manage Banned Users",
		},
		matchHistory: {
			title: "'s Match History",
			tournamentDetails: "Get tournament Detais >>>",
		}

	},
	ita: {
		errorPage: {
			firstLine: "404 Pagina Non Trovata",
			secondLine: "Oops! Sembra che tu ti sia allontanato dal sentiero battuto."
		},
		navbar: {
			login: "Accedi",
			register: "Registrati",
			home: "Home",
			games: "Giochi",
			changeLanguage: "Cambia Lingua",
			changeStyle: "Cambia Stile",
			accountMenu: "Account",
			notification: "Notifiche",
			adminPage: "Pagina Amministratore",
			moderatorPage: "Pagina Moderatore",
			logout: "Esci",
			modern: "Modern",
			retro: "Retro",
			light: "Chiaro",
			dark: "Scuro",
			profile: "Profilo"
		},
		notification: {
			friendSection: "Richiesta di Amicizia",
			infoSection: "Notifica di Informazione",
			tournamentTitle: "Torneo",
			friendTitle: "Richiesta di Amicizia",
			friendBody: "Ti ha inviato una richiesta di amicizia",
			matchTitle: "Richiesta di Partita",
			enterTournament: "Accetta",
			rejectTournament: "Rifiuta",
			tournamentBody: "Partita in arrivo al torneo...",
			matchReqBody: "ti ha inviato una richiesta di partita"
		},
		pong2d: {
			advices: ["W: Su", "D: Giù", "P: Avvia la Partita!", "Se lasci la finestra o ricarichi la pagina perderai automaticamente!"],
			gameStart: "Premi >P< per Avviare la Partita!",
			gameWait: "In attesa che l'avversario avvii la partita...",
			playAgain: "Gioca di nuovo!",
			draw: "Hai Pareggiato",
			lost: "Hai Perso!",
			win: "Hai Vinto!",
			start: "avvia",
			pongQueue: "Coda Pong",
			enterQueue: "Entra!",
			pillStyle: "Scegli lo Stile della Palla",
			groundStyle: "Scegli lo Stile del Terreno",
			ballStyle: "Scegli lo Stile della Palla",
			searchingOpp: "Ricerca Avversario..."
		},
		passwordRecovery: {
			enterPassword: "Inserisci nuova password:"
		},
		game: {
			category: "Categoria: ",
			gameQueue: "Entra nella Nostra Coda",
			gameTournament: "Visualizza Tornei"
		},
		chatElement:{
			reqSent: "Richiesta Inviata!",
			restoreChat: "Invita",
			removeFriend: "Rimuovi Amico",
			cancelRequest: "Annulla Richiesta"
		},
		tournament: {
			title: "Lista dei Tornei",
			searchBtn: "Cerca!",
			displayName: "Nome Visualizzato",
			submitBtn: "Invia!",
			displayNameError: "Inserimento non valido, i caratteri validi sono A-Za-z0-9!?*@$~_- e la lunghezza è compresa tra 5 e 32 caratteri",
			invalidInput: "Input non valido",
			invalidPartecipants: "Input non valido, i numeri possibili sono 4, 8, 16...",
			invalidDateTime: "Puoi programmare il tuo torneo fino a un'ora!",
			tournamentSubmit: "Iscrizione al torneo effettuata con successo!",
			tournamentSubmitError: "Errore nell'iscrizione al torneo!",
			tournamentUnSubscribed: "Disiscrizione dal torneo effettuata con successo!",
			tournamentUnSubscribedError: "Errore nella disiscrizione dal torneo!",
			tournamentCreated: "Torneo creato con successo!",
			tournamentCreateError: "Errore nella creazione del torneo!",
			normalLimit: "almeno 5 caratteri e massimo 32",
			bigLimit: "almeno 5 caratteri e massimo 255",
			newTournament: {
				tTitle: "Crea Torneo",
				tName: "Nome Torneo:",
				tDescription: "Descrizione Torneo:",
				tDate: "Data di Inizio Torneo:",
				tPartecipants: "Massimo Partecipanti:",
				tCreate: "Crea!",
				tDisplayName: "Nome Visualizzato",
				tDate: "Data di Inizio",
				tTime: "Orario di Inizio"
			},
			tournamentCard: {
				dateLabel: "Data di Inizio: ",
				subScribe: "Iscriviti!",
				unSubscribe: "Disiscriviti"
			}
		},
		login: {
			emailValidated: "Email Validata con Successo",
			emailValidatedError: "Errore di Validazione dell'Email (riprova)",
			login: "Accedi",
			name: "Nome Utente: ",
			password: "Password: ",
			submit: "Invia!",
			register: "Non sei ancora registrato?",
			intraLogin: "Accedi",
			googleLogin: "Accedi",
			error: "Controlla le Informazioni Fornite",
			passwordRecovery: "Recupera la Tua Password",
			enterUsername: "Inserisci Nome Utente: ",
			getEmail: "Invia Email",
			insertTfaCode: "Inserisci Codice: ",
			bannedLogin: "Il tuo account è attualmente BLOCCATO!",
			forgotPassword: "Password Dimenticata?"
		},
		register: {
			register: "Registrati [1/3]",
			secondRegister: "Registrati [2/3]",
			thirdRegister: "Registrati [3/3]",
			firstName: ["Nome:", "nome"],
			lastName: ["Cognome:", "cognome"],
			birthDate: ["Data di Nascita:", "data_di_nascita"],
			username: ["Nome Utente:", "nome_utente"],
			profilePicture: ["Immagine:", "immagine"],
			email: ["Email:", "email"],
			password: ["Password:", "password"],
			confirmPassword: ["Conferma password:", "conferma_password"],
			flow1Errors: ["Non può essere vuoto", "già in uso", "Torna quando sei in difficoltà", "questa non è una email valida...", "carattere non valido inserito. I caratteri consentiti sono: A-Za-z0-9!?*@$~_-", "i caratteri consentiti sono: A-Za-z0-9 -"],
			flow2Errors: ["è l'età minima per essere registrati sul nostro sito web", "Torna quando sei in difficoltà"],
			errors: ["La password deve essere lunga almeno 8 caratteri", "La password deve contenere almeno un carattere speciale", "La password deve contenere almeno un numero", "La password deve contenere almeno una lettera maiuscola", "La password deve contenere almeno una lettera minuscola"],
			next: "Avanti!",
			goBack: "Indietro",
			submit: "Invia!",
			login: "Accedi!"
		},
		home: {
			firstTitle: "I Nostri Giochi",
			firstText: "Benvenuti nel nostro studio di sviluppo di giochi, dove ogni pixel, ogni riga di codice e ogni scelta di design è realizzata con cura e passione meticolosa. Nel nostro studio, crediamo che creare giochi straordinari richieda un'impeccabile dedizione ai dettagli e una profonda comprensione delle esperienze dei giocatori. Il nostro team è composto da designer visionari, programmatori talentuosi e artisti creativi che collaborano senza soluzione di continuità per dare vita a mondi avvincenti.",
			secondTitle: "Il Processo",
			secondText: "Dall'idea alla creazione finale, i nostri giochi attraversano un percorso contraddistinto da precisione e innovazione. Approfondiamo il nucleo della narrazione, delle meccaniche di gioco e dell'estetica visiva per garantire che ogni aspetto si completi armoniosamente, offrendo un'esperienza di gioco coinvolgente e indimenticabile. Progettiamo e iteriamo meticolosamente, riversando la nostra creatività in ogni aspetto del gioco. Ogni elemento viene sottoposto a rigorosi test e affinamenti, garantendo un'esperienza fluida e piacevole per i nostri giocatori."
		},
		update: {
			emailTitle: "Cambia Email",
			generalTitle: "Cambia Informazioni Generali",
			passwordTitle: "Cambia Password",
			pictureTitle: "Cambia Foto Profilo",
			security: "Sicurezza",
			logout: "Esci",
			linkToIntra: "Collegati a Intra42",
			linkToGoogle: "Collegati a Google",
			intraLinkConfirm: "Vuoi davvero collegare il tuo profilo intra?",
			intraUnlinkConfirm: "Vuoi davvero scollegare il tuo profilo intra?",
			googleUnlinkConfirm: "Vuoi davvero scollegare il tuo profilo Google?",
			googleLinkConfirm: "Vuoi davvero collegare il tuo profilo Google?",
			confirmLogout: "Sei sicuro di voler eseguire il logout?",
			logoutError: "Qualcosa è andato storto, riprova...",
			firstName: ["Nome:", "nome"],
			lastName: ["Cognome:", "cognome"],
			birthDate: ["Data di Nascita:", "data_di_nascita"],
			username: ["Nome Utente:", "nome_utente"],
			profilePicture: ["Foto Profilo:", "immagine"],
			email: ["Email:", "email"],
			passwordErrors: ["password non corretta"],
			password: ["Password:", "password"],
			oldPassword: ["Vecchia Password:", "vecchia_password"],
			newPassword: ["Nuova Password:", "nuova_password"],
			confirmNewPassword: ["Conferma password:", "conferma_nuova_password"],
			intraAdviceLink: "Clicca sul pulsante per collegare il tuo profilo intra",
			googleAdviceLink: "Clicca sul pulsante per collegare il tuo profilo Google",
			labelIntraLink: "Collega Account 42",
			labelGoogleLink: "Collega Account Google",
			intraAdviceUnLink: "il tuo profilo intra è collegato, clicca sul pulsante per scollegarlo",
			googleAdviceUnLink: "il tuo profilo Google è collegato, clicca sul pulsante per scollegarlo",
			labelIntraUnLink: "Scollega Account 42",
			labelGoogleUnLink: "Scollega Account Google",
			logoutAll: "Esci da tutti i Dispositivi",
			logoutAllBtn: "Esci",
			enableTfa: "Abilita TFA",
			disableTfa: "Disabilita TFA",
			enableTfaMail: "Email",
			enableTfaApp: "App",
			qrSuggest: ["Scansiona il codice QR con la tua App", "il codice verrà aggiunto automaticamente", "Inserisci il codice visualizzato e Invia"],
			emailSuggest: ["È stata inviata una email, controlla la tua casella di posta!", "inserisci il codice nella casella sottostante", "Invia e attiva il tuo 2FA"],
			insertTfaCode: "Inserisci Codice:",
			showCode: "Mostra Codice:",
			tempCode: "Niente da Mostrare ancora",
			downloadKeys: "Scarica Chiavi di Recupero",
			done: "Fatto!",
			sendEmail: "Invia Email",
			submit: "Invia!",
			selectPhoto: "Seleziona Nuova Foto..."
		},
		displayUser: {
			userInfo: {
				firstName: "Nome",
				lastName: "Cognome",
				birthDate: "Data di Nascita",
				addFriend: "Aggiungi Amico",
				removeFriend: "Rimuovi Amico",
				manageAccount: "Gestisci Account",
				pending: "In sospeso..."
			},
			matchHistory: "Cronologia Partite",
			gameStats: ["Partite Vinte","Partite Perse","Tornei Vinti","Tornei Persi"],
			statisticTitle: "Statistiche"
		},
		admin: {
			undoBan: "Annulla Ban",
			banUser: "Banna Utente",
			makeModerator: "Rendi Moderatore",
			deleteModerator: "Rimuovi Moderatore",
			deleteUser: "Elimina Utente",
			removeUser: "Vuoi davvero eliminare ",
			manageUsers: "Gestisci Utenti",
			manageModerators: "Gestisci Moderatori",
			manageBannedUsers: "Gestisci Utenti Bannati"
		},
		matchHistory: {
			title: " Cronologia Partite di ",
			tournamentDetails: "Dettagli Torneo >>>"
		}
	},
	esp: {
		errorPage: {
			firstLine: "404 Página no encontrada",
			secondLine: "¡Ups! Parece que te has desviado del camino trillado."
		},
		navbar: {
			login: "Iniciar sesión",
			register: "Registrarse",
			home: "Inicio",
			games: "Juegos",
			changeLanguage: "Cambiar idioma",
			changeStyle: "Cambiar estilo",
			accountMenu: "Cuenta",
			notification: "Notificación",
			adminPage: "Página de administrador",
			moderatorPage: "Página de moderador",
			logout: "Cerrar sesión",
			modern: "Moderno",
			retro: "Retro",
			light: "Claro",
			dark: "Oscuro",
			profile: "Perfil"
		},
		notification: {
			friendSection: "Solicitud de amistad",
			infoSection: "Notificación de información",
			tournamentTitle: "Torneo",
			friendTitle: "Solicitud de amistad",
			friendBody: "Te ha enviado una solicitud de amistad",
			matchTitle: "Solicitud de partida",
			enterTournament: "Aceptar",
			rejectTournament: "Rechazar",
			tournamentBody: "Partida entrante al torneo...",
			matchReqBody: "te ha enviado una solicitud de partida"
		},
		pong2d: {
			advices: ["W: Arriba", "D: Abajo", "P: ¡Comienza el juego!", "¡Si sales de la ventana o actualizas la página, perderás automáticamente!"],
			gameStart: "¡Presiona >P< para comenzar la partida!",
			gameWait: "Esperando a que el oponente comience la partida...",
			playAgain: "¡Jugar de nuevo!",
			draw: "Empataste",
			lost: "¡Perdiste!",
			win: "¡Ganaste!",
			start: "comenzar",
			pongQueue: "Cola de Pong",
			enterQueue: "¡Entrar!",
			pillStyle: "Elige el estilo de la píldora",
			groundStyle: "Elige el estilo del suelo",
			ballStyle: "Elige el estilo de la bola",
			searchingOpp: "Buscando oponente..."
		},
		passwordRecovery: {
			enterPassword: "Ingrese la nueva contraseña:"
		},
		game: {
			category: "Categoría: ",
			gameQueue: "Ingresa a nuestra cola",
			gameTournament: "Ver torneos"
		},
		chatElement:{
			reqSent: "¡Solicitud enviada!",
			restoreChat: "Invitar",
			removeFriend: "Eliminar amigo",
			cancelRequest: "Cancelar solicitud"
		},
		tournament: {
			title: "Lista de torneos",
			searchBtn: "¡Buscar!",
			displayName: "Nombre para mostrar",
			submitBtn: "¡Enviar!",
			displayNameError: "Entrada incorrecta, los caracteres válidos son A-Za-z0-9!?*@$~_- y la longitud está entre 5 y 32 caracteres",
			invalidInput: "Entrada no válida",
			invalidPartecipants: "Entrada no válida, los números posibles son 4, 8, 16...",
			invalidDateTime: "¡Puedes programar tu torneo hasta una hora!",
			tournamentSubmit: "¡Torneo inscrito con éxito!",
			tournamentSubmitError: "Error al unirse al torneo!",
			tournamentUnSubscribed: "¡Torneo cancelado con éxito!",
			tournamentUnSubscribedError: "Error al cancelar la inscripción al torneo!",
			tournamentCreated: "¡Torneo creado con éxito!",
			tournamentCreateError: "Error al crear el torneo!",
			normalLimit: "como mínimo 5 caracteres y máximo 32",
			bigLimit: "como mínimo 5 caracteres y máximo 255",
			newTournament: {
				tTitle: "Crear torneo",
				tName: "Nombre del torneo:",
				tDescription: "Descripción del torneo:",
				tDate: "Fecha de inicio del torneo:",
				tPartecipants: "Máx. participantes:",
				tCreate: "¡Crear!",
				tDisplayName: "Nombre para mostrar",
				tDate: "Fecha de inicio",
				tTime: "Hora de inicio"
			},
			tournamentCard: {
				dateLabel: "Fecha de inicio: ",
				subScribe: "¡Unirse!",
				unSubscribe: "Cancelar suscripción"
			}
		},
		login: {
			emailValidated: "Correo electrónico validado correctamente",
			emailValidatedError: "Error de validación del correo electrónico (inténtalo de nuevo)",
			login: "Iniciar sesión",
			name: "Nombre de usuario: ",
			password: "Contraseña: ",
			submit: "¡Enviar!",
			register: "¿Todavía no estás registrado?",
			intraLogin: "Iniciar sesión",
			googleLogin: "Iniciar sesión",
			error: "Verifique la información proporcionada",
			passwordRecovery: "Recupera tu contraseña",
			enterUsername: "Ingrese el nombre de usuario: ",
			getEmail: "Enviar correo electrónico",
			insertTfaCode: "Insertar código: ",
			bannedLogin: "¡Tu cuenta está actualmente BLOQUEADA!",
			forgotPassword: "¿Olvidaste la contraseña?"
		},
		register: {
			register: "Registrarse [1/3]",
			secondRegister: "Registrarse [2/3]",
			thirdRegister: "Registrarse [3/3]",
			firstName: ["Nombre:", "nombre"],
			lastName: ["Apellido:", "apellido"],
			birthDate: ["Fecha de nacimiento:", "fecha_nacimiento"],
			username: ["Nombre de usuario:", "nombre_usuario"],
			profilePicture: ["Foto:", "foto"],
			email: ["Correo electrónico:", "correo_electronico"],
			password: ["Contraseña:", "contraseña"],
			confirmPassword: ["Confirmar contraseña:", "confirmar_contraseña"],
			flow1Errors: ["No puede estar en blanco", "ya está en uso", "Vuelve cuando estés en problemas", "este no es un correo electrónico válido...", "se ha insertado un carácter no válido. Los permitidos son: A-Za-z0-9!?*@$~_-", "los caracteres permitidos son: A-Za-z0-9 -"],
			flow2Errors: ["es la edad mínima para registrarse en nuestro sitio web", "Vuelve cuando estés en problemas"],
			errors: ["La contraseña debe tener al menos 8 caracteres", "La contraseña debe contener al menos un carácter especial", "La contraseña debe contener al menos un número", "La contraseña debe contener al menos una letra mayúscula", "La contraseña debe contener al menos una letra minúscula"],
			next: "¡Siguiente!",
			goBack: "Volver",
			submit: "¡Enviar!",
			login: "¡Iniciar sesión!"
		},
		home: {
			firstTitle: "Nuestros juegos",
			firstText: "Bienvenido a nuestro estudio de desarrollo de juegos, donde cada píxel, cada línea de código y cada elección de diseño se elabora con cuidado meticuloso y pasión. En nuestro estudio, creemos que crear juegos extraordinarios requiere una dedicación inquebrantable a los detalles y una comprensión profunda de las experiencias de los jugadores. Nuestro equipo está formado por diseñadores visionarios, programadores talentosos y artistas creativos que colaboran sin problemas para dar vida a mundos cautivadores.",
			secondTitle: "El proceso",
			secondText: "Desde la concepción de una idea hasta el producto final, nuestros juegos atraviesan un viaje marcado por la precisión y la innovación. Exploramos el núcleo de la narrativa, las mecánicas de juego y la estética visual para garantizar que cada aspecto se complemente armoniosamente, ofreciendo una experiencia de juego inmersiva e inolvidable. Diseñamos e iteramos meticulosamente, volcando nuestra creatividad en cada aspecto del juego. Cada elemento se somete a rigurosas pruebas y refinamientos, garantizando una experiencia fluida y agradable para nuestros jugadores."
		},
		update: {
			emailTitle: "Cambiar correo electrónico",
			generalTitle: "Cambiar información general",
			passwordTitle: "Cambiar contraseña",
			pictureTitle: "Cambiar foto de perfil",
			security: "Seguridad",
			logout: "Cerrar sesión",
			linkToIntra: "Vincular a Intra42",
			linkToGoogle: "Vincular a Google",
			intraLinkConfirm: "¿Realmente quieres vincular tu perfil intra?",
			intraUnlinkConfirm: "¿Realmente quieres desvincular tu perfil intra?",
			googleUnlinkConfirm: "¿Realmente quieres desvincular tu perfil de Google?",
			googleLinkConfirm: "¿Realmente quieres vincular tu perfil de Google?",
			confirmLogout: "¿Estás seguro de que quieres cerrar sesión?",
			logoutError: "Algo salió mal, inténtalo de nuevo...",
			firstName: ["Nombre:", "nombre"],
			lastName: ["Apellido:", "apellido"],
			birthDate: ["Fecha de nacimiento:", "fecha_nacimiento"],
			username: ["Nombre de usuario:", "nombre_usuario"],
			profilePicture: ["Foto de perfil:", "foto_perfil"],
			email: ["Correo electrónico:", "correo_electronico"],
			passwordErrors: ["contraseña incorrecta"],
			password: ["Contraseña:", "contraseña"],
			oldPassword: ["Contraseña anterior:", "contraseña_anterior"],
			newPassword: ["Nueva contraseña:", "nueva_contraseña"],
			confirmNewPassword: ["Confirmar contraseña:", "confirmar_nueva_contraseña"],
			intraAdviceLink: "Haz clic en el botón para vincular tu perfil intra",
			googleAdviceLink: "Haz clic en el botón para vincular tu perfil de Google",
			labelIntraLink: "Vincular cuenta 42",
			labelGoogleLink: "Vincular cuenta de Google",
			intraAdviceUnLink: "Tu perfil intra está vinculado, haz clic en el botón para desvincularlo",
			googleAdviceUnLink: "Tu perfil de Google está vinculado, haz clic en el botón para desvincularlo",
			labelIntraUnLink: "Desvincular cuenta 42",
			labelGoogleUnLink: "Desvincular cuenta de Google",
			logoutAll: "Cerrar sesión en todos los dispositivos",
			logoutAllBtn: "Cerrar sesión",
			enableTfa: "Habilitar TFA",
			disableTfa: "Deshabilitar TFA",
			enableTfaMail: "Correo electrónico",
			enableTfaApp: "Aplicación",
			qrSuggest: ["Escanee el código QR con su aplicación", "el código se agregará automáticamente", "Inserte el código mostrado y Envíe"],
			emailSuggest: ["Se ha enviado un correo electrónico, ¡verifique su bandeja de entrada!", "inserte el código en el cuadro a continuación", "Enviar y activar su 2FA"],
			insertTfaCode: "Insertar código:",
			showCode: "Mostrar código:",
			tempCode: "Nada que mostrar aún",
			downloadKeys: "Descargar claves de recuperación",
			done: "¡Hecho!",
			sendEmail: "Enviar correo electrónico",
			submit: "¡Enviar!",
			selectPhoto: "Seleccionar nueva foto..."
		},
		displayUser: {
			userInfo: {
				firstName: "Nombre",
				lastName: "Apellido",
				birthDate: "Fecha de nacimiento",
				addFriend: "Agregar amigo",
				removeFriend: "Eliminar amigo",
				manageAccount: "Gestionar cuenta",
				pending: "Pendiente..."
			},
			matchHistory: "Historial de partidas",
			gameStats: ["Partidas ganadas","Partidas perdidas","Torneos ganados","Torneos perdidos"],
			statisticTitle: "Estadísticas"
		},
		admin: {
			undoBan: "Deshacer prohibición",
			banUser: "Prohibir usuario",
			makeModerator: "Hacer moderador",
			deleteModerator: "Eliminar moderador",
			deleteUser: "Eliminar usuario",
			removeUser: "¿Realmente quieres eliminar ",
			manageUsers: "Gestionar usuarios",
			manageModerators: "Gestionar moderadores",
			manageBannedUsers: "Gestionar usuarios prohibidos"
		},
		matchHistory: {
			title: " Historial de partidas de ",
			tournamentDetails: "Detalles del torneo >>>"
		}
	},
	fr: {
		errorPage: {
			firstLine: "404 Page non trouvée",
			secondLine: "Oups ! Il semble que vous vous soyez égaré du chemin habituel."
		},
		navbar: {
			login: "Se connecter",
			register: "S'inscrire",
			home: "Accueil",
			games: "Jeux",
			changeLanguage: "Changer de langue",
			changeStyle: "Changer de style",
			accountMenu: "Compte",
			notification: "Notification",
			adminPage: "Page d'administration",
			moderatorPage: "Page de modération",
			logout: "Se déconnecter",
			modern: "Moderne",
			retro: "Rétro",
			light: "Clair",
			dark: "Sombre",
			profile: "Profil"
		},
		notification: {
			friendSection: "Demande d'ami",
			infoSection: "Notification d'information",
			tournamentTitle: "Tournoi",
			friendTitle: "Demande d'ami",
			friendBody: "Vous a envoyé une demande d'ami",
			matchTitle: "Demande de partie",
			enterTournament: "Accepter",
			rejectTournament: "Rejeter",
			tournamentBody: "Partie de tournoi entrante...",
			matchReqBody: "vous a envoyé une demande de partie"
		},
		pong2d: {
			advices: ["Z : Monter", "S : Descendre", "P : Démarrer le jeu !", "Si vous quittez la fenêtre ou actualisez la page, vous perdrez automatiquement !"],
			gameStart: "Appuyez sur >P< pour démarrer le match !",
			gameWait: "En attente que l'adversaire commence le match...",
			playAgain: "Rejouer !",
			draw: "Match nul",
			lost: "Vous avez perdu !",
			win: "Vous avez gagné !",
			start: "démarrer",
			pongQueue: "File d'attente de Pong",
			enterQueue: "Entrer !",
			pillStyle: "Choisissez le style de la pilule",
			groundStyle: "Choisissez le style du sol",
			ballStyle: "Choisissez le style de la balle",
			searchingOpp: "Recherche d'adversaire..."
		},
		passwordRecovery: {
			enterPassword: "Entrez le nouveau mot de passe :"
		},
		game: {
			category: "Catégorie : ",
			gameQueue: "Rejoignez notre file d'attente",
			gameTournament: "Voir les tournois"
		},
		chatElement:{
			reqSent: "Demande envoyée !",
			restoreChat: "Inviter",
			removeFriend: "Supprimer l'ami",
			cancelRequest: "Annuler la demande"
		},
		tournament: {
			title: "Liste des tournois",
			searchBtn: "Rechercher !",
			displayName: "Nom à afficher",
			submitBtn: "Soumettre !",
			displayNameError: "Mauvaise entrée, les caractères valides sont A-Za-z0-9!?*@$~_- et la longueur doit être comprise entre 5 et 32 caractères",
			invalidInput: "Entrée invalide",
			invalidPartecipants: "Entrée invalide, les nombres possibles sont 4, 8, 16...",
			invalidDateTime: "Vous pouvez programmer votre tournoi jusqu'à une heure !",
			tournamentSubmit: "Tournament inscrit avec succès !",
			tournamentSubmitError: "Erreur lors de la participation au tournoi !",
			tournamentUnSubscribed: "Tournoi annulé avec succès !",
			tournamentUnSubscribedError: "Erreur lors de l'annulation de l'inscription au tournoi !",
			tournamentCreated: "Tournoi créé avec succès !",
			tournamentCreateError: "Erreur lors de la création du tournoi !",
			normalLimit: "au moins 5 caractères et au maximum 32",
			bigLimit: "au moins 5 caractères et au maximum 255",
			newTournament: {
				tTitle: "Créer un tournoi",
				tName: "Nom du tournoi :",
				tDescription: "Description du tournoi :",
				tDate: "Date de début du tournoi :",
				tPartecipants: "Max. participants :",
				tCreate: "Créer !",
				tDisplayName: "Nom à afficher",
				tDate: "Date de début",
				tTime: "Heure de début"
			},
			tournamentCard: {
				dateLabel: "Date de début : ",
				subScribe: "S'inscrire !",
				unSubscribe: "Annuler l'abonnement"
			}
		},
		login: {
			emailValidated: "Email validé avec succès",
			emailValidatedError: "Erreur de validation de l'e-mail (réessayez)",
			login: "Se connecter",
			name: "Nom d'utilisateur : ",
			password: "Mot de passe : ",
			submit: "Soumettre !",
			register: "Pas encore inscrit ?",
			intraLogin: "Se connecter",
			googleLogin: "Se connecter",
			error: "Vérifiez les informations fournies",
			passwordRecovery: "Récupérez votre mot de passe",
			enterUsername: "Entrez le nom d'utilisateur : ",
			getEmail: "Envoyer un e-mail",
			insertTfaCode: "Insérer le code : ",
			bannedLogin: "Votre compte est actuellement BANNI !",
			forgotPassword: "Mot de passe oublié ?"
		},
		register: {
			register: "S'inscrire [1/3]",
			secondRegister: "S'inscrire [2/3]",
			thirdRegister: "S'inscrire [3/3]",
			firstName: ["Prénom :", "prenom"],
			lastName: ["Nom de famille :", "nom_de_famille"],
			birthDate: ["Date de naissance :", "date_de_naissance"],
			username: ["Nom d'utilisateur :", "nom_utilisateur"],
			profilePicture: ["Image :", "image"],
			email: ["E-mail :", "email"],
			password: ["Mot de passe :", "mot_de_passe"],
			confirmPassword: ["Confirmer le mot de passe :", "confirmer_mot_de_passe"],
			flow1Errors: ["Ne peut pas être vide", "déjà utilisé", "Revenez quand vous êtes en difficulté", "ceci n'est pas un e-mail valide...", "mauvais caractère inséré. Ceux autorisés sont : A-Za-z0-9!?*@$~_-", "les caractères autorisés sont : A-Za-z0-9 -"],
			flow2Errors: ["est l'âge minimum pour être inscrit sur notre site web", "Revenez quand vous êtes en difficulté"],
			errors: ["Le mot de passe doit comporter au moins 8 caractères", "Le mot de passe doit contenir au moins un caractère spécial", "Le mot de passe doit contenir au moins un chiffre", "Le mot de passe doit contenir au moins une lettre majuscule", "Le mot de passe doit contenir au moins une lettre minuscule"],
			next: "Suivant !",
			goBack: "Retourner",
			submit: "Soumettre !",
			login: "Se connecter !"
		},
		home: {
			firstTitle: "Nos jeux",
			firstText: "Bienvenue dans notre studio de développement de jeux, où chaque pixel, chaque ligne de code et chaque choix de design sont élaborés avec un soin méticuleux et une passion débordante. Dans notre studio, nous croyons que créer des jeux extraordinaires nécessite un dévouement inébranlable aux détails et une compréhension profonde des expériences des joueurs. Notre équipe est composée de concepteurs visionnaires, de programmeurs talentueux et d'artistes créatifs qui collaborent harmonieusement pour donner vie à des mondes captivants.",
			secondTitle: "Le processus",
			secondText: "De l'idée initiale au produit final, nos jeux parcourent un voyage marqué par la précision et l'innovation. Nous explorons le cœur de la narration, les mécaniques de jeu et l'esthétique visuelle pour nous assurer que chaque aspect se complète harmonieusement, offrant une expérience de jeu immersive et inoubliable. Nous concevons et itérons méticuleusement, en versant notre créativité dans chaque aspect du jeu. Chaque élément est soumis à des tests rigoureux et à des raffinements, garantissant une expérience fluide et agréable pour nos joueurs."
		},
		update: {
			emailTitle: "Changer d'e-mail",
			generalTitle: "Modifier les informations générales",
			passwordTitle: "Changer le mot de passe",
			pictureTitle: "Changer la photo de profil",
			security: "Sécurité",
			logout: "Se déconnecter",
			linkToIntra: "Lier à Intra42",
			linkToGoogle: "Lier à Google",
			intraLinkConfirm: "Voulez-vous vraiment lier votre profil intra ?",
			intraUnlinkConfirm: "Voulez-vous vraiment dissocier votre profil intra ?",
			googleUnlinkConfirm: "Voulez-vous vraiment dissocier votre profil Google ?",
			googleLinkConfirm: "Voulez-vous vraiment lier votre profil Google ?",
			confirmLogout: "Êtes-vous sûr de vouloir vous déconnecter ?",
			logoutError: "Quelque chose s'est mal passé, veuillez réessayer...",
			firstName: ["Prénom :", "prenom"],
			lastName: ["Nom de famille :", "nom_de_famille"],
			birthDate: ["Date de naissance :", "date_de_naissance"],
			username: ["Nom d'utilisateur :", "nom_utilisateur"],
			profilePicture: ["Photo de profil :", "photo_de_profil"],
			email: ["E-mail :", "email"],
			passwordErrors: ["mot de passe incorrect"],
			password: ["Mot de passe actuel :", "mot_de_passe_actuel"],
			oldPassword: ["Ancien mot de passe :", "ancien_mot_de_passe"],
			newPassword: ["Nouveau mot de passe :", "nouveau_mot_de_passe"],
			confirmNewPassword: ["Confirmer le nouveau mot de passe :", "confirmer_nouveau_mot_de_passe"],
			intraAdviceLink: "Cliquez sur le bouton pour lier votre profil intra",
			googleAdviceLink: "Cliquez sur le bouton pour lier votre profil Google",
			labelIntraLink: "Lier le compte 42",
			labelGoogleLink: "Lier le compte Google",
			intraAdviceUnLink: "Votre profil intra est lié, cliquez sur le bouton pour le dissocier",
			googleAdviceUnLink: "Votre profil Google est lié, cliquez sur le bouton pour le dissocier",
			labelIntraUnLink: "Dissocier le compte 42",
			labelGoogleUnLink: "Dissocier le compte Google",
			logoutAll: "Se déconnecter de tous les appareils",
			logoutAllBtn: "Se déconnecter",
			enableTfa: "Activer TFA",
			disableTfa: "Désactiver TFA",
			enableTfaMail: "E-mail",
			enableTfaApp: "Application",
			qrSuggest: ["Scannez le code QR avec votre application", "le code sera automatiquement ajouté", "Insérez le code affiché et soumettez"],
			emailSuggest: ["Un e-mail a été envoyé, vérifiez votre boîte de réception !", "insérez le code dans la case ci-dessous", "Envoyez et activez votre 2FA"],
			insertTfaCode: "Insérer le code :",
			showCode: "Afficher le code :",
			tempCode: "Rien à afficher pour le moment",
			downloadKeys: "Télécharger les clés de récupération",
			done: "Terminé !",
			sendEmail: "Envoyer un e-mail",
			submit: "Soumettre !",
			selectPhoto: "Sélectionner une nouvelle photo..."
		},
		displayUser: {
			userInfo: {
				firstName: "Prénom",
				lastName: "Nom de famille",
				birthDate: "Date de naissance",
				addFriend: "Ajouter un ami",
				removeFriend: "Supprimer un ami",
				manageAccount: "Gérer le compte",
				pending: "En attente..."
			},
			matchHistory: "Historique des parties",
			gameStats: ["Parties gagnées","Parties perdues","Tournois gagnés","Tournois perdus"],
			statisticTitle: "Statistiques"
		},
		admin: {
			undoBan: "Annuler l'interdiction",
			banUser: "Interdire l'utilisateur",
			makeModerator: "Rendre modérateur",
			deleteModerator: "Supprimer le modérateur",
			deleteUser: "Supprimer l'utilisateur",
			removeUser: "Voulez-vous vraiment supprimer ",
			manageUsers: "Gérer les utilisateurs",
			manageModerators: "Gérer les modérateurs",
			manageBannedUsers: "Gérer les utilisateurs bannis"
		},
		matchHistory: {
			title: " Historique des parties de ",
			tournamentDetails: "Détails du tournoi >>>"
		}
	}
	
	
}	

export default language