class TodoController < ApplicationController
  def index
    render :json => Todo.all
  end

  def add
  end

  def update
  end

  def delete
  end
end
