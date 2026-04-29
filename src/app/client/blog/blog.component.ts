import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

  searchText: string = '';

  articles = [
    {
      image: 'images/1.webp',
      category: 'Fitness',
      title: 'Comment améliorer votre condition physique en 30 jours',
      description: 'Programme simple pour transformer votre corps rapidement.',
      author: 'Admin',
      date: '12 Avril 2026'
    },
    {
      image: 'images/3.webp',
      category: 'Nutrition',
      title: 'Les meilleurs aliments pour une prise de masse',
      description: 'Optimisez votre alimentation pour de meilleurs résultats.',
      author: 'Coach John',
      date: '10 Avril 2026'
    },
    {
      image: 'images/1.webp',
      category: 'Motivation',
      title: 'Comment rester motivé dans votre parcours fitness',
      description: 'Des astuces simples pour rester constant.',
      author: 'Admin',
      date: '08 Avril 2026'
    }
  ];

  get filteredArticles() {
    return this.articles.filter(article =>
      article.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}