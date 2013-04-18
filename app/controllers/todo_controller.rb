class TodoController < ApplicationController
  def index
    render :json => Todo.all
  end

  def create
    if Todo.create(params[:todo])
      head :ok
    else
      head :bad_request
    end
  end

  def update
    todo = Todo.find(params[:id])
    todo.update_attributes!(params[:todo])
    head :ok
  rescue
    head :bad_request
  end

  def destroy
    Todo.find(params[:id]).delete
    head :ok
  rescue
    head :bad_request 
  end
end
