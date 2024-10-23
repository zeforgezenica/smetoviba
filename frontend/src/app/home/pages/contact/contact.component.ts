import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ContactFormComponent } from 'src/app/home/components/contact/contact-form/contact-form.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [ContactFormComponent],
})
export class ContactComponent {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Kontakt');
    this.meta.addTags([
      { name: 'description', content: 'Sve informacije na jednom mjestu o izletištu Smetovi kod Zenice' },
      { name: 'keywords', content: 'Smetovi, Izletište, Zenica, Snijeg, Kontakt' }
    ]);
  }
}
