import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgxUiLoaderService } from 'ngx-ui-loader';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gymnerator';

  firstName: string;
  lastName: string;
  dominioDisponivel: string;
  botaoGerar = 'Gerar';
  loading = false;
  domain: string;

  constructor(private http: HttpClient, private ngxService: NgxUiLoaderService) {
  }

  generate_gym_name(): void {
    this.reset_results();
    this.ngxService.start();

    const names = ['Body', 'Build', 'Force', 'Form', 'Shape', 'Energy', 'Life', 'Sport', 'Fit',
      'Fitness', 'Tech', 'Gym', 'Smart', 'Total'];

    const positions = this.getRandomItens(names, 2);

    const firstName = positions[0];
    const lastName = positions[1];

    this.check_domain_availability(firstName, lastName);
  }
  check_domain_availability(firstName, lastName): void {

    const jwaCustometId = '336218051';
    const jwaApiKey = 'b_BKhi2KgPZnGVFj0pNV3g';
    const user = jwaCustometId + ':' + jwaApiKey;
    const user64Based = btoa(user);

    const authorizationHeader = new HttpHeaders({
      'Authorization': 'Basic ' + user64Based
    });

    this.http.get('https://jsonwhoisapi.com/api/v1/whois?identifier=' + firstName.toLocaleLowerCase() +
      lastName.toLowerCase() + '.com.br', {
      headers: authorizationHeader
    }).subscribe(data => {
      const disponivel: boolean = data['registered'];
      this.set_results(firstName, lastName, disponivel);
    });
  }

  set_results(firstName, lastName, availability): void {
    this.ngxService.stop();
    this.botaoGerar = 'Gerar novamente!';
    this.firstName = firstName;
    this.lastName = lastName;
    this.domain = `${firstName.toLocaleLowerCase()}${lastName.toLocaleLowerCase()}.com.br`;
    this.dominioDisponivel = availability
      ? ' está indisponível'
      : 'está disponível';
  }

  reset_results(): void {
    this.firstName = '';
    this.lastName = '';
    this.dominioDisponivel = '';
    this.domain = '';
  }

  getRandomItens(array, n): string[] {
    let result = new Array(n);
    let len = array.length;
    let taken = new Array(len);
    if (n > len) { throw new RangeError('getRandom: more elements taken than available'); }
    while (n--) {
      let x = Math.floor(Math.random() * len);
      result[n] = array[x in taken ? taken[x] : x];
      taken[x] = --len;
    }
    return result;
  }}
