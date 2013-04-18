class TodoController < ApplicationController
  def index
    render :json => Todo.all
  end

  def add
    if Todo.create(params[:todo])
      head :ok
    else
      head :bad_request
    end
  end

  def update
  end

  def delete
  end
end
