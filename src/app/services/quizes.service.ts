import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateQuestion } from '../models/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  BASE_URL = 'http://localhost:8000';
  constructor(private http: HttpClient) { }

// Package
  createPackage(name: string) {
    return this.http.post(`${this.BASE_URL}/quiz/packages`, {name})
  }
  getPackageList() {
    return this.http.get(`${this.BASE_URL}/quiz/packages`);
  }
  deletePackage(id: number) {
    return this.http.delete(`${this.BASE_URL}/quiz/packages/${id}`).subscribe();
  }
  getPackageItem(id: number) {
    return this.http.get(`${this.BASE_URL}/quiz/packages/${id}`);
  }


  // Topic
  createTopic(name: string) {
    return this.http.post(`${this.BASE_URL}/quiz/topics`, {name})
  }
  getTopicList() {
    return this.http.get(`${this.BASE_URL}/quiz/topics`);
  }

  // Question

  createQuestion(question: CreateQuestion) {
    console.log(question);
    
    return this.http.post(`${this.BASE_URL}/quiz/questions`, question)
  }
}
