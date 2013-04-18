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
  end

  def destroy
    puts params
    Todo.find(params[:id]).delete
    head :ok
  rescue Exception => e
    puts e
    head :bad_request 
  end
end
