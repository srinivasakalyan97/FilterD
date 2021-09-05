import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'filterz';
  employees = [
    {
      "e_id": "6134dabb55902c1665494db1",
      "e_name": "Nichols Sharp",
      "email": "nicholssharp@idego.com",
      "e_city": "LA",
      "e_dept": "IT",
      "e_floor": 3
    },
    {
      "e_id": "6134dabb1bf371ce514860d8",
      "e_name": "Trina Marsh",
      "email": "trinamarsh@idego.com",
      "e_city": "WA",
      "e_dept": "Admin",
      "e_floor": 3
    },
    {
      "e_id": "6134dabb68bf6de41d895c2d",
      "e_name": "Marjorie Garza",
      "email": "marjoriegarza@idego.com",
      "e_city": "WA",
      "e_dept": "Finance",
      "e_floor": 1
    },
    {
      "e_id": "6134dabbab4c1fe83202d50e",
      "e_name": "Vicki Russell",
      "email": "vickirussell@idego.com",
      "e_city": "LA",
      "e_dept": "Admin",
      "e_floor": 3
    },
    {
      "e_id": "6134dabb06aa78a0191e94cc",
      "e_name": "Gates Michael",
      "email": "gatesmichael@idego.com",
      "e_city": "SA",
      "e_dept": "Admin",
      "e_floor": 1
    },
    {
      "e_id": "6134dabb2b89b91917dd613a",
      "e_name": "Victoria Hyde",
      "email": "victoriahyde@idego.com",
      "e_city": "ON",
      "e_dept": "Admin",
      "e_floor": 2
    },
    {
      "e_id": "6134dabbb43c831758c2ec01",
      "e_name": "Lacey Carroll",
      "email": "laceycarroll@idego.com",
      "e_city": "ON",
      "e_dept": "IT",
      "e_floor": 2
    },
    {
      "e_id": "6134dabb75cce112a53ac04c",
      "e_name": "Daniel Howe",
      "email": "danielhowe@idego.com",
      "e_city": "SF",
      "e_dept": "Finance",
      "e_floor": 2
    },
    {
      "e_id": "6134dabb26083b842998963a",
      "e_name": "Carney Nguyen",
      "email": "carneynguyen@idego.com",
      "e_city": "LA",
      "e_dept": "Finance",
      "e_floor": 2
    },
    {
      "e_id": "6134dabbb9b94609e71a0eb6",
      "e_name": "Claudia Daniel",
      "email": "claudiadaniel@idego.com",
      "e_city": "SF",
      "e_dept": "Admin",
      "e_floor": 3
    },
    {
      "e_id": "6134dabb979eace06ffd3c25",
      "e_name": "Wall Gamble",
      "email": "wallgamble@idego.com",
      "e_city": "ON",
      "e_dept": "Admin",
      "e_floor": 1
    },
    {
      "e_id": "6134dabbfd8df1d046485f09",
      "e_name": "Marguerite Stanley",
      "email": "margueritestanley@idego.com",
      "e_city": "NYC",
      "e_dept": "IT",
      "e_floor": 2
    },
    {
      "e_id": "6134dabb0db5fe0f2b3d8e7d",
      "e_name": "Tammy Bradford",
      "email": "tammybradford@idego.com",
      "e_city": "LA",
      "e_dept": "Admin",
      "e_floor": 3
    },
    {
      "e_id": "6134dabbf936a60ee455a909",
      "e_name": "Padilla Paul",
      "email": "padillapaul@idego.com",
      "e_city": "SA",
      "e_dept": "IT",
      "e_floor": 3
    },
    {
      "e_id": "6134dabb04c9322e893680e2",
      "e_name": "Webb Taylor",
      "email": "webbtaylor@idego.com",
      "e_city": "SA",
      "e_dept": "IT",
      "e_floor": 3
    },
    {
      "e_id": "6134dabb6559ded41a585d90",
      "e_name": "Kirsten Ortiz",
      "email": "kirstenortiz@idego.com",
      "e_city": "WA",
      "e_dept": "IT",
      "e_floor": 2
    },
    {
      "e_id": "6134dabb66f6cd0fe4044e50",
      "e_name": "Harvey Burke",
      "email": "harveyburke@idego.com",
      "e_city": "NYC",
      "e_dept": "Admin",
      "e_floor": 3
    },
    {
      "e_id": "6134dabb34fb2d84fbaf645f",
      "e_name": "Adela Estes",
      "email": "adelaestes@idego.com",
      "e_city": "SF",
      "e_dept": "Finance",
      "e_floor": 1
    },
    {
      "e_id": "6134dabbfc377745f6b4209b",
      "e_name": "Michelle Moore",
      "email": "michellemoore@idego.com",
      "e_city": "NYC",
      "e_dept": "IT",
      "e_floor": 3
    },
    {
      "e_id": "6134dabbb4725821af69a453",
      "e_name": "Valerie Johns",
      "email": "valeriejohns@idego.com",
      "e_city": "WA",
      "e_dept": "Finance",
      "e_floor": 2
    },
    {
      "e_id": "6134dabbe60fa5102ba7eb83",
      "e_name": "Veronica Neal",
      "email": "veronicaneal@idego.com",
      "e_city": "LA",
      "e_dept": "Admin",
      "e_floor": 1
    },
    {
      "e_id": "6134dabb777b4d12cc8af8e8",
      "e_name": "Skinner Gallegos",
      "email": "skinnergallegos@idego.com",
      "e_city": "SA",
      "e_dept": "Finance",
      "e_floor": 3
    },
    {
      "e_id": "6134dabb8f805931487897bd",
      "e_name": "Lawson Warren",
      "email": "lawsonwarren@idego.com",
      "e_city": "WA",
      "e_dept": "Finance",
      "e_floor": 3
    },
    {
      "e_id": "6134dabbd29b268ced78f84a",
      "e_name": "Angeline Ryan",
      "email": "angelineryan@idego.com",
      "e_city": "NYC",
      "e_dept": "Admin",
      "e_floor": 3
    },
    {
      "e_id": "6134dabb233e7c04a677bb3d",
      "e_name": "Parsons Copeland",
      "email": "parsonscopeland@idego.com",
      "e_city": "ON",
      "e_dept": "IT",
      "e_floor": 1
    },
    {
      "e_id": "6134dabbb08679a0c93f4345",
      "e_name": "Barnett Pace",
      "email": "barnettpace@idego.com",
      "e_city": "NYC",
      "e_dept": "IT",
      "e_floor": 2
    },
    {
      "e_id": "6134dabbb0d79fe67192a342",
      "e_name": "Bridget Silva",
      "email": "bridgetsilva@idego.com",
      "e_city": "ON",
      "e_dept": "IT",
      "e_floor": 1
    },
    {
      "e_id": "6134dabbebefb0c41f306fc9",
      "e_name": "Kristina Gilbert",
      "email": "kristinagilbert@idego.com",
      "e_city": "SF",
      "e_dept": "Finance",
      "e_floor": 2
    },
    {
      "e_id": "6134dabb2f15ab9a3a893901",
      "e_name": "Randolph Walter",
      "email": "randolphwalter@idego.com",
      "e_city": "LA",
      "e_dept": "Admin",
      "e_floor": 2
    },
    {
      "e_id": "6134dabb39a7432615424531",
      "e_name": "Dolores Keller",
      "email": "doloreskeller@idego.com",
      "e_city": "WA",
      "e_dept": "IT",
      "e_floor": 2
    },
    {
      "e_id": "6134dabbe88f5913ea96aafd",
      "e_name": "Eloise Davidson",
      "email": "eloisedavidson@idego.com",
      "e_city": "ON",
      "e_dept": "IT",
      "e_floor": 3
    },
    {
      "e_id": "6134dabbb6b2309aa1624266",
      "e_name": "Cortez French",
      "email": "cortezfrench@idego.com",
      "e_city": "ON",
      "e_dept": "IT",
      "e_floor": 3
    },
    {
      "e_id": "6134dabb37495aa62b36e17f",
      "e_name": "Stephenson Bernard",
      "email": "stephensonbernard@idego.com",
      "e_city": "SA",
      "e_dept": "IT",
      "e_floor": 3
    },
    {
      "e_id": "6134dabb0129e80308b59629",
      "e_name": "Sosa Wise",
      "email": "sosawise@idego.com",
      "e_city": "SA",
      "e_dept": "Admin",
      "e_floor": 2
    },
    {
      "e_id": "6134dabb7dc2f473e9c582d4",
      "e_name": "Alexis Lamb",
      "email": "alexislamb@idego.com",
      "e_city": "ON",
      "e_dept": "Finance",
      "e_floor": 1
    },
    {
      "e_id": "6134dabb0e17c98249e94ea9",
      "e_name": "Ramsey Leblanc",
      "email": "ramseyleblanc@idego.com",
      "e_city": "WA",
      "e_dept": "Admin",
      "e_floor": 1
    },
    {
      "e_id": "6134dabba827577bd7379a5b",
      "e_name": "Mcfarland Obrien",
      "email": "mcfarlandobrien@idego.com",
      "e_city": "SF",
      "e_dept": "Finance",
      "e_floor": 1
    },
    {
      "e_id": "6134dabb04cfa3c19047ef77",
      "e_name": "Mueller Smith",
      "email": "muellersmith@idego.com",
      "e_city": "SA",
      "e_dept": "Finance",
      "e_floor": 3
    },
    {
      "e_id": "6134dabbb1688e5d96ae39a5",
      "e_name": "Warner Shields",
      "email": "warnershields@idego.com",
      "e_city": "WA",
      "e_dept": "IT",
      "e_floor": 1
    },
    {
      "e_id": "6134dabb1f1d0c8bc641015f",
      "e_name": "Byrd Mcpherson",
      "email": "byrdmcpherson@idego.com",
      "e_city": "WA",
      "e_dept": "Admin",
      "e_floor": 2
    },
    {
      "e_id": "6134dabbeaaa4340ce27dde8",
      "e_name": "Sharpe Grimes",
      "email": "sharpegrimes@idego.com",
      "e_city": "NYC",
      "e_dept": "Admin",
      "e_floor": 1
    },
    {
      "e_id": "6134dabb92fbc4886efac903",
      "e_name": "Briggs Ramirez",
      "email": "briggsramirez@idego.com",
      "e_city": "SF",
      "e_dept": "Admin",
      "e_floor": 2
    },
    {
      "e_id": "6134dabbf34cf6424d188329",
      "e_name": "Rosario Parker",
      "email": "rosarioparker@idego.com",
      "e_city": "ON",
      "e_dept": "IT",
      "e_floor": 2
    },
    {
      "e_id": "6134dabbed2d8a4afbf4c615",
      "e_name": "Garrett Hoffman",
      "email": "garretthoffman@idego.com",
      "e_city": "ON",
      "e_dept": "Admin",
      "e_floor": 2
    },
    {
      "e_id": "6134dabba7461d2b282fc05b",
      "e_name": "Faith Burton",
      "email": "faithburton@idego.com",
      "e_city": "SA",
      "e_dept": "Admin",
      "e_floor": 3
    },
    {
      "e_id": "6134dabb1c924b08c4d28dbf",
      "e_name": "Lancaster Cochran",
      "email": "lancastercochran@idego.com",
      "e_city": "SA",
      "e_dept": "IT",
      "e_floor": 1
    },
    {
      "e_id": "6134dabb2932fd83bfd964b2",
      "e_name": "Henry Preston",
      "email": "henrypreston@idego.com",
      "e_city": "LA",
      "e_dept": "Admin",
      "e_floor": 2
    },
    {
      "e_id": "6134dabbf194e39bdbf6b0cf",
      "e_name": "Traci Harding",
      "email": "traciharding@idego.com",
      "e_city": "WA",
      "e_dept": "Admin",
      "e_floor": 3
    },
    {
      "e_id": "6134dabbb08aab8557d312d1",
      "e_name": "Anna Vance",
      "email": "annavance@idego.com",
      "e_city": "SA",
      "e_dept": "Admin",
      "e_floor": 2
    },
    {
      "e_id": "6134dabb8740bdc4588943e5",
      "e_name": "Candy Bryant",
      "email": "candybryant@idego.com",
      "e_city": "WA",
      "e_dept": "Finance",
      "e_floor": 3
    },
    {
      "e_id": "6134dabb1e4c632ce9ff4d38",
      "e_name": "Shields Carter",
      "email": "shieldscarter@idego.com",
      "e_city": "LA",
      "e_dept": "IT",
      "e_floor": 2
    },
    {
      "e_id": "6134dabb1d93401d7fcf65c3",
      "e_name": "Monroe Boyd",
      "email": "monroeboyd@idego.com",
      "e_city": "WA",
      "e_dept": "Finance",
      "e_floor": 3
    },
    {
      "e_id": "6134dabb4b141ad78e544cd9",
      "e_name": "Deana Joyce",
      "email": "deanajoyce@idego.com",
      "e_city": "LA",
      "e_dept": "IT",
      "e_floor": 1
    },
    {
      "e_id": "6134dabb2a5348f0481f5287",
      "e_name": "Jackson Thompson",
      "email": "jacksonthompson@idego.com",
      "e_city": "WA",
      "e_dept": "IT",
      "e_floor": 2
    },
    {
      "e_id": "6134dabbcafb247972b2a153",
      "e_name": "Snyder Cook",
      "email": "snydercook@idego.com",
      "e_city": "WA",
      "e_dept": "Finance",
      "e_floor": 3
    },
    {
      "e_id": "6134dabbc934d983bcc8eb4d",
      "e_name": "Belinda Dotson",
      "email": "belindadotson@idego.com",
      "e_city": "NYC",
      "e_dept": "IT",
      "e_floor": 1
    },
    {
      "e_id": "6134dabb3a56678e10ceab5e",
      "e_name": "Cunningham Butler",
      "email": "cunninghambutler@idego.com",
      "e_city": "WA",
      "e_dept": "Admin",
      "e_floor": 3
    },
    {
      "e_id": "6134dabb5822e63bed96f0ee",
      "e_name": "Lorena Knight",
      "email": "lorenaknight@idego.com",
      "e_city": "NYC",
      "e_dept": "Admin",
      "e_floor": 3
    },
    {
      "e_id": "6134dabb63bd0bc822d218e2",
      "e_name": "Sargent Powers",
      "email": "sargentpowers@idego.com",
      "e_city": "NYC",
      "e_dept": "IT",
      "e_floor": 1
    },
    {
      "e_id": "6134dabbf8769b74f2fa2dd2",
      "e_name": "Dodson Tanner",
      "email": "dodsontanner@idego.com",
      "e_city": "WA",
      "e_dept": "IT",
      "e_floor": 1
    },
    {
      "e_id": "6134dabb8300f5b6cded143f",
      "e_name": "Mandy Rhodes",
      "email": "mandyrhodes@idego.com",
      "e_city": "LA",
      "e_dept": "IT",
      "e_floor": 3
    },
    {
      "e_id": "6134dabbd2139d8bc38662f0",
      "e_name": "Wendy Durham",
      "email": "wendydurham@idego.com",
      "e_city": "NYC",
      "e_dept": "Finance",
      "e_floor": 1
    },
    {
      "e_id": "6134dabbe063a2e0092df66e",
      "e_name": "Tricia Campbell",
      "email": "triciacampbell@idego.com",
      "e_city": "WA",
      "e_dept": "Admin",
      "e_floor": 2
    },
    {
      "e_id": "6134dabbc7357aeade388221",
      "e_name": "Rowena Sweeney",
      "email": "rowenasweeney@idego.com",
      "e_city": "LA",
      "e_dept": "Finance",
      "e_floor": 1
    },
    {
      "e_id": "6134dabbb7c84558c7f6bb3d",
      "e_name": "Gilliam Shaw",
      "email": "gilliamshaw@idego.com",
      "e_city": "WA",
      "e_dept": "Finance",
      "e_floor": 3
    },
    {
      "e_id": "6134dabbcdb4740f47525d00",
      "e_name": "Misty Donaldson",
      "email": "mistydonaldson@idego.com",
      "e_city": "NYC",
      "e_dept": "Admin",
      "e_floor": 2
    },
    {
      "e_id": "6134dabb88c2b0d143a697a1",
      "e_name": "Myers Rich",
      "email": "myersrich@idego.com",
      "e_city": "ON",
      "e_dept": "Admin",
      "e_floor": 3
    },
    {
      "e_id": "6134dabb41da5a42a327d95e",
      "e_name": "Terrie Mooney",
      "email": "terriemooney@idego.com",
      "e_city": "SA",
      "e_dept": "IT",
      "e_floor": 3
    },
    {
      "e_id": "6134dabbe4a713b683b34a30",
      "e_name": "Carissa Price",
      "email": "carissaprice@idego.com",
      "e_city": "ON",
      "e_dept": "Admin",
      "e_floor": 3
    },
    {
      "e_id": "6134dabb5e7e6b1e667bb56a",
      "e_name": "Sybil Terry",
      "email": "sybilterry@idego.com",
      "e_city": "ON",
      "e_dept": "Admin",
      "e_floor": 3
    },
    {
      "e_id": "6134dabb4dc5040302e55d7c",
      "e_name": "Benjamin Baker",
      "email": "benjaminbaker@idego.com",
      "e_city": "NYC",
      "e_dept": "Finance",
      "e_floor": 2
    },
    {
      "e_id": "6134dabbbe9d8e4a75f8a978",
      "e_name": "Alma Hensley",
      "email": "almahensley@idego.com",
      "e_city": "LA",
      "e_dept": "IT",
      "e_floor": 2
    },
    {
      "e_id": "6134dabb0c1cce266167a0ae",
      "e_name": "Florine Fisher",
      "email": "florinefisher@idego.com",
      "e_city": "NYC",
      "e_dept": "Admin",
      "e_floor": 3
    },
    {
      "e_id": "6134dabbce24797bbf5d4703",
      "e_name": "Maura Herman",
      "email": "mauraherman@idego.com",
      "e_city": "SA",
      "e_dept": "Admin",
      "e_floor": 3
    },
    {
      "e_id": "6134dabb640fab08c7d07d25",
      "e_name": "Krystal Britt",
      "email": "krystalbritt@idego.com",
      "e_city": "ON",
      "e_dept": "IT",
      "e_floor": 2
    },
    {
      "e_id": "6134dabb3ee5fb3583dd530b",
      "e_name": "Dolly Woodard",
      "email": "dollywoodard@idego.com",
      "e_city": "SF",
      "e_dept": "IT",
      "e_floor": 1
    },
    {
      "e_id": "6134dabb3a0cb43dcc250e0f",
      "e_name": "Baldwin Newman",
      "email": "baldwinnewman@idego.com",
      "e_city": "NYC",
      "e_dept": "Admin",
      "e_floor": 2
    },
    {
      "e_id": "6134dabb8349b4becb4d36dd",
      "e_name": "Emerson Gonzales",
      "email": "emersongonzales@idego.com",
      "e_city": "WA",
      "e_dept": "Finance",
      "e_floor": 2
    },
    {
      "e_id": "6134dabbe6b7e041b694a757",
      "e_name": "Marian Adams",
      "email": "marianadams@idego.com",
      "e_city": "SF",
      "e_dept": "IT",
      "e_floor": 3
    },
    {
      "e_id": "6134dabb8f1a9c6b915a5082",
      "e_name": "Schwartz Finley",
      "email": "schwartzfinley@idego.com",
      "e_city": "ON",
      "e_dept": "Admin",
      "e_floor": 3
    },
    {
      "e_id": "6134dabb3214341e3211ac18",
      "e_name": "Dollie English",
      "email": "dollieenglish@idego.com",
      "e_city": "SF",
      "e_dept": "IT",
      "e_floor": 2
    },
    {
      "e_id": "6134dabba45bd3a6ffd95c81",
      "e_name": "Harrington Bean",
      "email": "harringtonbean@idego.com",
      "e_city": "ON",
      "e_dept": "IT",
      "e_floor": 2
    },
    {
      "e_id": "6134dabb884555b8df0d8df2",
      "e_name": "Mcintosh Stanton",
      "email": "mcintoshstanton@idego.com",
      "e_city": "ON",
      "e_dept": "IT",
      "e_floor": 1
    },
    {
      "e_id": "6134dabbbef567ec92daf36f",
      "e_name": "Franks Lott",
      "email": "frankslott@idego.com",
      "e_city": "ON",
      "e_dept": "Finance",
      "e_floor": 2
    },
    {
      "e_id": "6134dabbea87f5f73d811343",
      "e_name": "Hurst Wiggins",
      "email": "hurstwiggins@idego.com",
      "e_city": "WA",
      "e_dept": "Admin",
      "e_floor": 3
    },
    {
      "e_id": "6134dabb0917e8fa15881885",
      "e_name": "Selma Chavez",
      "email": "selmachavez@idego.com",
      "e_city": "WA",
      "e_dept": "Finance",
      "e_floor": 1
    },
    {
      "e_id": "6134dabb9073052a7de6f62c",
      "e_name": "Candace Berger",
      "email": "candaceberger@idego.com",
      "e_city": "SF",
      "e_dept": "IT",
      "e_floor": 2
    },
    {
      "e_id": "6134dabb5bbae3742524ed2d",
      "e_name": "Callie Hatfield",
      "email": "calliehatfield@idego.com",
      "e_city": "NYC",
      "e_dept": "IT",
      "e_floor": 1
    },
    {
      "e_id": "6134dabba1cf172336981f6e",
      "e_name": "Holly Lee",
      "email": "hollylee@idego.com",
      "e_city": "WA",
      "e_dept": "Finance",
      "e_floor": 2
    },
    {
      "e_id": "6134dabb7e29c3ec6f9d3be6",
      "e_name": "Sherrie Horne",
      "email": "sherriehorne@idego.com",
      "e_city": "WA",
      "e_dept": "Finance",
      "e_floor": 2
    },
    {
      "e_id": "6134dabbeae869d6657cb26d",
      "e_name": "Maggie Freeman",
      "email": "maggiefreeman@idego.com",
      "e_city": "LA",
      "e_dept": "IT",
      "e_floor": 1
    },
    {
      "e_id": "6134dabb85b1f5d1786bd6fc",
      "e_name": "Marcia Marshall",
      "email": "marciamarshall@idego.com",
      "e_city": "SF",
      "e_dept": "Admin",
      "e_floor": 2
    },
    {
      "e_id": "6134dabb9280558e1a529ada",
      "e_name": "Rush Dejesus",
      "email": "rushdejesus@idego.com",
      "e_city": "ON",
      "e_dept": "IT",
      "e_floor": 3
    },
    {
      "e_id": "6134dabb118d2d19ed44f033",
      "e_name": "Bette Best",
      "email": "bettebest@idego.com",
      "e_city": "LA",
      "e_dept": "Admin",
      "e_floor": 2
    },
    {
      "e_id": "6134dabb2263c13f0af07202",
      "e_name": "Meghan Johnson",
      "email": "meghanjohnson@idego.com",
      "e_city": "ON",
      "e_dept": "Finance",
      "e_floor": 3
    },
    {
      "e_id": "6134dabb52770d0d8f7fb2b9",
      "e_name": "Gamble Carrillo",
      "email": "gamblecarrillo@idego.com",
      "e_city": "WA",
      "e_dept": "Finance",
      "e_floor": 2
    },
    {
      "e_id": "6134dabbefc757d740c3f854",
      "e_name": "Jeannette Mcbride",
      "email": "jeannettemcbride@idego.com",
      "e_city": "LA",
      "e_dept": "IT",
      "e_floor": 1
    },
    {
      "e_id": "6134dabba1f5fe6cf9090736",
      "e_name": "Decker Sanchez",
      "email": "deckersanchez@idego.com",
      "e_city": "ON",
      "e_dept": "IT",
      "e_floor": 1
    },
    {
      "e_id": "6134dabbc5b5a8dfeed15dcd",
      "e_name": "Rosetta Barnett",
      "email": "rosettabarnett@idego.com",
      "e_city": "LA",
      "e_dept": "Admin",
      "e_floor": 1
    },
    {
      "e_id": "6134dabb3b3611225d60d5c7",
      "e_name": "Laurie Knowles",
      "email": "laurieknowles@idego.com",
      "e_city": "ON",
      "e_dept": "IT",
      "e_floor": 1
    },
    {
      "e_id": "6134dabbb01a4141582ef499",
      "e_name": "Mccarthy Anderson",
      "email": "mccarthyanderson@idego.com",
      "e_city": "SF",
      "e_dept": "Finance",
      "e_floor": 2
    },
    {
      "e_id": "6134dabb5fbf5c7e86aa9ae0",
      "e_name": "Beasley Cherry",
      "email": "beasleycherry@idego.com",
      "e_city": "LA",
      "e_dept": "IT",
      "e_floor": 3
    },
    {
      "e_id": "6134dabb39a530b9ea6ec3a5",
      "e_name": "Young West",
      "email": "youngwest@idego.com",
      "e_city": "SF",
      "e_dept": "IT",
      "e_floor": 3
    },
    {
      "e_id": "6134dabbb7aaa286b779d8fc",
      "e_name": "Shana Hartman",
      "email": "shanahartman@idego.com",
      "e_city": "NYC",
      "e_dept": "Finance",
      "e_floor": 2
    },
    {
      "e_id": "6134dabb9296eda231737207",
      "e_name": "Rice Simpson",
      "email": "ricesimpson@idego.com",
      "e_city": "ON",
      "e_dept": "Admin",
      "e_floor": 3
    },
    {
      "e_id": "6134dabbcaca9dba8444fbe9",
      "e_name": "Kristine Andrews",
      "email": "kristineandrews@idego.com",
      "e_city": "LA",
      "e_dept": "Finance",
      "e_floor": 1
    },
    {
      "e_id": "6134dabbd4915cbc618d4179",
      "e_name": "Leila Cunningham",
      "email": "leilacunningham@idego.com",
      "e_city": "WA",
      "e_dept": "Finance",
      "e_floor": 1
    },
    {
      "e_id": "6134dabbdfd5e7cfdbad5679",
      "e_name": "Valencia Acevedo",
      "email": "valenciaacevedo@idego.com",
      "e_city": "ON",
      "e_dept": "IT",
      "e_floor": 1
    },
    {
      "e_id": "6134dabb19310a309ce08a23",
      "e_name": "Tillman Rocha",
      "email": "tillmanrocha@idego.com",
      "e_city": "ON",
      "e_dept": "Admin",
      "e_floor": 2
    },
    {
      "e_id": "6134dabb189c0c1b6ec8decb",
      "e_name": "Grimes Francis",
      "email": "grimesfrancis@idego.com",
      "e_city": "SA",
      "e_dept": "Admin",
      "e_floor": 2
    },
    {
      "e_id": "6134dabb2e7a05ac845d386a",
      "e_name": "Ginger Howard",
      "email": "gingerhoward@idego.com",
      "e_city": "WA",
      "e_dept": "IT",
      "e_floor": 3
    },
    {
      "e_id": "6134dabbeea51db86a0b9182",
      "e_name": "Keisha Rose",
      "email": "keisharose@idego.com",
      "e_city": "SA",
      "e_dept": "IT",
      "e_floor": 3
    },
    {
      "e_id": "6134dabb113e795be6ec4797",
      "e_name": "Susan Camacho",
      "email": "susancamacho@idego.com",
      "e_city": "SF",
      "e_dept": "Admin",
      "e_floor": 2
    },
    {
      "e_id": "6134dabb414bfa03424e9b8f",
      "e_name": "Sheryl Hernandez",
      "email": "sherylhernandez@idego.com",
      "e_city": "SF",
      "e_dept": "IT",
      "e_floor": 3
    },
    {
      "e_id": "6134dabbcb4b049a1449cdbc",
      "e_name": "Santana Robinson",
      "email": "santanarobinson@idego.com",
      "e_city": "SF",
      "e_dept": "Admin",
      "e_floor": 2
    },
    {
      "e_id": "6134dabb17c11c835f3623f8",
      "e_name": "Boyd Park",
      "email": "boydpark@idego.com",
      "e_city": "SA",
      "e_dept": "Admin",
      "e_floor": 3
    },
    {
      "e_id": "6134dabbac75e7b87e311eba",
      "e_name": "Berg Little",
      "email": "berglittle@idego.com",
      "e_city": "ON",
      "e_dept": "IT",
      "e_floor": 2
    },
    {
      "e_id": "6134dabbe92b2a94e43ce678",
      "e_name": "Kinney Stevenson",
      "email": "kinneystevenson@idego.com",
      "e_city": "LA",
      "e_dept": "Finance",
      "e_floor": 2
    },
    {
      "e_id": "6134dabb45b4424b6f76eac6",
      "e_name": "Reese Murphy",
      "email": "reesemurphy@idego.com",
      "e_city": "SF",
      "e_dept": "Finance",
      "e_floor": 2
    },
    {
      "e_id": "6134dabb55cc9942e1c9ee4f",
      "e_name": "Sheri Pitts",
      "email": "sheripitts@idego.com",
      "e_city": "SF",
      "e_dept": "Finance",
      "e_floor": 1
    },
    {
      "e_id": "6134dabb0e47e54fe48dc290",
      "e_name": "Mullins Higgins",
      "email": "mullinshiggins@idego.com",
      "e_city": "SF",
      "e_dept": "IT",
      "e_floor": 2
    },
    {
      "e_id": "6134dabbbe35d605e6992083",
      "e_name": "Hodge Casey",
      "email": "hodgecasey@idego.com",
      "e_city": "LA",
      "e_dept": "Finance",
      "e_floor": 3
    },
    {
      "e_id": "6134dabba87a06a9bb09bcfd",
      "e_name": "Thornton Brooks",
      "email": "thorntonbrooks@idego.com",
      "e_city": "LA",
      "e_dept": "Admin",
      "e_floor": 1
    },
    {
      "e_id": "6134dabbc38c516a50be99e5",
      "e_name": "Rena Justice",
      "email": "renajustice@idego.com",
      "e_city": "NYC",
      "e_dept": "IT",
      "e_floor": 1
    },
    {
      "e_id": "6134dabbfb8ef5e954378498",
      "e_name": "Kelli Bryan",
      "email": "kellibryan@idego.com",
      "e_city": "LA",
      "e_dept": "IT",
      "e_floor": 2
    },
    {
      "e_id": "6134dabb69ace711d69e565f",
      "e_name": "Robbins Holmes",
      "email": "robbinsholmes@idego.com",
      "e_city": "LA",
      "e_dept": "Finance",
      "e_floor": 3
    },
    {
      "e_id": "6134dabb4831a0a609f0eaba",
      "e_name": "Buck Aguirre",
      "email": "buckaguirre@idego.com",
      "e_city": "ON",
      "e_dept": "Finance",
      "e_floor": 3
    },
    {
      "e_id": "6134dabbf489f50f22021a18",
      "e_name": "Rosa Valdez",
      "email": "rosavaldez@idego.com",
      "e_city": "ON",
      "e_dept": "IT",
      "e_floor": 3
    },
    {
      "e_id": "6134dabbbfdae858e1185bb2",
      "e_name": "Olivia Trevino",
      "email": "oliviatrevino@idego.com",
      "e_city": "LA",
      "e_dept": "IT",
      "e_floor": 3
    },
    {
      "e_id": "6134dabb79b824b820d4e736",
      "e_name": "Ward Short",
      "email": "wardshort@idego.com",
      "e_city": "WA",
      "e_dept": "Admin",
      "e_floor": 3
    },
    {
      "e_id": "6134dabbf4b7caa5c2020fb2",
      "e_name": "Robin Larson",
      "email": "robinlarson@idego.com",
      "e_city": "WA",
      "e_dept": "IT",
      "e_floor": 2
    },
    {
      "e_id": "6134dabb2ea5284334a1b0d1",
      "e_name": "Beverley Burt",
      "email": "beverleyburt@idego.com",
      "e_city": "WA",
      "e_dept": "IT",
      "e_floor": 3
    },
    {
      "e_id": "6134dabb6bee2f49d5ab3b3f",
      "e_name": "Augusta Shaffer",
      "email": "augustashaffer@idego.com",
      "e_city": "ON",
      "e_dept": "IT",
      "e_floor": 3
    },
    {
      "e_id": "6134dabb14173dfcea96f7fc",
      "e_name": "Cabrera Reed",
      "email": "cabrerareed@idego.com",
      "e_city": "SA",
      "e_dept": "Finance",
      "e_floor": 2
    },
    {
      "e_id": "6134dabbc7b2d67750eb5687",
      "e_name": "Sanders Dorsey",
      "email": "sandersdorsey@idego.com",
      "e_city": "SF",
      "e_dept": "Finance",
      "e_floor": 2
    },
    {
      "e_id": "6134dabbb481f6722f66360f",
      "e_name": "Compton Gay",
      "email": "comptongay@idego.com",
      "e_city": "SA",
      "e_dept": "Admin",
      "e_floor": 2
    },
    {
      "e_id": "6134dabb6fb86409328f5ad7",
      "e_name": "Rose Whitney",
      "email": "rosewhitney@idego.com",
      "e_city": "LA",
      "e_dept": "IT",
      "e_floor": 3
    },
    {
      "e_id": "6134dabb25973fa33f1eb06f",
      "e_name": "Macias Kennedy",
      "email": "maciaskennedy@idego.com",
      "e_city": "NYC",
      "e_dept": "Admin",
      "e_floor": 2
    },
    {
      "e_id": "6134dabbf2003f4ebd5269ba",
      "e_name": "Deann Doyle",
      "email": "deanndoyle@idego.com",
      "e_city": "WA",
      "e_dept": "Finance",
      "e_floor": 2
    },
    {
      "e_id": "6134dabbfc1b3e93c56f6907",
      "e_name": "Glenn Swanson",
      "email": "glennswanson@idego.com",
      "e_city": "WA",
      "e_dept": "Finance",
      "e_floor": 1
    },
    {
      "e_id": "6134dabbcbf96d086793aa9e",
      "e_name": "Brock Jackson",
      "email": "brockjackson@idego.com",
      "e_city": "SA",
      "e_dept": "IT",
      "e_floor": 1
    },
    {
      "e_id": "6134dabb37787f63a331c9ae",
      "e_name": "Patti Massey",
      "email": "pattimassey@idego.com",
      "e_city": "WA",
      "e_dept": "Admin",
      "e_floor": 3
    },
    {
      "e_id": "6134dabbab74f6617fbab8c4",
      "e_name": "Lakisha Richards",
      "email": "lakisharichards@idego.com",
      "e_city": "LA",
      "e_dept": "Finance",
      "e_floor": 1
    },
    {
      "e_id": "6134dabbfd3d5cc96107a0b3",
      "e_name": "Burgess Perry",
      "email": "burgessperry@idego.com",
      "e_city": "LA",
      "e_dept": "Admin",
      "e_floor": 1
    },
    {
      "e_id": "6134dabba779a0528b3aeb00",
      "e_name": "Reid Townsend",
      "email": "reidtownsend@idego.com",
      "e_city": "LA",
      "e_dept": "IT",
      "e_floor": 1
    },
    {
      "e_id": "6134dabb740734dff340a105",
      "e_name": "Bird Logan",
      "email": "birdlogan@idego.com",
      "e_city": "ON",
      "e_dept": "IT",
      "e_floor": 1
    },
    {
      "e_id": "6134dabb7ab3a5cf706890a5",
      "e_name": "Oneill Alston",
      "email": "oneillalston@idego.com",
      "e_city": "NYC",
      "e_dept": "Admin",
      "e_floor": 2
    },
    {
      "e_id": "6134dabb3c149a7e32d86550",
      "e_name": "Flossie Zimmerman",
      "email": "flossiezimmerman@idego.com",
      "e_city": "LA",
      "e_dept": "Finance",
      "e_floor": 2
    },
    {
      "e_id": "6134dabb5b0a347d5ac45b90",
      "e_name": "Charity Slater",
      "email": "charityslater@idego.com",
      "e_city": "SF",
      "e_dept": "Admin",
      "e_floor": 3
    },
    {
      "e_id": "6134dabb995bcebf7485af5c",
      "e_name": "Francesca Stout",
      "email": "francescastout@idego.com",
      "e_city": "LA",
      "e_dept": "Finance",
      "e_floor": 2
    },
    {
      "e_id": "6134dabba1efcfc21ab7f368",
      "e_name": "Marianne Hammond",
      "email": "mariannehammond@idego.com",
      "e_city": "LA",
      "e_dept": "Finance",
      "e_floor": 1
    },
    {
      "e_id": "6134dabbf2c24549b8859480",
      "e_name": "Ronda Moses",
      "email": "rondamoses@idego.com",
      "e_city": "SF",
      "e_dept": "IT",
      "e_floor": 3
    },
    {
      "e_id": "6134dabbd5f1b77ab717e449",
      "e_name": "Copeland Vang",
      "email": "copelandvang@idego.com",
      "e_city": "ON",
      "e_dept": "Admin",
      "e_floor": 2
    },
    {
      "e_id": "6134dabb10fd287610b7b114",
      "e_name": "Marina Buckley",
      "email": "marinabuckley@idego.com",
      "e_city": "SA",
      "e_dept": "Admin",
      "e_floor": 2
    },
    {
      "e_id": "6134dabb1c1f14c648cfb234",
      "e_name": "Pennington Pratt",
      "email": "penningtonpratt@idego.com",
      "e_city": "SF",
      "e_dept": "IT",
      "e_floor": 3
    },
    {
      "e_id": "6134dabbb7e7d1a03549e4b1",
      "e_name": "Lynn Pickett",
      "email": "lynnpickett@idego.com",
      "e_city": "WA",
      "e_dept": "IT",
      "e_floor": 3
    },
    {
      "e_id": "6134dabb37ad0618b0de5535",
      "e_name": "Doreen Zamora",
      "email": "doreenzamora@idego.com",
      "e_city": "LA",
      "e_dept": "IT",
      "e_floor": 1
    },
    {
      "e_id": "6134dabb1c250bd9439bca2a",
      "e_name": "Mathews Perkins",
      "email": "mathewsperkins@idego.com",
      "e_city": "LA",
      "e_dept": "Finance",
      "e_floor": 1
    },
    {
      "e_id": "6134dabb8caf8eb6a1686834",
      "e_name": "Rosalyn Conner",
      "email": "rosalynconner@idego.com",
      "e_city": "NYC",
      "e_dept": "IT",
      "e_floor": 1
    },
    {
      "e_id": "6134dabbcbc22ea8c93af8b5",
      "e_name": "Mary Strong",
      "email": "marystrong@idego.com",
      "e_city": "SF",
      "e_dept": "Admin",
      "e_floor": 1
    },
    {
      "e_id": "6134dabbd1a8c49e9996865e",
      "e_name": "Eve Valencia",
      "email": "evevalencia@idego.com",
      "e_city": "SF",
      "e_dept": "Finance",
      "e_floor": 2
    },
    {
      "e_id": "6134dabba98795b4b446aac5",
      "e_name": "Mccoy Newton",
      "email": "mccoynewton@idego.com",
      "e_city": "SF",
      "e_dept": "Admin",
      "e_floor": 3
    },
    {
      "e_id": "6134dabbd7e13c6bac7958b2",
      "e_name": "Sanford Stokes",
      "email": "sanfordstokes@idego.com",
      "e_city": "WA",
      "e_dept": "IT",
      "e_floor": 2
    },
    {
      "e_id": "6134dabb634941f1bf90ea04",
      "e_name": "Penny Koch",
      "email": "pennykoch@idego.com",
      "e_city": "WA",
      "e_dept": "Finance",
      "e_floor": 2
    },
    {
      "e_id": "6134dabb61dd68fa8e8f74f2",
      "e_name": "Suzette Hobbs",
      "email": "suzettehobbs@idego.com",
      "e_city": "SA",
      "e_dept": "Finance",
      "e_floor": 3
    },
    {
      "e_id": "6134dabb3c7ee091d9881216",
      "e_name": "Delacruz Henderson",
      "email": "delacruzhenderson@idego.com",
      "e_city": "SA",
      "e_dept": "Admin",
      "e_floor": 2
    },
    {
      "e_id": "6134dabb0c1c6ccef0f21cfa",
      "e_name": "Day Patel",
      "email": "daypatel@idego.com",
      "e_city": "ON",
      "e_dept": "Finance",
      "e_floor": 3
    },
    {
      "e_id": "6134dabb3c50b5db3c9edf1e",
      "e_name": "Zimmerman Atkins",
      "email": "zimmermanatkins@idego.com",
      "e_city": "SF",
      "e_dept": "IT",
      "e_floor": 3
    },
    {
      "e_id": "6134dabbc1f0d3df35c38079",
      "e_name": "Sharon Clay",
      "email": "sharonclay@idego.com",
      "e_city": "NYC",
      "e_dept": "Finance",
      "e_floor": 2
    },
    {
      "e_id": "6134dabbf2ced6eada26aaa3",
      "e_name": "June Palmer",
      "email": "junepalmer@idego.com",
      "e_city": "ON",
      "e_dept": "IT",
      "e_floor": 2
    },
    {
      "e_id": "6134dabb409fe559805c2d61",
      "e_name": "Graves Pollard",
      "email": "gravespollard@idego.com",
      "e_city": "WA",
      "e_dept": "Finance",
      "e_floor": 2
    },
    {
      "e_id": "6134dabba6dcace1511c103d",
      "e_name": "Janine Hodge",
      "email": "janinehodge@idego.com",
      "e_city": "WA",
      "e_dept": "IT",
      "e_floor": 2
    },
    {
      "e_id": "6134dabba080f738baf127bb",
      "e_name": "Maxine Bentley",
      "email": "maxinebentley@idego.com",
      "e_city": "SA",
      "e_dept": "Finance",
      "e_floor": 2
    },
    {
      "e_id": "6134dabb0abf50aa17be0ec6",
      "e_name": "Melva Phelps",
      "email": "melvaphelps@idego.com",
      "e_city": "ON",
      "e_dept": "IT",
      "e_floor": 2
    },
    {
      "e_id": "6134dabbda67bd92f0dee5da",
      "e_name": "Jolene Richardson",
      "email": "jolenerichardson@idego.com",
      "e_city": "ON",
      "e_dept": "Finance",
      "e_floor": 2
    },
    {
      "e_id": "6134dabb0b74deed6413819b",
      "e_name": "Cameron Shepard",
      "email": "cameronshepard@idego.com",
      "e_city": "ON",
      "e_dept": "Finance",
      "e_floor": 2
    },
    {
      "e_id": "6134dabb87c3a228c8db13b6",
      "e_name": "Jannie Tran",
      "email": "jannietran@idego.com",
      "e_city": "WA",
      "e_dept": "IT",
      "e_floor": 3
    },
    {
      "e_id": "6134dabba24008efdf3d34a1",
      "e_name": "Brandi Stephens",
      "email": "brandistephens@idego.com",
      "e_city": "NYC",
      "e_dept": "IT",
      "e_floor": 1
    },
    {
      "e_id": "6134dabbbc522087e70f1ebb",
      "e_name": "Lynne Parsons",
      "email": "lynneparsons@idego.com",
      "e_city": "NYC",
      "e_dept": "Admin",
      "e_floor": 1
    },
    {
      "e_id": "6134dabb09b9c18ccdb36b6f",
      "e_name": "Bradford Cline",
      "email": "bradfordcline@idego.com",
      "e_city": "NYC",
      "e_dept": "IT",
      "e_floor": 2
    },
    {
      "e_id": "6134dabbc741a750c1e341c8",
      "e_name": "Juanita Hull",
      "email": "juanitahull@idego.com",
      "e_city": "WA",
      "e_dept": "Finance",
      "e_floor": 1
    },
    {
      "e_id": "6134dabb571ce603a95aa87f",
      "e_name": "Juliette Chambers",
      "email": "juliettechambers@idego.com",
      "e_city": "SF",
      "e_dept": "Finance",
      "e_floor": 2
    },
    {
      "e_id": "6134dabbc5a68c5ecd5e4697",
      "e_name": "Abby Mueller",
      "email": "abbymueller@idego.com",
      "e_city": "SA",
      "e_dept": "Finance",
      "e_floor": 2
    },
    {
      "e_id": "6134dabba67df6a4fcea69e0",
      "e_name": "Annie Walters",
      "email": "anniewalters@idego.com",
      "e_city": "LA",
      "e_dept": "IT",
      "e_floor": 2
    },
    {
      "e_id": "6134dabbd3ff86fb42f08ffd",
      "e_name": "Rosanna Spears",
      "email": "rosannaspears@idego.com",
      "e_city": "NYC",
      "e_dept": "Finance",
      "e_floor": 3
    },
    {
      "e_id": "6134dabbeb3184ac9e512880",
      "e_name": "Mendoza Madden",
      "email": "mendozamadden@idego.com",
      "e_city": "WA",
      "e_dept": "Admin",
      "e_floor": 2
    },
    {
      "e_id": "6134dabb231049287b95c035",
      "e_name": "Harriett Bridges",
      "email": "harriettbridges@idego.com",
      "e_city": "SA",
      "e_dept": "Admin",
      "e_floor": 3
    },
    {
      "e_id": "6134dabb068515663b44fa45",
      "e_name": "Bryan Vega",
      "email": "bryanvega@idego.com",
      "e_city": "NYC",
      "e_dept": "Admin",
      "e_floor": 2
    },
    {
      "e_id": "6134dabbdd2423701d2690bc",
      "e_name": "Elena Baxter",
      "email": "elenabaxter@idego.com",
      "e_city": "WA",
      "e_dept": "Admin",
      "e_floor": 1
    },
    {
      "e_id": "6134dabb9581eb5270c34045",
      "e_name": "Alissa Lynch",
      "email": "alissalynch@idego.com",
      "e_city": "NYC",
      "e_dept": "IT",
      "e_floor": 2
    },
    {
      "e_id": "6134dabb242ca19719d1e972",
      "e_name": "Penelope Jacobson",
      "email": "penelopejacobson@idego.com",
      "e_city": "LA",
      "e_dept": "Admin",
      "e_floor": 2
    },
    {
      "e_id": "6134dabb0056869e755bd787",
      "e_name": "Perez Gonzalez",
      "email": "perezgonzalez@idego.com",
      "e_city": "SA",
      "e_dept": "Admin",
      "e_floor": 1
    },
    {
      "e_id": "6134dabb4f4c3ceb477ad33f",
      "e_name": "Hays Castaneda",
      "email": "hayscastaneda@idego.com",
      "e_city": "SA",
      "e_dept": "Admin",
      "e_floor": 3
    },
    {
      "e_id": "6134dabb239828c854992577",
      "e_name": "Ashlee Stuart",
      "email": "ashleestuart@idego.com",
      "e_city": "ON",
      "e_dept": "Finance",
      "e_floor": 2
    },
    {
      "e_id": "6134dabbba1d5b05cb5572bc",
      "e_name": "Bryant Wells",
      "email": "bryantwells@idego.com",
      "e_city": "ON",
      "e_dept": "Finance",
      "e_floor": 1
    },
    {
      "e_id": "6134dabb6dcf192b8827eae9",
      "e_name": "Mendez Clark",
      "email": "mendezclark@idego.com",
      "e_city": "SA",
      "e_dept": "Admin",
      "e_floor": 1
    },
    {
      "e_id": "6134dabb968d47d131344b58",
      "e_name": "Dalton Knapp",
      "email": "daltonknapp@idego.com",
      "e_city": "SF",
      "e_dept": "Admin",
      "e_floor": 1
    },
    {
      "e_id": "6134dabbb5d70845749ca731",
      "e_name": "Lynn Willis",
      "email": "lynnwillis@idego.com",
      "e_city": "WA",
      "e_dept": "Admin",
      "e_floor": 1
    },
    {
      "e_id": "6134dabb406ae356ee06e1e0",
      "e_name": "Marietta Austin",
      "email": "mariettaaustin@idego.com",
      "e_city": "LA",
      "e_dept": "Admin",
      "e_floor": 2
    },
    {
      "e_id": "6134dabb69ce4b122ee1b855",
      "e_name": "Lester Hebert",
      "email": "lesterhebert@idego.com",
      "e_city": "NYC",
      "e_dept": "Finance",
      "e_floor": 2
    },
    {
      "e_id": "6134dabbf55e02d09aed80ce",
      "e_name": "Georgia Snider",
      "email": "georgiasnider@idego.com",
      "e_city": "SF",
      "e_dept": "Admin",
      "e_floor": 1
    },
    {
      "e_id": "6134dabb85d80fd1090a8e09",
      "e_name": "Letitia Hayden",
      "email": "letitiahayden@idego.com",
      "e_city": "SA",
      "e_dept": "Finance",
      "e_floor": 2
    },
    {
      "e_id": "6134dabb9772da0efbd02a7a",
      "e_name": "Vera Hamilton",
      "email": "verahamilton@idego.com",
      "e_city": "NYC",
      "e_dept": "IT",
      "e_floor": 2
    },
    {
      "e_id": "6134dabbfc673e718cf0848b",
      "e_name": "Tia Hodges",
      "email": "tiahodges@idego.com",
      "e_city": "SA",
      "e_dept": "IT",
      "e_floor": 1
    },
    {
      "e_id": "6134dabb35d72081ab6c76ec",
      "e_name": "Annette Hess",
      "email": "annettehess@idego.com",
      "e_city": "NYC",
      "e_dept": "Finance",
      "e_floor": 3
    },
    {
      "e_id": "6134dabb0e5b04d09814839e",
      "e_name": "Nadia Sullivan",
      "email": "nadiasullivan@idego.com",
      "e_city": "WA",
      "e_dept": "Finance",
      "e_floor": 3
    },
    {
      "e_id": "6134dabb290ab24f76677b45",
      "e_name": "Adeline Maxwell",
      "email": "adelinemaxwell@idego.com",
      "e_city": "ON",
      "e_dept": "Admin",
      "e_floor": 2
    },
    {
      "e_id": "6134dabb1259d4cd86b6ffe6",
      "e_name": "Gwen Winters",
      "email": "gwenwinters@idego.com",
      "e_city": "LA",
      "e_dept": "IT",
      "e_floor": 2
    },
    {
      "e_id": "6134dabbcb845ef73eae03aa",
      "e_name": "Cheryl Hardy",
      "email": "cherylhardy@idego.com",
      "e_city": "LA",
      "e_dept": "Admin",
      "e_floor": 2
    },
    {
      "e_id": "6134dabb840f85297fbb53ad",
      "e_name": "Haley Ford",
      "email": "haleyford@idego.com",
      "e_city": "ON",
      "e_dept": "Admin",
      "e_floor": 3
    },
    {
      "e_id": "6134dabbf6302ca2b289fba3",
      "e_name": "Mallory Ochoa",
      "email": "malloryochoa@idego.com",
      "e_city": "SA",
      "e_dept": "IT",
      "e_floor": 3
    },
    {
      "e_id": "6134dabb34f6ad22faef78a5",
      "e_name": "Ivy Hurst",
      "email": "ivyhurst@idego.com",
      "e_city": "SF",
      "e_dept": "IT",
      "e_floor": 2
    }
  ]
  XLfilters = { list: [], dict: {}, results: [], all:[] };
  
  markAll(field, b) {
      this.XLfilters.dict[field].list.forEach((x) => {x.checked=b;});
    }

  clearAll = function(field) {
    this.XLfilters.dict[field].searchText='';
    this.XLfilters.dict[field].list.forEach((x) => {x.checked=true;});
    }

  XLfiltrate = function() {
    	var i,j,k,selected,blocks,filter,option, data=this.XLfilters.all,filters=this.XLfilters.list;
      this.XLfilters.results=[];
      for (j=0; j<filters.length; j++) {
      	filter=filters[j];
        filter.regex = filter.searchText.length?new RegExp(filter.searchText, 'i'):false;
        for(k=0,selected=0;k<filter.list.length;k++){
        	if(!filter.list[k].checked)selected++;
          filter.list[k].visible=false;
          filter.list[k].match=filter.regex?filter.list[k].title.match(filter.regex):true;
        }
        filter.isActive=filter.searchText.length>0||selected>0;
      }
      for (i=0; i<data.length; i++){
        blocks={allows:[],rejects:[],mismatch:false};
      	for (j=0; j<filters.length; j++) {
          filter=filters[j]; option=filter.dict[data[i][filter.field]];
          (option.checked?blocks.allows:blocks.rejects).push(option);
          if(filter.regex && !option.match) blocks.mismatch=true;
      	}
        if(blocks.rejects.length==1) blocks.rejects[0].visible=true;
        else if(blocks.rejects.length==0&&!blocks.mismatch){
          this.XLfilters.results.push(data[i]);
        	blocks.allows.forEach((x)=>{x.visible=true});
        }
      }
      for (j=0; j<filters.length; j++) {
      	filter=filters[j];filter.options=[];
        for(k=0;k<filter.list.length;k++){
          if(filter.list[k].visible && filter.list[k].match) filter.options.push(filter.list[k]);
        }
      }
    }

    createXLfilters(arr, fields) {
      this.XLfilters.all = arr;
      for (var j=0; j<fields.length; j++) this.XLfilters.list.push(this.XLfilters.dict[fields[j]]={list:[],dict:{},field:fields[j],searchText:"",active:false,options:[]});
      for (var i=0,z; i<arr.length; i++) for (j=0; j<fields.length; j++) {
      z=this.XLfilters.dict[fields[j]];
      z.dict[arr[i][fields[j]]] || z.list.push(z.dict[arr[i][fields[j]]]={title:arr[i][fields[j]],checked:true, visible:false,match:false});
    }
    }

    changeFunction(event){
      this.XLfiltrate()
    }

ngOnInit(){
  this.createXLfilters(this.employees, ['e_city','e_dept','e_floor']);
  this.XLfiltrate()
}

}