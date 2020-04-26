import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { CoursesListComponent } from './pages/courses-list/courses-list.component';
import { CourseDetailsComponent } from './pages/course-details/course-details.component';
import { CoursesService } from './services/courses.service';
import { CourseContentComponent } from './components/course-content/course-content.component';
import { CourseResourcesComponent } from './components/course-resources/course-resources.component';
import { CourseAssignmentsComponent } from './components/course-assignments/course-assignments.component';
import { CoursePostsComponent } from './components/course-posts/course-posts.component';
import { AskTeacherComponent } from './components/ask-teacher/ask-teacher.component';
import { PlayerComponent } from './pages/player/player.component';
import { LiveClassComponent } from './pages/live-class/live-class.component';
import { StreamOptionsComponent } from './dialogs/stream-options/stream-options.component';
import { CourseQuizesComponent } from './components/course-quizes/course-quizes.component';
import { MessageComponent } from './dialogs/message/message.component';
import { TodoComponent } from './pages/todo/todo.component';
import { TodoService } from './services/todo.service';
import { TodoItemComponent } from './dialogs/todo-item/todo-item.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'courses', component: CoursesListComponent, },
  { path: 'player', component: PlayerComponent, },
  { path: 'course-details', component: CourseDetailsComponent, },
  { path: 'live', component: LiveClassComponent, },
  { path: 'todo', component: TodoComponent, },
];

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    SideNavComponent,
    CoursesListComponent,
    CourseDetailsComponent,
    CourseContentComponent,
    CourseResourcesComponent,
    CourseAssignmentsComponent,
    CoursePostsComponent,
    AskTeacherComponent,
    PlayerComponent,
    LiveClassComponent,
    StreamOptionsComponent,
    CourseQuizesComponent,
    MessageComponent,
    TodoComponent,
    TodoItemComponent
  ],
  entryComponents: [
    StreamOptionsComponent,
    MessageComponent,
    TodoItemComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers: [CoursesService, TodoService]
})
export class StudentModule { }
