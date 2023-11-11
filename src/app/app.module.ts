import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { ToastrModule } from 'ngx-toastr';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodoHeaderComponent } from './components/todo-header/todo-header.component';
import { DeleteTodoComponent } from './components/delete-todo/delete-todo.component';
import { CheckTodoComponent } from './components/check-todo/check-todo.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { LoadingInterceptorService } from './services/loading-interceptor.service';

import { todoReducer } from './store/todo/todo.reducer';
import { TodoEffects } from './store/todo/todo.effects';
import { TruncatePipe } from './pipes/truncate.pipe';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    AddTodoComponent,
    TodoHeaderComponent,
    DeleteTodoComponent,
    CheckTodoComponent,
    SpinnerComponent,
    TruncatePipe,
    TodoDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgxSpinnerModule,
    StoreModule.forRoot({ todo: todoReducer }),
    EffectsModule.forRoot([TodoEffects]),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LoadingInterceptorService,
    multi: true
  },
    NgxSpinnerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
