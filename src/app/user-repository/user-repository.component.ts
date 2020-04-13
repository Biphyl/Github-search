import { GithubService } from '../github-request/request.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user-repo',
  templateUrl: './user-repo.component.html',
  styleUrls: ['./user-repo.component.css']
})
export class UserRepositoryComponent implements OnInit {
  username: string;
  repo: any;
  repoService: any;

  constructor(_repoService: GithubService) { }
  getRepository() {
    this.repoService.updateUserName(this.username);
    this.repoService.getRepository();
    this.repo = this.repoService.repo;
  }

  ngOnInit() {
  }

}