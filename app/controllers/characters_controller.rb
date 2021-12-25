class CharactersController < ApplicationController
  before_action :set_character, only: %i[ show edit update destroy ]

  def curl_get_example
    @result = 'failure'
    @x1 = params[:pageX]
    @y1 = params[:pageY]
    @attemptDurationReceived = params[:attemptDuration]
    @loadDate = params[:clickDate]


    coordArray = params[:coordinates]
    # puts 'params[:coordinates]: ' + params[:coordinates]
    xCoord = params[:coordinates].split(',')[0].to_i
    yCoord = params[:coordinates].split(',')[1].to_i

    # puts 'xCoord: ' + xCoord

    if params[:my_data] == "Waldo"
      # puts params[:coordinates][0].to_i
      # puts params[:coordinates][2].to_i

      if xCoord == 76 && yCoord == 56
        # render plain: "good job!"

        # format.json { render json: @result }
        # format.html { render :index, status: :created }
        @result = 'success'

        respond_to do |format|
          format.html { render :index }
          # format.json { render :json => @result }
        end

        


      else
        respond_to do |format|
          format.html { render :index }
          # format.json { render :json => @result }
        end
      end
    else
      respond_to do |format|
        format.html { render :index }
        # format.json { render :json => @result }
      end
    end
  end

  def curl_post_example
    render plain: "Thanks for sending a POST request with cURL! Payload: #{request.body.read}"
  end

  # GET /characters or /characters.json
  def index
    @characters = Character.all
    @result = 'failure'

    respond_to do |format|
      format.html { render :index }
      # format.json { render :json => @result }
    end
  end

  # GET /characters/1 or /characters/1.json
  def show
  end

  # GET /characters/new
  def new
    @character = Character.new
  end

  # GET /characters/1/edit
  def edit
  end

  # POST /characters or /characters.json
  def create
    @character = Character.new(character_params)

    respond_to do |format|
      if @character.save
        format.html { redirect_to character_url(@character), notice: "Character was successfully created." }
        format.json { render :show, status: :created, location: @character }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @character.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /characters/1 or /characters/1.json
  def update
    respond_to do |format|
      if @character.update(character_params)
        format.html { redirect_to character_url(@character), notice: "Character was successfully updated." }
        format.json { render :show, status: :ok, location: @character }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @character.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /characters/1 or /characters/1.json
  def destroy
    @character.destroy

    respond_to do |format|
      format.html { redirect_to characters_url, notice: "Character was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_character
    @character = Character.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def character_params
    params.require(:character).permit(:name, :x_coordinate, :y_coordinate)
  end
end
