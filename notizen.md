Forschungwoche 2012 : node.js 
=============================

## Was ist node.js

Node.js (kurz Node) ist ein event-getriebener Server (in C) der die V8-javascript-Engine von Google verwendet.
Zusätzlich fügt node Dateisystem Operationen hinzu.

Threaded System: 
n-Threads, einen pro Request. Wartet eigentlich auch nur. Speicherverbrauch hoch.
Apache: Multi-Threaded (weniger Speicherverbrauch, hohe Contextswitch Kosten für die CPU) 
oder pre-fork (n-Stück Apache (komplett), multiprocess)

Multiple Processes:
Prozesse warten auch nur, aber weniger Speicherverbrauch.

Eventgetrieben = Ein Thread (Eventloop)
"sleep" würde den Server anhalten!

- Javascript auf server und client möglich.
- Daten werden immer gestreamt, nie gebuffert.
- Alles was nicht non-blocking geht -> eigener Thread mit callbacks auf eine pipe
- EventEmitter (aka. Messaging/Event System) reagiert/agiert

INNERHALB EINES REQUESTS IST NICHTS PARALLEL MÖGLICH, aber da IO asynchron ist macht das nichts.

Vorgaben von Node:
- Alle Operationen sollen asynchron möglich sein (callbacks/Events)
- CPU intensive arbeit => anderer Process
- Operationen sollen sehr schnell "zurückkehren"

Request Model:
REQUEST -> DB QUERY ----- WARTEN ----> RESULT ----> LOGFILE --> WARTEN --> RESPONSE
Node "kehrt zurück" während des WARTENs und verarbeitet andere Requests

app_1_file_io!  Asynchron

app_2_webserver! Transfer-Encoding: chunked
- Hässlicher Code
- Was ist mit HTML-Generierung

app_3_express
- Paketmanagement via npm
- debugging? node-inspector!
- auto-restart? nodemon

app_4_mysql
- mariadb (Warum? non-blocking IO client)




