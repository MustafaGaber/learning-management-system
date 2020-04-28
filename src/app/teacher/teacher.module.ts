import { NgModule } from '@angular/core';
import { CourseDetailsComponent } from './pages/course-details/course-details.component';
import { LiveClassComponent } from './pages/live-class/live-class.component';
import { PlayerComponent } from './pages/player/player.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { CourseContentComponent } from './components/course-content/course-content.component';
import { CourseAssignmentsComponent } from './components/course-assignments/course-assignments.component';
import { CourseQuizzesComponent } from './components/course-quizzes/course-quizzes.component';
import { CourseResourcesComponent } from './components/course-resources/course-resources.component';
import { CoursePostsComponent } from './components/course-posts/course-posts.component';
import { CoursesListComponent } from './pages/courses-list/courses-list.component';
import { HomeComponent } from './pages/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CourseVideoComponent } from './dialogs/course-video/course-video.component';
import { HomeworkComponent } from './dialogs/homework/homework.component';
import { QuizComponent } from './dialogs/quiz/quiz.component';
import { ResourceComponent } from './dialogs/resource/resource.component';
import { CourseVideoSectionComponent } from './dialogs/course-video-section/course-video-section.component';
import { GoLiveComponent } from './components/go-live/go-live.component';
import { MessageComponent } from './dialogs/message/message.component';
import { StreamOptionsComponent } from './dialogs/stream-options/stream-options.component';
import { TodoItemComponent } from './dialogs/todo-item/todo-item.component';
import { MultipleSelectQuestionComponent } from './dialogs/multiple-select-question/multiple-select-question.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'courses', component: CoursesListComponent, },
  { path: 'player', component: PlayerComponent, },
  { path: 'course-details', component: CourseDetailsComponent, },
  { path: 'live', component: LiveClassComponent, },
];

@NgModule({
  entryComponents: [
    CourseVideoComponent,
    CourseVideoSectionComponent,
    QuizComponent,
    HomeworkComponent,
    ResourceComponent,
    MessageComponent,
    StreamOptionsComponent,
    TodoItemComponent,
    MultipleSelectQuestionComponent
  ],
  declarations: [
    HomeComponent,
    CoursesListComponent,
    CourseDetailsComponent, LiveClassComponent,
    PlayerComponent, HeaderComponent, SideNavComponent,
    CourseContentComponent, CourseAssignmentsComponent,
    CourseQuizzesComponent, CourseResourcesComponent, CoursePostsComponent,
    CourseVideoComponent, HomeworkComponent, QuizComponent, ResourceComponent,
    CourseVideoSectionComponent, GoLiveComponent, MessageComponent, StreamOptionsComponent,
    TodoItemComponent, MultipleSelectQuestionComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class TeacherModule { }
